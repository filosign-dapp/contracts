"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const glob_1 = require("glob");
const solidity_parser_antlr_1 = __importDefault(require("solidity-parser-antlr"));
const SRC_DIR = path_1.default.resolve(process.cwd(), "./src");
const OUT_DIR = path_1.default.join(SRC_DIR, "interfaces");
const SPDX_HEADER = "// SPDX-License-Identifier: MIT"; // change latr
function prepareOutDir() {
    if (fs_1.default.existsSync(OUT_DIR)) {
        const files = fs_1.default.readdirSync(OUT_DIR);
        for (const file of files) {
            const filePath = path_1.default.join(OUT_DIR, file);
            if (fs_1.default.statSync(filePath).isFile()) {
                fs_1.default.unlinkSync(filePath);
            }
        }
    }
    else {
        fs_1.default.mkdirSync(OUT_DIR, { recursive: true });
    }
}
function extractPragmaAndVersion(fileText) {
    try {
        const ast = solidity_parser_antlr_1.default.parse(fileText, { tolerant: true });
        let pragma = "";
        solidity_parser_antlr_1.default.visit(ast, {
            PragmaDirective(node) {
                if (!pragma && node.name === "solidity") {
                    pragma = `pragma solidity ${node.value};`;
                }
            },
        });
        return pragma;
    }
    catch (e) {
        return "";
    }
}
function typeNameToString(node) {
    if (!node)
        return "";
    switch (node.type) {
        case "ElementaryTypeName":
            return node.name;
        case "UserDefinedTypeName":
            if (typeof node.namePath === "string") {
                return node.namePath;
            }
            else if (node.namePath && node.namePath.name) {
                return node.namePath.name;
            }
            else if (Array.isArray(node.namePath)) {
                return node.namePath.map((p) => p.name || p).join(".");
            }
            return node.name || "UnknownType";
        case "ArrayTypeName":
            return `${typeNameToString(node.baseTypeName)}${node.length ? `[${node.length}]` : "[]"}`;
        case "Mapping":
            return `mapping(${typeNameToString(node.keyType)} => ${typeNameToString(node.valueType)})`;
        case "FunctionTypeName":
            return "function";
        default:
            return node.name || "UnknownType";
    }
}
function needsDataLocation(typeName) {
    if (typeName === "string" || typeName === "bytes")
        return true;
    if (typeName.endsWith("[]"))
        return true;
    if (typeName.startsWith("mapping("))
        return true;
    // Structs: starts with uppercase, not value types
    if (typeName[0] === typeName[0].toUpperCase() &&
        typeName !== "address" &&
        !typeName.startsWith("I") &&
        !typeName.startsWith("Uint") &&
        !typeName.startsWith("Int") &&
        !typeName.startsWith("Bytes"))
        return true;
    return false;
}
function extractMappingParams(typeName, paramNames = []) {
    if (typeName.type === "Mapping") {
        const keyType = typeNameToString(typeName.keyType);
        const paramName = paramNames.length > 0 ? paramNames[0] : "key";
        const keyParam = needsDataLocation(keyType)
            ? `${keyType} calldata ${paramName}`
            : `${keyType} ${paramName}`;
        const nextParamNames = paramNames.length > 1
            ? paramNames.slice(1)
            : [`key${paramNames.length + 1}`];
        const nested = extractMappingParams(typeName.valueType, nextParamNames);
        return {
            params: [keyParam, ...nested.params],
            returnType: nested.returnType,
        };
    }
    else {
        return {
            params: [],
            returnType: typeNameToString(typeName),
        };
    }
}
function paramListToString(paramList) {
    if (!paramList || !Array.isArray(paramList))
        return "";
    return paramList
        .map((p) => {
        const t = typeNameToString(p.typeName);
        const name = p.name || "";
        const storageLocation = p.storageLocation || "";
        const locationStr = storageLocation && storageLocation !== "default"
            ? ` ${storageLocation}`
            : "";
        return name ? `${t}${locationStr} ${name}` : `${t}${locationStr}`;
    })
        .join(", ");
}
function returnsToString(paramList) {
    if (!paramList || !Array.isArray(paramList) || paramList.length === 0)
        return "";
    const s = paramList
        .map((p) => {
        const t = typeNameToString(p.typeName);
        const name = p.name || "";
        const storageLocation = p.storageLocation || "";
        const locationStr = storageLocation && storageLocation !== "default"
            ? ` ${storageLocation}`
            : "";
        return name ? `${t}${locationStr} ${name}` : `${t}${locationStr}`;
    })
        .join(", ");
    return s.includes(",") ? `(${s})` : s;
}
function functionToSignature(node) {
    const name = node.name || "";
    if (!name ||
        name === "constructor" ||
        name === "receive" ||
        name === "fallback")
        return "";
    const params = paramListToString(node.parameters);
    const returns = node.returnParameters
        ? returnsToString(node.returnParameters)
        : "";
    const stateMut = node.stateMutability && node.stateMutability !== "nonpayable"
        ? node.stateMutability
        : "";
    const visibility = node.visibility || "";
    if (visibility === "private" || visibility === "internal")
        return "";
    const parts = [];
    parts.push(`function ${name}(${params})`);
    parts.push("external");
    if (stateMut)
        parts.push(stateMut);
    if (returns)
        parts.push(`returns (${returns})`);
    return parts.join(" ") + ";";
}
function eventToSignature(node) {
    const name = node.name;
    const params = node.parameters && node.parameters.parameters
        ? node.parameters.parameters
            .map((p) => {
            const type = typeNameToString(p.typeName);
            const indexed = p.indexed ? " indexed" : "";
            const pname = p.name ? ` ${p.name}` : "";
            return `${type}${indexed}${pname}`;
        })
            .join(", ")
        : "";
    return `event ${name}(${params});`;
}
function structToDefinition(node) {
    const name = node.name;
    const members = node.members
        ? node.members
            .map((member) => {
            const type = typeNameToString(member.typeName);
            const memberName = member.name;
            return `        ${type} ${memberName};`;
        })
            .join("\n")
        : "";
    return `    struct ${name} {\n${members}\n    }`;
}
function errorToSignature(node) {
    const name = node.name;
    const params = node.parameters ? paramListToString(node.parameters) : "";
    return `error ${name}(${params});`;
}
function generateInterfaceForContract(contractNode, pragma, srcFilePath) {
    const name = contractNode.name;
    const ifaceName = `I${name}`;
    const outFilename = path_1.default.join(OUT_DIR, `I${name}.sol`);
    const lines = [];
    lines.push(SPDX_HEADER);
    if (pragma)
        lines.push(pragma);
    lines.push("");
    const rel = path_1.default.relative(process.cwd(), srcFilePath);
    lines.push(`// Auto-generated from ${rel} — DO NOT EDIT (regenerate with the script only)`);
    lines.push("");
    lines.push(`interface ${ifaceName} {`);
    if (contractNode.subNodes && Array.isArray(contractNode.subNodes)) {
        for (const sub of contractNode.subNodes) {
            switch (sub.type) {
                case "StructDefinition": {
                    const structDef = structToDefinition(sub);
                    lines.push(structDef);
                    lines.push("");
                    break;
                }
                case "FunctionDefinition": {
                    const sig = functionToSignature(sub);
                    if (sig)
                        lines.push(`    ${sig}`);
                    break;
                }
                case "EventDefinition": {
                    const sig = eventToSignature(sub);
                    lines.push(`    ${sig}`);
                    break;
                }
                case "ErrorDefinition": {
                    const sig = errorToSignature(sub);
                    lines.push(`    ${sig}`);
                    break;
                }
                case "VariableDeclaration": {
                    if (sub.visibility === "public") {
                        const varType = typeNameToString(sub.typeName);
                        const varName = sub.name;
                        let params = "";
                        let returnType = varType;
                        if (sub.typeName.type === "ArrayTypeName") {
                            params = `uint256 index`;
                            returnType = typeNameToString(sub.typeName.baseTypeName);
                        }
                        else if (sub.typeName.type === "Mapping") {
                            const mappingInfo = extractMappingParams(sub.typeName);
                            params = mappingInfo.params.join(", ");
                            returnType = mappingInfo.returnType;
                        }
                        if (returnType.startsWith("I") &&
                            returnType !== "int" &&
                            returnType !== "int256") {
                            returnType = "address";
                        }
                        const returnLocation = needsDataLocation(returnType)
                            ? ` memory`
                            : "";
                        const getterSig = `function ${varName}(${params}) external view returns (${returnType}${returnLocation});`;
                        lines.push(`    ${getterSig}`);
                    }
                    break;
                }
                case "StateVariableDeclaration": {
                    if (sub.variables && Array.isArray(sub.variables)) {
                        for (const variable of sub.variables) {
                            if (variable.visibility === "public") {
                                const varType = typeNameToString(variable.typeName);
                                const varName = variable.name;
                                let params = "";
                                let returnType = varType;
                                if (variable.typeName.type === "ArrayTypeName") {
                                    params = `uint256 index`;
                                    returnType = typeNameToString(variable.typeName.baseTypeName);
                                }
                                else if (variable.typeName.type === "Mapping") {
                                    const mappingInfo = extractMappingParams(variable.typeName);
                                    params = mappingInfo.params.join(", ");
                                    returnType = mappingInfo.returnType;
                                }
                                if (returnType.startsWith("I") &&
                                    returnType !== "int" &&
                                    returnType !== "int256") {
                                    returnType = "address";
                                }
                                const returnLocation = needsDataLocation(returnType)
                                    ? ` memory`
                                    : "";
                                const getterSig = `function ${varName}(${params}) external view returns (${returnType}${returnLocation});`;
                                lines.push(`    ${getterSig}`);
                            }
                        }
                    }
                    break;
                }
                default:
                    break;
            }
        }
    }
    lines.push("}");
    lines.push("");
    fs_1.default.writeFileSync(outFilename, lines.join("\n"), { encoding: "utf8" });
    console.log(`Wrote ${path_1.default.relative(process.cwd(), outFilename)}`);
}
function processFile(filePath) {
    const text = fs_1.default.readFileSync(filePath, "utf8");
    const pragma = extractPragmaAndVersion(text);
    let ast;
    try {
        ast = solidity_parser_antlr_1.default.parse(text, { tolerant: true });
    }
    catch (err) {
        console.error(`Failed to parse ${filePath}:`, err);
        return;
    }
    solidity_parser_antlr_1.default.visit(ast, {
        ContractDefinition(node) {
            if (node.kind === "contract") {
                generateInterfaceForContract(node, pragma, filePath);
            }
        },
    });
}
function main() {
    prepareOutDir();
    const pattern = path_1.default.join(SRC_DIR, "**/*.sol");
    const files = glob_1.glob.sync(pattern, {
        nodir: true,
        ignore: [path_1.default.join(OUT_DIR, "**/*")],
    });
    if (files.length === 0) {
        console.log("No solidity files found under src/");
        return;
    }
    for (const f of files) {
        processFile(f);
    }
    console.log("Done.");
}
main();

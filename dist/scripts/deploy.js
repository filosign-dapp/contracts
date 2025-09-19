"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = __importDefault(require("hardhat"));
const bun_1 = require("bun");
async function main() {
    const [deployer] = await hardhat_1.default.viem.getWalletClients();
    console.log("Deploying contracts as ", deployer.account.address);
    const manager = await hardhat_1.default.viem.deployContract("FSManager");
    const fileRegistry = await hardhat_1.default.viem.getContractAt("FSFileRegistry", await manager.read.fileRegistry());
    const keyRegistry = await hardhat_1.default.viem.getContractAt("FSKeyRegistry", await manager.read.keyRegistry());
    console.log("Contracts deployed");
    const definitions = {
        FSManager: {
            address: manager.address,
            abi: manager.abi,
        },
        FSFileRegistry: {
            address: fileRegistry.address,
            abi: fileRegistry.abi,
        },
        FSKeyRegistry: {
            address: keyRegistry.address,
            abi: keyRegistry.abi,
        },
    };
    Bun.file("definitions.ts").write(`export const definitions = ${JSON.stringify(definitions, null, 2)} as const;\n`);
    console.log("Definitions written to definitions.ts");
    await (0, bun_1.$) `bunx --bun hardhat verify --network filecoinCalibration ${manager.address}`;
    await (0, bun_1.$) `bunx --bun hardhat verify --network filecoinCalibration ${fileRegistry.address}`;
    await (0, bun_1.$) `bunx --bun hardhat verify --network filecoinCalibration ${keyRegistry.address}`;
    console.log("Contracts verified on block explorer");
}
main()
    .then(() => console.log("Deployment script finished"))
    .catch((e) => {
    console.error(e);
    process.exit(1);
});

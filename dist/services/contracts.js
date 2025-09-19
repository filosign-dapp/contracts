"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContracts = getContracts;
const viem_1 = require("viem");
const definitions_1 = require("../definitions");
function getContracts(client) {
    return {
        FSManager: (0, viem_1.getContract)({ client, ...definitions_1.definitions.FSManager }),
        FSFileRegistry: (0, viem_1.getContract)({ client, ...definitions_1.definitions.FSFileRegistry }),
        FSKeyRegistry: (0, viem_1.getContract)({ client, ...definitions_1.definitions.FSKeyRegistry }),
    };
}

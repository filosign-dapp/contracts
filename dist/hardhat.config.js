"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomicfoundation/hardhat-toolbox-viem");
const config = {
    solidity: "0.8.26",
    sourcify: { enabled: true },
    paths: {
        sources: "./src",
    },
    networks: {
        hardhat: {
            allowUnlimitedContractSize: true,
        },
        filecoinCalibration: {
            accounts: [Bun.env.FC_PVT_KEY],
            chainId: 314159,
            url: "https://api.calibration.node.glif.io/rpc/v1",
        },
    },
    etherscan: {
        apiKey: {
            filecoinCalibration: "empyt",
        },
        customChains: [
            {
                network: "filecoinCalibration",
                chainId: 314159,
                urls: {
                    apiURL: "https://filecoin-testnet.blockscout.com/api",
                    browserURL: "https://filecoin-testnet.blockscout.com",
                },
            },
        ],
    },
};
exports.default = config;

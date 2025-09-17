import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.26",
  paths: {
    sources: "./src",
  },
  // networks: {
  //   hardhat: {
  //     chainId: 314159,
  //     forking: {
  //       url: "https://api.calibration.node.glif.io/rpc/v1",
  //     },
  //     chains: {
  //       "314159": {
  //         hardforkHistory: {
  //           // frontier: 3026000,
  //           // homestead: 3026000,
  //           // dao: 3026000,
  //           // tangerineWhistle: 3026000,
  //           // spuriousDragon: 3026000,
  //           // byzantium: 3026000,
  //           // constantinople: 3026000,
  //           // petersburg: 3026000,
  //           // istanbul: 3026000,
  //           // muirGlacier: 3026000,
  //           // berlin: 3026000,
  //           london: 302600,
  //           // arrowGlacier: 3026000,
  //           // grayGlacier: 3026000,
  //           // paris: 3026000,
  //         },
  //       },
  //     },
  //     gas: "auto",
  //   },
  // },
};

export default config;

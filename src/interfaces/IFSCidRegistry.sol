// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

// Auto-generated from src/FSCidRegistry.sol — DO NOT EDIT (regenerate with the script only)

interface IFSCidRegistry {
    function cids(uint256 index) external view returns (string memory);
    function cidIndex(string calldata key) external view returns (uint48);
    function registerCid(string memory cid) external returns (uint48);
}

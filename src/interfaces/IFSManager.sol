// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

// Auto-generated from src/FSManager.sol — DO NOT EDIT (regenerate with the script only)

interface IFSManager {
    function CidRegistry() external view returns (address);
    function FileRegistry() external view returns (address);
    function KeyRegistry() external view returns (address);
    function server() external view returns (address);
    function version() external view returns (uint8);
    function approvedSenders(address key, address key1) external view returns (bool);
    function setActiveVersion(uint8 version_) external;
    function approveSender(address sender_) external;
}

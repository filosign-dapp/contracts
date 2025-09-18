// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.26;

contract FSKeyRegistry {
    address public CidRegistry;
    address public FileRegistry;
    address public KeyRegistry;

    address public server;

    uint8 public version = 1;

    modifier onlyServer() {
        require(msg.sender == server, "Only server can call");
        _;
    }

    constructor() {
        server = msg.sender;
    }

    function setActiveVersion(uint8 version_) external onlyServer {
        version = version_;
    }
}

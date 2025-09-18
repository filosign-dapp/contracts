// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.26;

import "./FSFileRegistry.sol";
import "./FSKeyRegistry.sol";

contract FSManager {
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
        FileRegistry = address(new FSFileRegistry());
        KeyRegistry = address(new FSKeyRegistry());
    }

    function setActiveVersion(uint8 version_) external onlyServer {
        version = version_;
    }
}

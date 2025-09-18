// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.26;

contract FSKeyRegistry {
    struct KeygenData {
        bytes32 salt_auth;
        bytes32 salt_wrap;
        bytes32 salt_pin;
        bytes32 nonce;
        bytes seed;
        bytes32 commitment_pin;
    }

    mapping(address => KeygenData) public keygenData;
    mapping(address => uint8) keygenDataVersion;

    address public manager;

    constructor() {
        manager = (msg.sender);
    }

    function isRegistered(address user) public view returns (bool) {
        return keygenData[user].nonce != bytes32(0);
    }

    function registerKeygenData(KeygenData memory data_) external {
        require(data_.nonce != bytes32(0), "Invalid nonce");
        require(isRegistered(msg.sender) == false, "Data already registered");

        // keygenDataVersion[msg.sender] = manager.version();
        keygenData[msg.sender] = data_;
    }
}

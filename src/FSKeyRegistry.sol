// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

// import "hardhat/console.sol";

contract FSKeyRegistry {
    struct KeygenData {
        bytes32 salt_auth;
        bytes32 salt_wrap;
        bytes32 salt_pin;
        bytes32 nonce;
        bytes seed;
        // uint48 kdf;
    }

    uint8 public version = 1;

    mapping(address => KeygenData) public keygenData;

    constructor() {}

    function registerKeygenData(KeygenData memory data_) external {
        require(data_.nonce != bytes32(0), "Invalid nonce");
        require(
            keygenData[msg.sender].nonce == bytes32(0),
            "Data already registered"
        );

        keygenData[msg.sender] = data_;
    }
}

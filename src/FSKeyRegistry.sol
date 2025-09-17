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
    }

    uint8 public version = 1;

    mapping(address => KeygenData) public keygenData;

    constructor() {}    

    function isRegistered(address user) external view returns (bool) {
        return keygenData[user].nonce != bytes32(0);
    }

    function registerKeygenData(KeygenData memory data_) external {
        require(data_.nonce != bytes32(0), "Invalid nonce");
        require(
            isRegistered(msg.sender) == false,
            "Data already registered"
        );

        keygenData[msg.sender] = data_;
    }
    
    function bumpVersion()
}

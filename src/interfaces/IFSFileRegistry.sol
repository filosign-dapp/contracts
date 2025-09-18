// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

// Auto-generated from src/FSFileRegistry.sol — DO NOT EDIT (regenerate with the script only)

interface IFSFileRegistry {
    struct FileData {
        string cid;
        address sender;
        address recipient;
        bool acked;
        bytes32 ownerSignature;
    }

    struct SignatureData {
        address signer;
        uint48 timestamp;
        bytes32 signatureVisualHash;
        uint8 v;
        bytes32 r;
        bytes32 s;
    }

}

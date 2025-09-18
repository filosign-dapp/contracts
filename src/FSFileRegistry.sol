// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.26;

import "./interfaces/IFSManager.sol";

contract FSFileRegistry {
    struct FileData {
        bytes32 pieceCidPrefix;
        uint16 pieceCidTail;
        address sender;
        address recipient;
        bool acked;
    }

    struct SignatureData {
        address signer;
        uint48 timestamp;
        bytes32 signatureVisualHash;
        uint8 v;
        bytes32 r;
        bytes32 s;
    }

    mapping(bytes32 => FileData) private _files;
    mapping(bytes32 => SignatureData) private _signatures;

    IFSManager public manager;

    constructor() {
        manager = msg.sender;
    }

    function acknowledge(bytes32 cidIdentifier_) external {
        FileData storage file = _files[cidIdentifier_];
        require(file.pieceCidPrefix != bytes32(0), "File not registered");
        require(file.recipient == msg.sender, "Only recipient can ack");
        require(file.acked == false, "Already acknowledged");

        file.acked = true;
    }

    function registerFile(
        bytes32 pieceCidPrefix_,
        uint16 pieceCidTail_,
        address recipient_
    ) external {}

    function cidIdentifier(
        bytes32 pieceCidPrefix_,
        uint16 pieceCidTail_
    ) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(pieceCidPrefix_, pieceCidTail_));
    }

    function getFileData(
        bytes32 cidIdentifier_
    ) external view returns (FileData memory) {
        return _files[cidIdentifier_];
    }

    function getSignatureData(
        bytes32 cidIdentifier_
    ) external view returns (SignatureData memory) {
        return _signatures[cidIdentifier_];
    }
}

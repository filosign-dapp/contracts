// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.26;

import "./interfaces/IFSManager.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

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
        manager = IFSManager(msg.sender);
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
    ) external {
        FileData storage file = _files[
            cidIdentifier(pieceCidPrefix_, pieceCidTail_)
        ];

        require(file.pieceCidPrefix == bytes32(0), "File already registered");
        require(
            manager.approvedSenders(recipient_, msg.sender),
            "Sender not approved by recipient"
        );

        file.pieceCidPrefix = pieceCidPrefix_;
        file.pieceCidTail = pieceCidTail_;
        file.sender = msg.sender;
        file.recipient = recipient_;
        file.acked = false;
    }

    function submitSignature(
        bytes32 cidIdentifier_,
        bytes32 signatureVisualHash_,
        uint8 v_,
        bytes32 r_,
        bytes32 s_
    ) external {
        FileData storage file = _files[cidIdentifier_];
        SignatureData storage signature = _signatures[cidIdentifier_];
        require(file.pieceCidPrefix != bytes32(0), "File not registered");
        require(
            file.recipient == msg.sender,
            "Only recipient can submit signature"
        );
        require(signature.signer == address(0), "Signature already submitted");
        require(
            file.acked == true,
            "file needs to be acknowledged before submitting signature"
        );
        // require(
        //     verifySignature(
        //         msg.sender,
        //         keccak256(
        //             abi.encodePacked(
        //                 file.pieceCidPrefix,
        //                 file.pieceCidTail,
        //                 signatureVisualHash_
        //             )
        //         ),
        //         v_,
        //         r_,
        //         s_
        //     ),
        //     "Invalid signature"
        // );
        // TODO : FIX LATER PLEASE

        signature.signer = msg.sender;
        signature.timestamp = uint48(block.timestamp);
        signature.signatureVisualHash = signatureVisualHash_;
        signature.v = v_;
        signature.r = r_;
        signature.s = s_;
    }

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

    function verifySignature(
        address signer_,
        bytes32 messageHash_,
        uint8 v_,
        bytes32 r_,
        bytes32 s_
    ) internal pure returns (bool) {
        address recovered = ECDSA.recover(messageHash_, v_, r_, s_);
        return recovered == signer_;
    }
}

// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract FSFileRegistry {
    using ECDSA for bytes32;

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

    function verifySignature(
        address signer,
        bytes32 messageHash,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) internal pure returns (bool) {
        address recovered = ECDSA.recover(messageHash, v, r, s);
        return recovered == signer;
    }
}

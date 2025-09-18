// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.26;

contract FSCidRegistry {
    string[] public cids;
    mapping(string => uint48) public cidIndex;

    constructor() {
        cids.push(""); // Reserve index 0
    }

    function registerCid(string memory cid) external returns (uint48) {
        if (cidIndex[cid] == 0) {
            cids.push(cid);
            cidIndex[cid] = uint48(cids.length);
            return uint48(cids.length);
        } else {
            return cidIndex[cid];
        }
    }
}

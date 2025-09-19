"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.definitions = void 0;
exports.definitions = {
    "FSManager": {
        "abi": [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "sender_",
                        "type": "address"
                    }
                ],
                "name": "approveSender",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "approvedSenders",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "cidRegistry",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "fileRegistry",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "keyRegistry",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "server",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint8",
                        "name": "version_",
                        "type": "uint8"
                    }
                ],
                "name": "setActiveVersion",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "version",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ],
        "address": "0x589a6659084bffa6e76793ed67617f10636d0ae3"
    },
    "FSFileRegistry": {
        "abi": [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "cidIdentifier_",
                        "type": "bytes32"
                    }
                ],
                "name": "acknowledge",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "pieceCidPrefix_",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint16",
                        "name": "pieceCidTail_",
                        "type": "uint16"
                    }
                ],
                "name": "cidIdentifier",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "pure",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "cidIdentifier_",
                        "type": "bytes32"
                    }
                ],
                "name": "getFileData",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "bytes32",
                                "name": "pieceCidPrefix",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint16",
                                "name": "pieceCidTail",
                                "type": "uint16"
                            },
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "recipient",
                                "type": "address"
                            },
                            {
                                "internalType": "bool",
                                "name": "acked",
                                "type": "bool"
                            }
                        ],
                        "internalType": "struct FSFileRegistry.FileData",
                        "name": "",
                        "type": "tuple"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "cidIdentifier_",
                        "type": "bytes32"
                    }
                ],
                "name": "getSignatureData",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint48",
                                "name": "timestamp",
                                "type": "uint48"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "signatureVisualHash",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint8",
                                "name": "v",
                                "type": "uint8"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "r",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "internalType": "struct FSFileRegistry.SignatureData",
                        "name": "",
                        "type": "tuple"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "manager",
                "outputs": [
                    {
                        "internalType": "contract IFSManager",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "pieceCidPrefix_",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint16",
                        "name": "pieceCidTail_",
                        "type": "uint16"
                    },
                    {
                        "internalType": "address",
                        "name": "recipient_",
                        "type": "address"
                    }
                ],
                "name": "registerFile",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "cidIdentifier_",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "signatureVisualHash_",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint8",
                        "name": "v_",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "r_",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "s_",
                        "type": "bytes32"
                    }
                ],
                "name": "submitSignature",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        "address": "0x9Af32E8202687180CdcCFcDcb4c2019b42e9BEAd"
    },
    "FSKeyRegistry": {
        "abi": [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user_",
                        "type": "address"
                    }
                ],
                "name": "isRegistered",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "keygenData",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "salt_auth",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "salt_wrap",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "salt_pin",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "nonce",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes",
                        "name": "seed",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "commitment_pin",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "manager",
                "outputs": [
                    {
                        "internalType": "contract IFSManager",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "components": [
                            {
                                "internalType": "bytes32",
                                "name": "salt_auth",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "salt_wrap",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "salt_pin",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "nonce",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes",
                                "name": "seed",
                                "type": "bytes"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "commitment_pin",
                                "type": "bytes32"
                            }
                        ],
                        "internalType": "struct FSKeyRegistry.KeygenData",
                        "name": "data_",
                        "type": "tuple"
                    }
                ],
                "name": "registerKeygenData",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        "address": "0x8ab1D044bc4eC0a68bcf842E01832C2862F53910"
    }
};

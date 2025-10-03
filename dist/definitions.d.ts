export declare const definitions: {
    readonly FSManager: {
        readonly address: "0x44baf919dcf39f3417ea40a213a90169d4eb8ad4";
        readonly abi: readonly [{
            readonly inputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "constructor";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }];
            readonly name: "SenderApproved";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }];
            readonly name: "SenderRevoked";
            readonly type: "event";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "sender_";
                readonly type: "address";
            }];
            readonly name: "approveSender";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "";
                readonly type: "address";
            }];
            readonly name: "approvedSenders";
            readonly outputs: readonly [{
                readonly internalType: "bool";
                readonly name: "";
                readonly type: "bool";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "cidRegistry";
            readonly outputs: readonly [{
                readonly internalType: "address";
                readonly name: "";
                readonly type: "address";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "fileRegistry";
            readonly outputs: readonly [{
                readonly internalType: "address";
                readonly name: "";
                readonly type: "address";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "keyRegistry";
            readonly outputs: readonly [{
                readonly internalType: "address";
                readonly name: "";
                readonly type: "address";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "sender_";
                readonly type: "address";
            }];
            readonly name: "revokeSender";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "server";
            readonly outputs: readonly [{
                readonly internalType: "address";
                readonly name: "";
                readonly type: "address";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint8";
                readonly name: "version_";
                readonly type: "uint8";
            }];
            readonly name: "setActiveVersion";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "version";
            readonly outputs: readonly [{
                readonly internalType: "uint8";
                readonly name: "";
                readonly type: "uint8";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }];
    };
    readonly FSFileRegistry: {
        readonly address: "0x1aca97d94140d2fe1C4B6907294c99E3Aa9a41b5";
        readonly abi: readonly [{
            readonly inputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "constructor";
        }, {
            readonly inputs: readonly [];
            readonly name: "ECDSAInvalidSignature";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "length";
                readonly type: "uint256";
            }];
            readonly name: "ECDSAInvalidSignatureLength";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes32";
                readonly name: "s";
                readonly type: "bytes32";
            }];
            readonly name: "ECDSAInvalidSignatureS";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidShortString";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "string";
                readonly name: "str";
                readonly type: "string";
            }];
            readonly name: "StringTooLong";
            readonly type: "error";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [];
            readonly name: "EIP712DomainChanged";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "bytes32";
                readonly name: "cidIdentifier";
                readonly type: "bytes32";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint48";
                readonly name: "timestamp";
                readonly type: "uint48";
            }];
            readonly name: "FileAcknowledged";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "bytes32";
                readonly name: "cidIdentifier";
                readonly type: "bytes32";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint48";
                readonly name: "timestamp";
                readonly type: "uint48";
            }];
            readonly name: "FileRegistered";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "bytes32";
                readonly name: "cidIdentifier";
                readonly type: "bytes32";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "signer";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint48";
                readonly name: "timestamp";
                readonly type: "uint48";
            }];
            readonly name: "SignatureSubmitted";
            readonly type: "event";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes32";
                readonly name: "cidIdentifier_";
                readonly type: "bytes32";
            }];
            readonly name: "acknowledge";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes32";
                readonly name: "pieceCidPrefix_";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint16";
                readonly name: "pieceCidTail_";
                readonly type: "uint16";
            }];
            readonly name: "cidIdentifier";
            readonly outputs: readonly [{
                readonly internalType: "bytes32";
                readonly name: "";
                readonly type: "bytes32";
            }];
            readonly stateMutability: "pure";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "eip712Domain";
            readonly outputs: readonly [{
                readonly internalType: "bytes1";
                readonly name: "fields";
                readonly type: "bytes1";
            }, {
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "version";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "chainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "verifyingContract";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32";
                readonly name: "salt";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "extensions";
                readonly type: "uint256[]";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes32";
                readonly name: "cidIdentifier_";
                readonly type: "bytes32";
            }];
            readonly name: "getFileData";
            readonly outputs: readonly [{
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "pieceCidPrefix";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "address";
                    readonly name: "sender";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "recipient";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "pieceCidTail";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "bool";
                    readonly name: "acked";
                    readonly type: "bool";
                }];
                readonly internalType: "struct FSFileRegistry.FileData";
                readonly name: "";
                readonly type: "tuple";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes32";
                readonly name: "cidIdentifier_";
                readonly type: "bytes32";
            }];
            readonly name: "getSignatureData";
            readonly outputs: readonly [{
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "signer";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint48";
                    readonly name: "timestamp";
                    readonly type: "uint48";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "signatureVisualHash";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "v";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "r";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "s";
                    readonly type: "bytes32";
                }];
                readonly internalType: "struct FSFileRegistry.SignatureData";
                readonly name: "";
                readonly type: "tuple";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "manager";
            readonly outputs: readonly [{
                readonly internalType: "contract IFSManager";
                readonly name: "";
                readonly type: "address";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes32";
                readonly name: "pieceCidPrefix_";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint16";
                readonly name: "pieceCidTail_";
                readonly type: "uint16";
            }, {
                readonly internalType: "address";
                readonly name: "recipient_";
                readonly type: "address";
            }];
            readonly name: "registerFile";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes32";
                readonly name: "cidIdentifier_";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "signatureVisualHash_";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint8";
                readonly name: "v_";
                readonly type: "uint8";
            }, {
                readonly internalType: "bytes32";
                readonly name: "r_";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "s_";
                readonly type: "bytes32";
            }];
            readonly name: "submitSignature";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }];
    };
    readonly FSKeyRegistry: {
        readonly address: "0xE14B963e259EE2bF617DFd216A2e8F1D4a0C9213";
        readonly abi: readonly [{
            readonly inputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "constructor";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "bytes32";
                readonly name: "publicKey";
                readonly type: "bytes32";
            }, {
                readonly indexed: false;
                readonly internalType: "uint8";
                readonly name: "version";
                readonly type: "uint8";
            }];
            readonly name: "KeygenDataRegistered";
            readonly type: "event";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "user_";
                readonly type: "address";
            }];
            readonly name: "isRegistered";
            readonly outputs: readonly [{
                readonly internalType: "bool";
                readonly name: "";
                readonly type: "bool";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "";
                readonly type: "address";
            }];
            readonly name: "keygenData";
            readonly outputs: readonly [{
                readonly internalType: "bytes32";
                readonly name: "salt_auth";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "salt_wrap";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "salt_pin";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "nonce";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes20";
                readonly name: "seed_head";
                readonly type: "bytes20";
            }, {
                readonly internalType: "bytes32";
                readonly name: "seed_word";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes20";
                readonly name: "seed_tail";
                readonly type: "bytes20";
            }, {
                readonly internalType: "bytes20";
                readonly name: "commitment_pin";
                readonly type: "bytes20";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "";
                readonly type: "address";
            }];
            readonly name: "keygenDataVersion";
            readonly outputs: readonly [{
                readonly internalType: "uint8";
                readonly name: "";
                readonly type: "uint8";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "manager";
            readonly outputs: readonly [{
                readonly internalType: "contract IFSManager";
                readonly name: "";
                readonly type: "address";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "";
                readonly type: "address";
            }];
            readonly name: "publicKeys";
            readonly outputs: readonly [{
                readonly internalType: "bytes32";
                readonly name: "";
                readonly type: "bytes32";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly components: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "salt_auth";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "salt_wrap";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "salt_pin";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "nonce";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes20";
                    readonly name: "seed_head";
                    readonly type: "bytes20";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "seed_word";
                    readonly type: "bytes32";
                }, {
                    readonly internalType: "bytes20";
                    readonly name: "seed_tail";
                    readonly type: "bytes20";
                }, {
                    readonly internalType: "bytes20";
                    readonly name: "commitment_pin";
                    readonly type: "bytes20";
                }];
                readonly internalType: "struct FSKeyRegistry.KeygenData";
                readonly name: "data_";
                readonly type: "tuple";
            }, {
                readonly internalType: "bytes32";
                readonly name: "publicKey_";
                readonly type: "bytes32";
            }];
            readonly name: "registerKeygenData";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }];
    };
};
export declare const contractsDeployedAtBlock = 3073516n;

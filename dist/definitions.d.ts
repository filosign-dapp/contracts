export declare const definitions: {
    readonly FSManager: {
        readonly abi: readonly [{
            readonly inputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "constructor";
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
        readonly address: "0x589a6659084bffa6e76793ed67617f10636d0ae3";
    };
    readonly FSFileRegistry: {
        readonly abi: readonly [{
            readonly inputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "constructor";
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
                    readonly internalType: "uint16";
                    readonly name: "pieceCidTail";
                    readonly type: "uint16";
                }, {
                    readonly internalType: "address";
                    readonly name: "sender";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "recipient";
                    readonly type: "address";
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
        readonly address: "0x9Af32E8202687180CdcCFcDcb4c2019b42e9BEAd";
    };
    readonly FSKeyRegistry: {
        readonly abi: readonly [{
            readonly inputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "constructor";
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
                readonly internalType: "bytes";
                readonly name: "seed";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes32";
                readonly name: "commitment_pin";
                readonly type: "bytes32";
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
                    readonly internalType: "bytes";
                    readonly name: "seed";
                    readonly type: "bytes";
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "commitment_pin";
                    readonly type: "bytes32";
                }];
                readonly internalType: "struct FSKeyRegistry.KeygenData";
                readonly name: "data_";
                readonly type: "tuple";
            }];
            readonly name: "registerKeygenData";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }];
        readonly address: "0x8ab1D044bc4eC0a68bcf842E01832C2862F53910";
    };
};

import { type Client, type WalletClient } from "viem";
export declare function getContracts<T extends Client | WalletClient>(client: T): {
    FSManager: (((T extends {
        public: Client;
    } ? T["public"] : T) extends infer T_3 ? T_3 extends (T extends {
        public: Client;
    } ? T["public"] : T) ? T_3 extends Client ? {
        read: {
            approvedSenders: (args: readonly [`0x${string}`, `0x${string}`], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly [{
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
            }], "approvedSenders", readonly [`0x${string}`, `0x${string}`]>, "address" | "abi" | "args" | "functionName">> | undefined) => Promise<boolean>;
            cidRegistry: (options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly [{
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
            }], "cidRegistry", readonly []>, "address" | "abi" | "args" | "functionName">> | undefined) => Promise<`0x${string}`>;
            fileRegistry: (options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly [{
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
            }], "fileRegistry", readonly []>, "address" | "abi" | "args" | "functionName">> | undefined) => Promise<`0x${string}`>;
            keyRegistry: (options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly [{
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
            }], "keyRegistry", readonly []>, "address" | "abi" | "args" | "functionName">> | undefined) => Promise<`0x${string}`>;
            server: (options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly [{
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
            }], "server", readonly []>, "address" | "abi" | "args" | "functionName">> | undefined) => Promise<`0x${string}`>;
            version: (options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly [{
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
            }], "version", readonly []>, "address" | "abi" | "args" | "functionName">> | undefined) => Promise<number>;
        };
    } & {
        estimateGas: {
            approveSender: (args: readonly [`0x${string}`], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "approveSender", readonly [`0x${string}`], T_3["chain"]>, "address" | "abi" | "args" | "functionName">>) => Promise<import("viem").EstimateContractGasReturnType>;
            revokeSender: (args: readonly [`0x${string}`], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "revokeSender", readonly [`0x${string}`], T_3["chain"]>, "address" | "abi" | "args" | "functionName">>) => Promise<import("viem").EstimateContractGasReturnType>;
            setActiveVersion: (args: readonly [number], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "setActiveVersion", readonly [number], T_3["chain"]>, "address" | "abi" | "args" | "functionName">>) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            approveSender: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(args: readonly [`0x${string}`], options?: Omit<import("viem").SimulateContractParameters<readonly [{
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
            }], "approveSender", readonly [`0x${string}`], T_3["chain"], chainOverride, accountOverride>, "address" | "abi" | "args" | "functionName"> | undefined) => Promise<import("viem").SimulateContractReturnType<readonly [{
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
            }], "approveSender", readonly [`0x${string}`], T_3["chain"], (T extends {
                wallet: Client;
            } ? T["wallet"] : T) extends infer T_4 ? T_4 extends (T extends {
                wallet: Client;
            } ? T["wallet"] : T) ? T_4 extends Client ? T_4["account"] : T_3["account"] : never : never, chainOverride, accountOverride>>;
            revokeSender: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(args: readonly [`0x${string}`], options?: Omit<import("viem").SimulateContractParameters<readonly [{
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
            }], "revokeSender", readonly [`0x${string}`], T_3["chain"], chainOverride, accountOverride>, "address" | "abi" | "args" | "functionName"> | undefined) => Promise<import("viem").SimulateContractReturnType<readonly [{
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
            }], "revokeSender", readonly [`0x${string}`], T_3["chain"], (T extends {
                wallet: Client;
            } ? T["wallet"] : T) extends infer T_4 ? T_4 extends (T extends {
                wallet: Client;
            } ? T["wallet"] : T) ? T_4 extends Client ? T_4["account"] : T_3["account"] : never : never, chainOverride, accountOverride>>;
            setActiveVersion: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(args: readonly [number], options?: Omit<import("viem").SimulateContractParameters<readonly [{
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
            }], "setActiveVersion", readonly [number], T_3["chain"], chainOverride, accountOverride>, "address" | "abi" | "args" | "functionName"> | undefined) => Promise<import("viem").SimulateContractReturnType<readonly [{
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
            }], "setActiveVersion", readonly [number], T_3["chain"], (T extends {
                wallet: Client;
            } ? T["wallet"] : T) extends infer T_4 ? T_4 extends (T extends {
                wallet: Client;
            } ? T["wallet"] : T) ? T_4 extends Client ? T_4["account"] : T_3["account"] : never : never, chainOverride, accountOverride>>;
        };
    } & {
        createEventFilter: {
            SenderApproved: <const args extends {
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | undefined, strict extends boolean | undefined = undefined>(args: {
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | ({
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
            } extends infer T_4 ? T_4 extends {
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
            } ? T_4 extends args ? Readonly<args> : never : never : never), options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined) => Promise<import("viem").CreateContractEventFilterReturnType<readonly [{
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
            }], "SenderApproved", args, strict>>;
            SenderRevoked: <const args extends {
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | undefined, strict extends boolean | undefined = undefined>(args: {
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | ({
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
            } extends infer T_4 ? T_4 extends {
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
            } ? T_4 extends args ? Readonly<args> : never : never : never), options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined) => Promise<import("viem").CreateContractEventFilterReturnType<readonly [{
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
            }], "SenderRevoked", args, strict>>;
        };
        getEvents: {
            SenderApproved: (args?: {
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | undefined, options?: {
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
                blockHash?: `0x${string}` | undefined;
            } | undefined) => Promise<import("viem").GetContractEventsReturnType<readonly [{
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
            }], "SenderApproved">>;
            SenderRevoked: (args?: {
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | undefined, options?: {
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
                blockHash?: `0x${string}` | undefined;
            } | undefined) => Promise<import("viem").GetContractEventsReturnType<readonly [{
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
            }], "SenderRevoked">>;
        };
        watchEvent: {
            SenderApproved: (args: {
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
            }, options: {
                batch?: boolean | undefined | undefined;
                pollingInterval?: number | undefined | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | undefined;
                onError?: ((error: Error) => void) | undefined | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly [{
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
                }], "SenderApproved", undefined>;
                poll?: true | undefined | undefined;
            }) => import("viem").WatchContractEventReturnType;
            SenderRevoked: (args: {
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
            }, options: {
                batch?: boolean | undefined | undefined;
                pollingInterval?: number | undefined | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | undefined;
                onError?: ((error: Error) => void) | undefined | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly [{
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
                }], "SenderRevoked", undefined>;
                poll?: true | undefined | undefined;
            }) => import("viem").WatchContractEventReturnType;
        };
    } : unknown : never : never) & ((T extends {
        wallet: Client;
    } ? T["wallet"] : T) extends infer T_4 ? T_4 extends (T extends {
        wallet: Client;
    } ? T["wallet"] : T) ? T_4 extends Client ? {
        estimateGas: {
            approveSender: (args: readonly [`0x${string}`], ...parameters: import("viem").IsUndefined<T_4["account"]> extends infer T_5 ? T_5 extends import("viem").IsUndefined<T_4["account"]> ? T_5 extends true ? [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "approveSender", readonly [`0x${string}`], T_4["chain"]>, "address" | "abi" | "args" | "functionName">>] : [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "approveSender", readonly [`0x${string}`], T_4["chain"]>, "address" | "abi" | "args" | "functionName">> | undefined] : never : never) => Promise<import("viem").EstimateContractGasReturnType>;
            revokeSender: (args: readonly [`0x${string}`], ...parameters: import("viem").IsUndefined<T_4["account"]> extends infer T_5 ? T_5 extends import("viem").IsUndefined<T_4["account"]> ? T_5 extends true ? [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "revokeSender", readonly [`0x${string}`], T_4["chain"]>, "address" | "abi" | "args" | "functionName">>] : [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "revokeSender", readonly [`0x${string}`], T_4["chain"]>, "address" | "abi" | "args" | "functionName">> | undefined] : never : never) => Promise<import("viem").EstimateContractGasReturnType>;
            setActiveVersion: (args: readonly [number], ...parameters: import("viem").IsUndefined<T_4["account"]> extends infer T_5 ? T_5 extends import("viem").IsUndefined<T_4["account"]> ? T_5 extends true ? [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "setActiveVersion", readonly [number], T_4["chain"]>, "address" | "abi" | "args" | "functionName">>] : [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "setActiveVersion", readonly [number], T_4["chain"]>, "address" | "abi" | "args" | "functionName">> | undefined] : never : never) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        write: {
            approveSender: <chainOverride extends import("viem").Chain | undefined, options extends import("viem").UnionOmit<import("viem").WriteContractParameters<readonly [{
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
            }], "approveSender", readonly [`0x${string}`], T_4["chain"], T_4["account"], chainOverride>, "address" | "abi" | "args" | "functionName"> extends infer T_5 ? { [K_2 in keyof T_5]: T_5[K_2]; } : never>(args: readonly [`0x${string}`], ...parameters: (import("viem").IsUndefined<T_4["account"]> extends infer T_6 ? T_6 extends import("viem").IsUndefined<T_4["account"]> ? T_6 extends true ? true : import("viem").IsUndefined<T_4["chain"]> extends infer T_7 ? T_7 extends import("viem").IsUndefined<T_4["chain"]> ? T_7 extends true ? true : false : never : never : never : never) extends infer T_8 ? T_8 extends (import("viem").IsUndefined<T_4["account"]> extends infer T_9 ? T_9 extends import("viem").IsUndefined<T_4["account"]> ? T_9 extends true ? true : import("viem").IsUndefined<T_4["chain"]> extends infer T_10 ? T_10 extends import("viem").IsUndefined<T_4["chain"]> ? T_10 extends true ? true : false : never : never : never : never) ? T_8 extends true ? [options: options] : [options?: options | undefined] : never : never) => Promise<import("viem").WriteContractReturnType>;
            revokeSender: <chainOverride extends import("viem").Chain | undefined, options extends import("viem").UnionOmit<import("viem").WriteContractParameters<readonly [{
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
            }], "revokeSender", readonly [`0x${string}`], T_4["chain"], T_4["account"], chainOverride>, "address" | "abi" | "args" | "functionName"> extends infer T_5 ? { [K_2 in keyof T_5]: T_5[K_2]; } : never>(args: readonly [`0x${string}`], ...parameters: (import("viem").IsUndefined<T_4["account"]> extends infer T_6 ? T_6 extends import("viem").IsUndefined<T_4["account"]> ? T_6 extends true ? true : import("viem").IsUndefined<T_4["chain"]> extends infer T_7 ? T_7 extends import("viem").IsUndefined<T_4["chain"]> ? T_7 extends true ? true : false : never : never : never : never) extends infer T_8 ? T_8 extends (import("viem").IsUndefined<T_4["account"]> extends infer T_9 ? T_9 extends import("viem").IsUndefined<T_4["account"]> ? T_9 extends true ? true : import("viem").IsUndefined<T_4["chain"]> extends infer T_10 ? T_10 extends import("viem").IsUndefined<T_4["chain"]> ? T_10 extends true ? true : false : never : never : never : never) ? T_8 extends true ? [options: options] : [options?: options | undefined] : never : never) => Promise<import("viem").WriteContractReturnType>;
            setActiveVersion: <chainOverride extends import("viem").Chain | undefined, options extends import("viem").UnionOmit<import("viem").WriteContractParameters<readonly [{
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
            }], "setActiveVersion", readonly [number], T_4["chain"], T_4["account"], chainOverride>, "address" | "abi" | "args" | "functionName"> extends infer T_5 ? { [K_2 in keyof T_5]: T_5[K_2]; } : never>(args: readonly [number], ...parameters: (import("viem").IsUndefined<T_4["account"]> extends infer T_6 ? T_6 extends import("viem").IsUndefined<T_4["account"]> ? T_6 extends true ? true : import("viem").IsUndefined<T_4["chain"]> extends infer T_7 ? T_7 extends import("viem").IsUndefined<T_4["chain"]> ? T_7 extends true ? true : false : never : never : never : never) extends infer T_8 ? T_8 extends (import("viem").IsUndefined<T_4["account"]> extends infer T_9 ? T_9 extends import("viem").IsUndefined<T_4["account"]> ? T_9 extends true ? true : import("viem").IsUndefined<T_4["chain"]> extends infer T_10 ? T_10 extends import("viem").IsUndefined<T_4["chain"]> ? T_10 extends true ? true : false : never : never : never : never) ? T_8 extends true ? [options: options] : [options?: options | undefined] : never : never) => Promise<import("viem").WriteContractReturnType>;
        };
    } : unknown : never : never) extends infer T_2 ? { [K_1 in keyof T_2]: T_2[K_1]; } : never) & {
        address: "0x481cf005ac36a0f5c3f5f37aac187cfb1fbf15b5";
        abi: readonly [{
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
    } extends infer T_1 ? { [K in keyof T_1]: T_1[K]; } : never;
    FSFileRegistry: (((T extends {
        public: Client;
    } ? T["public"] : T) extends infer T_7 ? T_7 extends (T extends {
        public: Client;
    } ? T["public"] : T) ? T_7 extends Client ? {
        read: {
            cidIdentifier: (args: readonly [`0x${string}`, number], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly [{
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
            }], "cidIdentifier", readonly [`0x${string}`, number]>, "address" | "abi" | "args" | "functionName">> | undefined) => Promise<`0x${string}`>;
            eip712Domain: (options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly [{
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
            }], "eip712Domain", readonly []>, "address" | "abi" | "args" | "functionName">> | undefined) => Promise<readonly [`0x${string}`, string, string, bigint, `0x${string}`, `0x${string}`, readonly bigint[]]>;
            getFileData: (args: readonly [`0x${string}`], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly [{
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
            }], "getFileData", readonly [`0x${string}`]>, "address" | "abi" | "args" | "functionName">> | undefined) => Promise<{
                pieceCidPrefix: `0x${string}`;
                sender: `0x${string}`;
                recipient: `0x${string}`;
                pieceCidTail: number;
                acked: boolean;
            }>;
            getSignatureData: (args: readonly [`0x${string}`], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly [{
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
            }], "getSignatureData", readonly [`0x${string}`]>, "address" | "abi" | "args" | "functionName">> | undefined) => Promise<{
                signer: `0x${string}`;
                timestamp: number;
                signatureVisualHash: `0x${string}`;
                v: number;
                r: `0x${string}`;
                s: `0x${string}`;
            }>;
            manager: (options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly [{
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
            }], "manager", readonly []>, "address" | "abi" | "args" | "functionName">> | undefined) => Promise<`0x${string}`>;
        };
    } & {
        estimateGas: {
            acknowledge: (args: readonly [`0x${string}`], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "acknowledge", readonly [`0x${string}`], T_7["chain"]>, "address" | "abi" | "args" | "functionName">>) => Promise<import("viem").EstimateContractGasReturnType>;
            registerFile: (args: readonly [`0x${string}`, number, `0x${string}`], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "registerFile", readonly [`0x${string}`, number, `0x${string}`], T_7["chain"]>, "address" | "abi" | "args" | "functionName">>) => Promise<import("viem").EstimateContractGasReturnType>;
            submitSignature: (args: readonly [`0x${string}`, `0x${string}`, number, `0x${string}`, `0x${string}`], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "submitSignature", readonly [`0x${string}`, `0x${string}`, number, `0x${string}`, `0x${string}`], T_7["chain"]>, "address" | "abi" | "args" | "functionName">>) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            acknowledge: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(args: readonly [`0x${string}`], options?: Omit<import("viem").SimulateContractParameters<readonly [{
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
            }], "acknowledge", readonly [`0x${string}`], T_7["chain"], chainOverride, accountOverride>, "address" | "abi" | "args" | "functionName"> | undefined) => Promise<import("viem").SimulateContractReturnType<readonly [{
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
            }], "acknowledge", readonly [`0x${string}`], T_7["chain"], (T extends {
                wallet: Client;
            } ? T["wallet"] : T) extends infer T_8 ? T_8 extends (T extends {
                wallet: Client;
            } ? T["wallet"] : T) ? T_8 extends Client ? T_8["account"] : T_7["account"] : never : never, chainOverride, accountOverride>>;
            registerFile: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(args: readonly [`0x${string}`, number, `0x${string}`], options?: Omit<import("viem").SimulateContractParameters<readonly [{
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
            }], "registerFile", readonly [`0x${string}`, number, `0x${string}`], T_7["chain"], chainOverride, accountOverride>, "address" | "abi" | "args" | "functionName"> | undefined) => Promise<import("viem").SimulateContractReturnType<readonly [{
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
            }], "registerFile", readonly [`0x${string}`, number, `0x${string}`], T_7["chain"], (T extends {
                wallet: Client;
            } ? T["wallet"] : T) extends infer T_8 ? T_8 extends (T extends {
                wallet: Client;
            } ? T["wallet"] : T) ? T_8 extends Client ? T_8["account"] : T_7["account"] : never : never, chainOverride, accountOverride>>;
            submitSignature: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(args: readonly [`0x${string}`, `0x${string}`, number, `0x${string}`, `0x${string}`], options?: Omit<import("viem").SimulateContractParameters<readonly [{
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
            }], "submitSignature", readonly [`0x${string}`, `0x${string}`, number, `0x${string}`, `0x${string}`], T_7["chain"], chainOverride, accountOverride>, "address" | "abi" | "args" | "functionName"> | undefined) => Promise<import("viem").SimulateContractReturnType<readonly [{
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
            }], "submitSignature", readonly [`0x${string}`, `0x${string}`, number, `0x${string}`, `0x${string}`], T_7["chain"], (T extends {
                wallet: Client;
            } ? T["wallet"] : T) extends infer T_8 ? T_8 extends (T extends {
                wallet: Client;
            } ? T["wallet"] : T) ? T_8 extends Client ? T_8["account"] : T_7["account"] : never : never, chainOverride, accountOverride>>;
        };
    } & {
        createEventFilter: {
            EIP712DomainChanged: <const args extends readonly [] | undefined, strict extends boolean | undefined = undefined>(options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined) => Promise<import("viem").CreateContractEventFilterReturnType<readonly [{
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
            }], "EIP712DomainChanged", args, strict>>;
            FileAcknowledged: <const args extends {
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | undefined, strict extends boolean | undefined = undefined>(args: {
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | ({
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
            } extends infer T_8 ? T_8 extends {
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
            } ? T_8 extends args ? Readonly<args> : never : never : never), options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined) => Promise<import("viem").CreateContractEventFilterReturnType<readonly [{
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
            }], "FileAcknowledged", args, strict>>;
            FileRegistered: <const args extends {
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | undefined, strict extends boolean | undefined = undefined>(args: {
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | ({
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
            } extends infer T_8 ? T_8 extends {
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
            } ? T_8 extends args ? Readonly<args> : never : never : never), options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined) => Promise<import("viem").CreateContractEventFilterReturnType<readonly [{
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
            }], "FileRegistered", args, strict>>;
            SignatureSubmitted: <const args extends {
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                signer?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | undefined, strict extends boolean | undefined = undefined>(args: {
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                signer?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | ({
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                signer?: `0x${string}` | `0x${string}`[] | null | undefined;
            } extends infer T_8 ? T_8 extends {
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                signer?: `0x${string}` | `0x${string}`[] | null | undefined;
            } ? T_8 extends args ? Readonly<args> : never : never : never), options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined) => Promise<import("viem").CreateContractEventFilterReturnType<readonly [{
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
            }], "SignatureSubmitted", args, strict>>;
        };
        getEvents: {
            EIP712DomainChanged: (options?: {
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
                blockHash?: `0x${string}` | undefined;
            } | undefined) => Promise<import("viem").GetContractEventsReturnType<readonly [{
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
            }], "EIP712DomainChanged">>;
            FileAcknowledged: (args?: {
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | undefined, options?: {
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
                blockHash?: `0x${string}` | undefined;
            } | undefined) => Promise<import("viem").GetContractEventsReturnType<readonly [{
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
            }], "FileAcknowledged">>;
            FileRegistered: (args?: {
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | undefined, options?: {
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
                blockHash?: `0x${string}` | undefined;
            } | undefined) => Promise<import("viem").GetContractEventsReturnType<readonly [{
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
            }], "FileRegistered">>;
            SignatureSubmitted: (args?: {
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                signer?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | undefined, options?: {
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
                blockHash?: `0x${string}` | undefined;
            } | undefined) => Promise<import("viem").GetContractEventsReturnType<readonly [{
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
            }], "SignatureSubmitted">>;
        };
        watchEvent: {
            EIP712DomainChanged: (options: {
                batch?: boolean | undefined | undefined;
                pollingInterval?: number | undefined | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | undefined;
                onError?: ((error: Error) => void) | undefined | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly [{
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
                }], "EIP712DomainChanged", undefined>;
                poll?: true | undefined | undefined;
            }) => import("viem").WatchContractEventReturnType;
            FileAcknowledged: (args: {
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
            }, options: {
                batch?: boolean | undefined | undefined;
                pollingInterval?: number | undefined | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | undefined;
                onError?: ((error: Error) => void) | undefined | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly [{
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
                }], "FileAcknowledged", undefined>;
                poll?: true | undefined | undefined;
            }) => import("viem").WatchContractEventReturnType;
            FileRegistered: (args: {
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                sender?: `0x${string}` | `0x${string}`[] | null | undefined;
                recipient?: `0x${string}` | `0x${string}`[] | null | undefined;
            }, options: {
                batch?: boolean | undefined | undefined;
                pollingInterval?: number | undefined | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | undefined;
                onError?: ((error: Error) => void) | undefined | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly [{
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
                }], "FileRegistered", undefined>;
                poll?: true | undefined | undefined;
            }) => import("viem").WatchContractEventReturnType;
            SignatureSubmitted: (args: {
                cidIdentifier?: `0x${string}` | `0x${string}`[] | null | undefined;
                signer?: `0x${string}` | `0x${string}`[] | null | undefined;
            }, options: {
                batch?: boolean | undefined | undefined;
                pollingInterval?: number | undefined | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | undefined;
                onError?: ((error: Error) => void) | undefined | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly [{
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
                }], "SignatureSubmitted", undefined>;
                poll?: true | undefined | undefined;
            }) => import("viem").WatchContractEventReturnType;
        };
    } : unknown : never : never) & ((T extends {
        wallet: Client;
    } ? T["wallet"] : T) extends infer T_8 ? T_8 extends (T extends {
        wallet: Client;
    } ? T["wallet"] : T) ? T_8 extends Client ? {
        estimateGas: {
            acknowledge: (args: readonly [`0x${string}`], ...parameters: import("viem").IsUndefined<T_8["account"]> extends infer T_9 ? T_9 extends import("viem").IsUndefined<T_8["account"]> ? T_9 extends true ? [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "acknowledge", readonly [`0x${string}`], T_8["chain"]>, "address" | "abi" | "args" | "functionName">>] : [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "acknowledge", readonly [`0x${string}`], T_8["chain"]>, "address" | "abi" | "args" | "functionName">> | undefined] : never : never) => Promise<import("viem").EstimateContractGasReturnType>;
            registerFile: (args: readonly [`0x${string}`, number, `0x${string}`], ...parameters: import("viem").IsUndefined<T_8["account"]> extends infer T_9 ? T_9 extends import("viem").IsUndefined<T_8["account"]> ? T_9 extends true ? [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "registerFile", readonly [`0x${string}`, number, `0x${string}`], T_8["chain"]>, "address" | "abi" | "args" | "functionName">>] : [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "registerFile", readonly [`0x${string}`, number, `0x${string}`], T_8["chain"]>, "address" | "abi" | "args" | "functionName">> | undefined] : never : never) => Promise<import("viem").EstimateContractGasReturnType>;
            submitSignature: (args: readonly [`0x${string}`, `0x${string}`, number, `0x${string}`, `0x${string}`], ...parameters: import("viem").IsUndefined<T_8["account"]> extends infer T_9 ? T_9 extends import("viem").IsUndefined<T_8["account"]> ? T_9 extends true ? [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "submitSignature", readonly [`0x${string}`, `0x${string}`, number, `0x${string}`, `0x${string}`], T_8["chain"]>, "address" | "abi" | "args" | "functionName">>] : [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
            }], "submitSignature", readonly [`0x${string}`, `0x${string}`, number, `0x${string}`, `0x${string}`], T_8["chain"]>, "address" | "abi" | "args" | "functionName">> | undefined] : never : never) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        write: {
            acknowledge: <chainOverride extends import("viem").Chain | undefined, options extends import("viem").UnionOmit<import("viem").WriteContractParameters<readonly [{
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
            }], "acknowledge", readonly [`0x${string}`], T_8["chain"], T_8["account"], chainOverride>, "address" | "abi" | "args" | "functionName"> extends infer T_9 ? { [K_4 in keyof T_9]: T_9[K_4]; } : never>(args: readonly [`0x${string}`], ...parameters: (import("viem").IsUndefined<T_8["account"]> extends infer T_10 ? T_10 extends import("viem").IsUndefined<T_8["account"]> ? T_10 extends true ? true : import("viem").IsUndefined<T_8["chain"]> extends infer T_11 ? T_11 extends import("viem").IsUndefined<T_8["chain"]> ? T_11 extends true ? true : false : never : never : never : never) extends infer T_12 ? T_12 extends (import("viem").IsUndefined<T_8["account"]> extends infer T_13 ? T_13 extends import("viem").IsUndefined<T_8["account"]> ? T_13 extends true ? true : import("viem").IsUndefined<T_8["chain"]> extends infer T_14 ? T_14 extends import("viem").IsUndefined<T_8["chain"]> ? T_14 extends true ? true : false : never : never : never : never) ? T_12 extends true ? [options: options] : [options?: options | undefined] : never : never) => Promise<import("viem").WriteContractReturnType>;
            registerFile: <chainOverride extends import("viem").Chain | undefined, options extends import("viem").UnionOmit<import("viem").WriteContractParameters<readonly [{
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
            }], "registerFile", readonly [`0x${string}`, number, `0x${string}`], T_8["chain"], T_8["account"], chainOverride>, "address" | "abi" | "args" | "functionName"> extends infer T_9 ? { [K_4 in keyof T_9]: T_9[K_4]; } : never>(args: readonly [`0x${string}`, number, `0x${string}`], ...parameters: (import("viem").IsUndefined<T_8["account"]> extends infer T_10 ? T_10 extends import("viem").IsUndefined<T_8["account"]> ? T_10 extends true ? true : import("viem").IsUndefined<T_8["chain"]> extends infer T_11 ? T_11 extends import("viem").IsUndefined<T_8["chain"]> ? T_11 extends true ? true : false : never : never : never : never) extends infer T_12 ? T_12 extends (import("viem").IsUndefined<T_8["account"]> extends infer T_13 ? T_13 extends import("viem").IsUndefined<T_8["account"]> ? T_13 extends true ? true : import("viem").IsUndefined<T_8["chain"]> extends infer T_14 ? T_14 extends import("viem").IsUndefined<T_8["chain"]> ? T_14 extends true ? true : false : never : never : never : never) ? T_12 extends true ? [options: options] : [options?: options | undefined] : never : never) => Promise<import("viem").WriteContractReturnType>;
            submitSignature: <chainOverride extends import("viem").Chain | undefined, options extends import("viem").UnionOmit<import("viem").WriteContractParameters<readonly [{
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
            }], "submitSignature", readonly [`0x${string}`, `0x${string}`, number, `0x${string}`, `0x${string}`], T_8["chain"], T_8["account"], chainOverride>, "address" | "abi" | "args" | "functionName"> extends infer T_9 ? { [K_4 in keyof T_9]: T_9[K_4]; } : never>(args: readonly [`0x${string}`, `0x${string}`, number, `0x${string}`, `0x${string}`], ...parameters: (import("viem").IsUndefined<T_8["account"]> extends infer T_10 ? T_10 extends import("viem").IsUndefined<T_8["account"]> ? T_10 extends true ? true : import("viem").IsUndefined<T_8["chain"]> extends infer T_11 ? T_11 extends import("viem").IsUndefined<T_8["chain"]> ? T_11 extends true ? true : false : never : never : never : never) extends infer T_12 ? T_12 extends (import("viem").IsUndefined<T_8["account"]> extends infer T_13 ? T_13 extends import("viem").IsUndefined<T_8["account"]> ? T_13 extends true ? true : import("viem").IsUndefined<T_8["chain"]> extends infer T_14 ? T_14 extends import("viem").IsUndefined<T_8["chain"]> ? T_14 extends true ? true : false : never : never : never : never) ? T_12 extends true ? [options: options] : [options?: options | undefined] : never : never) => Promise<import("viem").WriteContractReturnType>;
        };
    } : unknown : never : never) extends infer T_6 ? { [K_3 in keyof T_6]: T_6[K_3]; } : never) & {
        address: "0xF29acC24aa40270816E13EFa61bD265c99aaB1A2";
        abi: readonly [{
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
    } extends infer T_5 ? { [K_2 in keyof T_5]: T_5[K_2]; } : never;
    FSKeyRegistry: (((T extends {
        public: Client;
    } ? T["public"] : T) extends infer T_11 ? T_11 extends (T extends {
        public: Client;
    } ? T["public"] : T) ? T_11 extends Client ? {
        read: {
            manager: (options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly [{
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
                    readonly internalType: "bytes32";
                    readonly name: "commitment_pin";
                    readonly type: "bytes32";
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
                        readonly internalType: "bytes32";
                        readonly name: "commitment_pin";
                        readonly type: "bytes32";
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
            }], "manager", readonly []>, "address" | "abi" | "args" | "functionName">> | undefined) => Promise<`0x${string}`>;
            isRegistered: (args: readonly [`0x${string}`], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly [{
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
                    readonly internalType: "bytes32";
                    readonly name: "commitment_pin";
                    readonly type: "bytes32";
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
                        readonly internalType: "bytes32";
                        readonly name: "commitment_pin";
                        readonly type: "bytes32";
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
            }], "isRegistered", readonly [`0x${string}`]>, "address" | "abi" | "args" | "functionName">> | undefined) => Promise<boolean>;
            keygenData: (args: readonly [`0x${string}`], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly [{
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
                    readonly internalType: "bytes32";
                    readonly name: "commitment_pin";
                    readonly type: "bytes32";
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
                        readonly internalType: "bytes32";
                        readonly name: "commitment_pin";
                        readonly type: "bytes32";
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
            }], "keygenData", readonly [`0x${string}`]>, "address" | "abi" | "args" | "functionName">> | undefined) => Promise<readonly [`0x${string}`, `0x${string}`, `0x${string}`, `0x${string}`, `0x${string}`, `0x${string}`, `0x${string}`, `0x${string}`]>;
            keygenDataVersion: (args: readonly [`0x${string}`], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly [{
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
                    readonly internalType: "bytes32";
                    readonly name: "commitment_pin";
                    readonly type: "bytes32";
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
                        readonly internalType: "bytes32";
                        readonly name: "commitment_pin";
                        readonly type: "bytes32";
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
            }], "keygenDataVersion", readonly [`0x${string}`]>, "address" | "abi" | "args" | "functionName">> | undefined) => Promise<number>;
            publicKeys: (args: readonly [`0x${string}`], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<readonly [{
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
                    readonly internalType: "bytes32";
                    readonly name: "commitment_pin";
                    readonly type: "bytes32";
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
                        readonly internalType: "bytes32";
                        readonly name: "commitment_pin";
                        readonly type: "bytes32";
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
            }], "publicKeys", readonly [`0x${string}`]>, "address" | "abi" | "args" | "functionName">> | undefined) => Promise<`0x${string}`>;
        };
    } & {
        estimateGas: {
            registerKeygenData: (args: readonly [{
                salt_auth: `0x${string}`;
                salt_wrap: `0x${string}`;
                salt_pin: `0x${string}`;
                nonce: `0x${string}`;
                seed_head: `0x${string}`;
                seed_word: `0x${string}`;
                seed_tail: `0x${string}`;
                commitment_pin: `0x${string}`;
            }, `0x${string}`], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
                    readonly internalType: "bytes32";
                    readonly name: "commitment_pin";
                    readonly type: "bytes32";
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
                        readonly internalType: "bytes32";
                        readonly name: "commitment_pin";
                        readonly type: "bytes32";
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
            }], "registerKeygenData", readonly [{
                salt_auth: `0x${string}`;
                salt_wrap: `0x${string}`;
                salt_pin: `0x${string}`;
                nonce: `0x${string}`;
                seed_head: `0x${string}`;
                seed_word: `0x${string}`;
                seed_tail: `0x${string}`;
                commitment_pin: `0x${string}`;
            }, `0x${string}`], T_11["chain"]>, "address" | "abi" | "args" | "functionName">>) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            registerKeygenData: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(args: readonly [{
                salt_auth: `0x${string}`;
                salt_wrap: `0x${string}`;
                salt_pin: `0x${string}`;
                nonce: `0x${string}`;
                seed_head: `0x${string}`;
                seed_word: `0x${string}`;
                seed_tail: `0x${string}`;
                commitment_pin: `0x${string}`;
            }, `0x${string}`], options?: Omit<import("viem").SimulateContractParameters<readonly [{
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
                    readonly internalType: "bytes32";
                    readonly name: "commitment_pin";
                    readonly type: "bytes32";
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
                        readonly internalType: "bytes32";
                        readonly name: "commitment_pin";
                        readonly type: "bytes32";
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
            }], "registerKeygenData", readonly [{
                salt_auth: `0x${string}`;
                salt_wrap: `0x${string}`;
                salt_pin: `0x${string}`;
                nonce: `0x${string}`;
                seed_head: `0x${string}`;
                seed_word: `0x${string}`;
                seed_tail: `0x${string}`;
                commitment_pin: `0x${string}`;
            }, `0x${string}`], T_11["chain"], chainOverride, accountOverride>, "address" | "abi" | "args" | "functionName"> | undefined) => Promise<import("viem").SimulateContractReturnType<readonly [{
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
                    readonly internalType: "bytes32";
                    readonly name: "commitment_pin";
                    readonly type: "bytes32";
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
                        readonly internalType: "bytes32";
                        readonly name: "commitment_pin";
                        readonly type: "bytes32";
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
            }], "registerKeygenData", readonly [{
                salt_auth: `0x${string}`;
                salt_wrap: `0x${string}`;
                salt_pin: `0x${string}`;
                nonce: `0x${string}`;
                seed_head: `0x${string}`;
                seed_word: `0x${string}`;
                seed_tail: `0x${string}`;
                commitment_pin: `0x${string}`;
            }, `0x${string}`], T_11["chain"], (T extends {
                wallet: Client;
            } ? T["wallet"] : T) extends infer T_12 ? T_12 extends (T extends {
                wallet: Client;
            } ? T["wallet"] : T) ? T_12 extends Client ? T_12["account"] : T_11["account"] : never : never, chainOverride, accountOverride>>;
        };
    } & {
        createEventFilter: {
            KeygenDataRegistered: <const args extends {
                user?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | undefined, strict extends boolean | undefined = undefined>(args: {
                user?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | ({
                user?: `0x${string}` | `0x${string}`[] | null | undefined;
            } extends infer T_12 ? T_12 extends {
                user?: `0x${string}` | `0x${string}`[] | null | undefined;
            } ? T_12 extends args ? Readonly<args> : never : never : never), options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined) => Promise<import("viem").CreateContractEventFilterReturnType<readonly [{
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
                    readonly internalType: "bytes32";
                    readonly name: "commitment_pin";
                    readonly type: "bytes32";
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
                        readonly internalType: "bytes32";
                        readonly name: "commitment_pin";
                        readonly type: "bytes32";
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
            }], "KeygenDataRegistered", args, strict>>;
        };
        getEvents: {
            KeygenDataRegistered: (args?: {
                user?: `0x${string}` | `0x${string}`[] | null | undefined;
            } | undefined, options?: {
                strict?: boolean | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
                blockHash?: `0x${string}` | undefined;
            } | undefined) => Promise<import("viem").GetContractEventsReturnType<readonly [{
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
                    readonly internalType: "bytes32";
                    readonly name: "commitment_pin";
                    readonly type: "bytes32";
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
                        readonly internalType: "bytes32";
                        readonly name: "commitment_pin";
                        readonly type: "bytes32";
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
            }], "KeygenDataRegistered">>;
        };
        watchEvent: {
            KeygenDataRegistered: (args: {
                user?: `0x${string}` | `0x${string}`[] | null | undefined;
            }, options: {
                batch?: boolean | undefined | undefined;
                pollingInterval?: number | undefined | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | undefined;
                onError?: ((error: Error) => void) | undefined | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<readonly [{
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
                        readonly internalType: "bytes32";
                        readonly name: "commitment_pin";
                        readonly type: "bytes32";
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
                            readonly internalType: "bytes32";
                            readonly name: "commitment_pin";
                            readonly type: "bytes32";
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
                }], "KeygenDataRegistered", undefined>;
                poll?: true | undefined | undefined;
            }) => import("viem").WatchContractEventReturnType;
        };
    } : unknown : never : never) & ((T extends {
        wallet: Client;
    } ? T["wallet"] : T) extends infer T_12 ? T_12 extends (T extends {
        wallet: Client;
    } ? T["wallet"] : T) ? T_12 extends Client ? {
        estimateGas: {
            registerKeygenData: (args: readonly [{
                salt_auth: `0x${string}`;
                salt_wrap: `0x${string}`;
                salt_pin: `0x${string}`;
                nonce: `0x${string}`;
                seed_head: `0x${string}`;
                seed_word: `0x${string}`;
                seed_tail: `0x${string}`;
                commitment_pin: `0x${string}`;
            }, `0x${string}`], ...parameters: import("viem").IsUndefined<T_12["account"]> extends infer T_13 ? T_13 extends import("viem").IsUndefined<T_12["account"]> ? T_13 extends true ? [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
                    readonly internalType: "bytes32";
                    readonly name: "commitment_pin";
                    readonly type: "bytes32";
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
                        readonly internalType: "bytes32";
                        readonly name: "commitment_pin";
                        readonly type: "bytes32";
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
            }], "registerKeygenData", readonly [{
                salt_auth: `0x${string}`;
                salt_wrap: `0x${string}`;
                salt_pin: `0x${string}`;
                nonce: `0x${string}`;
                seed_head: `0x${string}`;
                seed_word: `0x${string}`;
                seed_tail: `0x${string}`;
                commitment_pin: `0x${string}`;
            }, `0x${string}`], T_12["chain"]>, "address" | "abi" | "args" | "functionName">>] : [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<readonly [{
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
                    readonly internalType: "bytes32";
                    readonly name: "commitment_pin";
                    readonly type: "bytes32";
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
                        readonly internalType: "bytes32";
                        readonly name: "commitment_pin";
                        readonly type: "bytes32";
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
            }], "registerKeygenData", readonly [{
                salt_auth: `0x${string}`;
                salt_wrap: `0x${string}`;
                salt_pin: `0x${string}`;
                nonce: `0x${string}`;
                seed_head: `0x${string}`;
                seed_word: `0x${string}`;
                seed_tail: `0x${string}`;
                commitment_pin: `0x${string}`;
            }, `0x${string}`], T_12["chain"]>, "address" | "abi" | "args" | "functionName">> | undefined] : never : never) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        write: {
            registerKeygenData: <chainOverride extends import("viem").Chain | undefined, options extends import("viem").UnionOmit<import("viem").WriteContractParameters<readonly [{
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
                    readonly internalType: "bytes32";
                    readonly name: "commitment_pin";
                    readonly type: "bytes32";
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
                        readonly internalType: "bytes32";
                        readonly name: "commitment_pin";
                        readonly type: "bytes32";
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
            }], "registerKeygenData", readonly [{
                salt_auth: `0x${string}`;
                salt_wrap: `0x${string}`;
                salt_pin: `0x${string}`;
                nonce: `0x${string}`;
                seed_head: `0x${string}`;
                seed_word: `0x${string}`;
                seed_tail: `0x${string}`;
                commitment_pin: `0x${string}`;
            }, `0x${string}`], T_12["chain"], T_12["account"], chainOverride>, "address" | "abi" | "args" | "functionName"> extends infer T_13 ? { [K_6 in keyof T_13]: T_13[K_6]; } : never>(args: readonly [{
                salt_auth: `0x${string}`;
                salt_wrap: `0x${string}`;
                salt_pin: `0x${string}`;
                nonce: `0x${string}`;
                seed_head: `0x${string}`;
                seed_word: `0x${string}`;
                seed_tail: `0x${string}`;
                commitment_pin: `0x${string}`;
            }, `0x${string}`], ...parameters: (import("viem").IsUndefined<T_12["account"]> extends infer T_14 ? T_14 extends import("viem").IsUndefined<T_12["account"]> ? T_14 extends true ? true : import("viem").IsUndefined<T_12["chain"]> extends infer T_15 ? T_15 extends import("viem").IsUndefined<T_12["chain"]> ? T_15 extends true ? true : false : never : never : never : never) extends infer T_16 ? T_16 extends (import("viem").IsUndefined<T_12["account"]> extends infer T_17 ? T_17 extends import("viem").IsUndefined<T_12["account"]> ? T_17 extends true ? true : import("viem").IsUndefined<T_12["chain"]> extends infer T_18 ? T_18 extends import("viem").IsUndefined<T_12["chain"]> ? T_18 extends true ? true : false : never : never : never : never) ? T_16 extends true ? [options: options] : [options?: options | undefined] : never : never) => Promise<import("viem").WriteContractReturnType>;
        };
    } : unknown : never : never) extends infer T_10 ? { [K_5 in keyof T_10]: T_10[K_5]; } : never) & {
        address: "0xE9A3E247D5c2eAEa1dbf485e0c8C3a910fA4379f";
        abi: readonly [{
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
                readonly internalType: "bytes32";
                readonly name: "commitment_pin";
                readonly type: "bytes32";
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
                    readonly internalType: "bytes32";
                    readonly name: "commitment_pin";
                    readonly type: "bytes32";
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
    } extends infer T_9 ? { [K_4 in keyof T_9]: T_9[K_4]; } : never;
};

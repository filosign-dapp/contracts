import { Account, Address, Chain, Hex, Transport, WalletClient } from "viem";
export declare function parsePieceCid(pieceCid: string): {
    multihashCode: number;
    codecNumeric: number;
    digestPrefix: `0x${string}`;
    digestTail: number;
    digestLength: number;
    rawDigest: Uint8Array<ArrayBufferLike>;
};
export declare function computeCidIdentifier(pieceCid: string): `0x${string}`;
export declare function signFileSignature(options: {
    walletClient: WalletClient<Transport, Chain, Account>;
    contractAddress: Address;
    pieceCid: string;
    signatureVisualHash: Hex;
}): Promise<{
    v: bigint | undefined;
    r: `0x${string}`;
    s: `0x${string}`;
    flat: `0x${string}`;
}>;

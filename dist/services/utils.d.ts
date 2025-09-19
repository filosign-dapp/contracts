export declare function parsePieceCid(pieceCid: string): {
    multihashCode: number;
    codecNumeric: number;
    digestPrefix: `0x${string}`;
    digestTail: number;
    digestLength: number;
    rawDigest: Uint8Array<ArrayBufferLike>;
};
export declare function computeCidIdentifier(pieceCid: string): `0x${string}`;

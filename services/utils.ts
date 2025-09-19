import { CID } from "multiformats/cid";
import { encodePacked, keccak256, toHex } from "viem";

export function parsePieceCid(pieceCid: string) {
  const cid = CID.parse(pieceCid);

  const codecNumeric = cid.code;
  const mh = cid.multihash;
  const multihashCode = mh.code;
  const rawDigest = mh.digest;
  const digestLength = rawDigest.length;

  if (digestLength < 2) throw new Error("digest too short (<2 bytes)");

  const prefix = new Uint8Array(32);

  prefix.set(rawDigest.subarray(0, Math.min(32, digestLength)));

  const b1 = rawDigest[digestLength - 2];
  const b2 = rawDigest[digestLength - 1];
  const digestTail = (b1 << 8) | b2;

  return {
    multihashCode,
    codecNumeric,
    digestPrefix: toHex(prefix),
    digestTail,
    digestLength,
    rawDigest,
  };
}

export function computeCidIdentifier(pieceCid: string) {
  const { digestPrefix, digestTail } = parsePieceCid(pieceCid);
  return keccak256(
    encodePacked(["bytes32", "uint16"], [digestPrefix, digestTail])
  );
}

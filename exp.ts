// save as inspect-cid.js
// npm install multiformats
import { CID } from "multiformats/cid";
import { bytes } from "multiformats";

// Replace with your CID
const cidStr =
  "bafkzcibcbub2cd46abwvhoohwhmmjugyjibda32vn4a4qlcrv5dc76s24s67qai";

try {
  const cid = CID.parse(cidStr);

  console.log("CID (original):", cidStr);
  console.log("CID version:", cid.version); // e.g. 1
  console.log("CID codec (numeric):", cid.code); // numeric multicodec code
  console.log("CID codec (string):", cid.toString()); // full canonical form

  // multihash info
  const mh = cid.multihash;
  console.log("multihash code (numeric):", mh.code);
  console.log("multihash digest length (bytes):", mh.size);
  // digest is a Uint8Array
  const digestBytes = mh.digest;
  const digestHex = Buffer.from(digestBytes).toString("hex");
  console.log("multihash digest (hex):", digestHex);
  console.log(
    "multihash digest (base64):",
    Buffer.from(digestBytes).toString("base64")
  );

  // If you want to inspect raw bytes of the CID:
  const raw = cid.bytes; // Uint8Array
  console.log("raw CID bytes (hex):", Buffer.from(raw).toString("hex"));
} catch (err) {
  console.error("Failed to parse CID:", err);
}

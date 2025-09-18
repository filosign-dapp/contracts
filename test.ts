import { Synapse, RPC_URLS } from "@filoz/synapse-sdk";
import { TOKENS, CONTRACT_ADDRESSES } from "@filoz/synapse-sdk";
import { ethers } from "ethers";
import { testSetup } from "./testSetup";

const RPC = RPC_URLS.calibration.websocket;
// const RPC = "http://localhost:8545";

async function main() {
  // await testSetup();

  const synapse = await Synapse.create({
    privateKey: Bun.env.FC_PVT_KEY,
    rpcURL: RPC,
  });

  //   const warmStorageAddress = synapse.getWarmStorageAddress();
  //   await synapse.payments.approveService(
  //     warmStorageAddress,
  //     ethers.parseUnits("10", 18), // Rate allowance: 10 USDFC per epoch
  //     ethers.parseUnits("1000", 18), // Lockup allowance: 1000 USDFC total
  //     86400n // Max lockup period: 30 days (in epochs)
  //   );

  const uploadResult = await synapse.storage.upload(
    new TextEncoder().encode(
      `
🚀 Welcome to decentralized storage on Filecoin! Your data is safe here. 🌍
🚀 Welcome to decentralized storage on Filecoin! Your data is safe here. 🌍
🚀 Welcome to decentralized storage on Filecoin! Your data is safe here. 🌍
`
    )
  );
  const data = await synapse.storage.download(uploadResult.pieceCid);
  console.log("Upload Result:", JSON.stringify(uploadResult, null, 2));
  console.log("Retrieved:", new TextDecoder().decode(data));

  const provider = synapse.getProvider();
  if (provider && typeof provider.destroy === "function") {
    provider.destroy();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

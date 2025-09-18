import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import {
  getAddress,
  hashMessage,
  parseGwei,
  publicActions,
  keccak256,
  toBytes,
  hexToSignature,
  parseSignature,
} from "viem";
import {
  generateRegisterChallenge,
  deriveEncryptionMaterial,
  generateSalts,
  regenerateEncryptionKey,
  toHex,
  generateNonce,
  toB64,
} from "filosign-crypto-utils";
import { describe, it } from "bun:test";
hre.config.defaultNetwork = "hardhat";
async function setupFixture() {
  const [deployer, user] = await hre.viem.getWalletClients();
  const admin = (await hre.viem.getTestClient()).extend(publicActions);

  const sigtest = await hre.viem.deployContract("SigTits");

  return { deployer, user, sigtest, admin };
}

describe("SigTest", () => {
  it("verifies correct signatures and does not verify bad signatures", async () => {
    const { sigtest, user, admin } = await loadFixture(setupFixture);
    const message = "Hello, Filosign!";

    const signature = await user.signMessage({ message });
    const messageHash = hashMessage(message);

    const { v, r, s } = parseSignature(signature);

    if (!v) throw new Error("Invalid signature v value");
    if (v > 28) throw new Error("Invalid signature v value");

    const isValid = await sigtest.read.verifySignature([
      user.account.address,
      messageHash,
      Number(v),
      r,
      s,
    ]);

    expect(isValid).to.be.true;

    const badSignature = await user.signMessage({
      message: "Goodbye, Filosign!",
    });
    const { v: badV, r: badR, s: badS } = hexToSignature(badSignature);

    const isBadValid = await sigtest.read.verifySignature([
      user.account.address,
      messageHash,
      badV,
      badR,
      badS,
    ]);
    expect(isBadValid).to.be.false;
  });
});

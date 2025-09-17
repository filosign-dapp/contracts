import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { getAddress, parseGwei } from "viem";
import {
  generateRegisterChallenge,
  deriveEncryptionMaterial,
  toHex,
} from "filosign-crypto-utils";
import { describe, it } from "bun:test";

async function setupFixture() {
  const [deployer, user] = await hre.viem.getWalletClients();

  const keyRegistry = await hre.viem.deployContract("FSKeyRegistry");
  const version = await keyRegistry.read.version();

  return { deployer, user, keyRegistry, version };
}

describe("FSKeyRegistry", () => {
  it("stores relevant information for the user to be able to regenerate encryption keys", async () => {
    for (let i = 0; i < 10; i++) {
      const { keyRegistry, user, version } = await loadFixture(setupFixture);
      const pin = "1234";
      const info = "Spandan";

      const base_material = generateRegisterChallenge(
        user.account.address,
        version.toString()
      );

      const signature = await user.signMessage({
        message: base_material.challenge,
      });

      const enc_material = deriveEncryptionMaterial(
        signature,
        pin,
        base_material.pinSalt,
        base_material.authSalt,
        base_material.wrapperSalt,
        info
      );

      console.log({
        nonce: toHex(base_material.nonce).length,
        salt_auth: toHex(base_material.authSalt).length,
        salt_pin: toHex(base_material.pinSalt).length,
        salt_wrap: toHex(base_material.wrapperSalt).length,
        seed: enc_material.encSeed.length,
      });
    }
    // keyRegistry.write.registerKeygenData([
    //   {
    //     nonce: base_material.nonce,
    //     salt_auth: base_material.auth_salt,
    //     salt_pin: base_material.pin_salt,
    //     salt_wrap: base_material.wrapper_salt,
    //     seed: enc_material.enc_seed,
    //   },
    // ]);
  });
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const network_helpers_1 = require("@nomicfoundation/hardhat-toolbox-viem/network-helpers");
const chai_1 = require("chai");
const hardhat_1 = __importDefault(require("hardhat"));
const viem_1 = require("viem");
const filosign_crypto_utils_1 = require("filosign-crypto-utils");
const bun_test_1 = require("bun:test");
async function setupFixture() {
    const [deployer, user] = await hardhat_1.default.viem.getWalletClients();
    const admin = (await hardhat_1.default.viem.getTestClient()).extend(viem_1.publicActions);
    const manager = await hardhat_1.default.viem.deployContract("FSManager");
    const keyRegistry = await hardhat_1.default.viem.getContractAt("FSKeyRegistry", await manager.read.keyRegistry());
    const version = 1; //await keyRegistry.read.version();
    return { deployer, user, keyRegistry, version, admin };
}
(0, bun_test_1.describe)("FSKeyRegistry", () => {
    (0, bun_test_1.it)("stores relevant information for the user to be able to regenerate encryption keys", async () => {
        const { keyRegistry, user, version, admin } = await (0, network_helpers_1.loadFixture)(setupFixture);
        const pin = "1234";
        const info = "Spandan";
        const base_material = (0, filosign_crypto_utils_1.generateSalts)();
        const nonce = (0, filosign_crypto_utils_1.generateNonce)();
        const register_challenge = (0, filosign_crypto_utils_1.generateRegisterChallenge)(user.account.address, version.toString(), nonce);
        const signature = await user.signMessage({
            message: register_challenge.challenge,
        });
        const enc_material = (0, filosign_crypto_utils_1.deriveEncryptionMaterial)(signature, pin, base_material.pinSalt, base_material.authSalt, base_material.wrapperSalt, info);
        const generated = (0, filosign_crypto_utils_1.regenerateEncryptionKey)(signature, pin, base_material.pinSalt, base_material.authSalt, base_material.wrapperSalt, enc_material.encSeed, "test");
        const commitment_pin = (0, viem_1.keccak256)((0, viem_1.encodePacked)(["string", "string"], [base_material.pinSalt, pin]));
        const { publicKey } = (0, filosign_crypto_utils_1.getPublicKeyFromRegenerated)(signature, pin, base_material.pinSalt, base_material.authSalt, base_material.wrapperSalt, enc_material.encSeed, "test");
        const txHash = await keyRegistry.write.registerKeygenData([
            {
                nonce: `0x${(0, filosign_crypto_utils_1.toHex)(nonce)}`,
                salt_pin: `0x${(0, filosign_crypto_utils_1.toHex)(base_material.pinSalt)}`,
                salt_auth: `0x${(0, filosign_crypto_utils_1.toHex)(base_material.authSalt)}`,
                salt_wrap: `0x${(0, filosign_crypto_utils_1.toHex)(base_material.wrapperSalt)}`,
                seed: `0x${(0, filosign_crypto_utils_1.toHex)(enc_material.encSeed)}`,
                commitment_pin,
            },
            `0x${(0, filosign_crypto_utils_1.toHex)(publicKey)}`,
        ], { account: user.account });
        await admin.waitForTransactionReceipt({ hash: txHash });
        const [stored_salt_auth, stored_salt_wrap, stored_salt_pin, stored_nonce, stored_seed,] = await keyRegistry.read.keygenData([user.account.address]);
        const stored = {
            salt_auth: (0, filosign_crypto_utils_1.toB64)(stored_salt_auth),
            salt_wrap: (0, filosign_crypto_utils_1.toB64)(stored_salt_wrap),
            salt_pin: (0, filosign_crypto_utils_1.toB64)(stored_salt_pin),
            nonce: (0, filosign_crypto_utils_1.toB64)(stored_nonce),
            seed: (0, filosign_crypto_utils_1.toB64)(stored_seed),
        };
        const regenerated_challenge = (0, filosign_crypto_utils_1.generateRegisterChallenge)(user.account.address, version.toString(), stored.nonce);
        const regenerated_signature = await user.signMessage({
            message: regenerated_challenge.challenge,
        });
        const regenerated = (0, filosign_crypto_utils_1.regenerateEncryptionKey)(regenerated_signature, pin, stored.salt_pin, stored.salt_auth, stored.salt_wrap, stored.seed, "test");
        (0, chai_1.expect)(regenerated.encryptionKey).to.equal(generated.encryptionKey);
    });
});

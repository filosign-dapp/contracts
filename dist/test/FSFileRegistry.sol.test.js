"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const network_helpers_1 = require("@nomicfoundation/hardhat-toolbox-viem/network-helpers");
const chai_1 = require("chai");
const hardhat_1 = __importDefault(require("hardhat"));
const viem_1 = require("viem");
const bun_test_1 = require("bun:test");
const utils_1 = require("../services/utils");
const samplePieceCid = "bafkzcibcbub2cd46abwvhoohwhmmjugyjibda32vn4a4qlcrv5dc76s24s67qai";
async function setupFixture() {
    const [deployer, sender, recipient, other] = await hardhat_1.default.viem.getWalletClients();
    const admin = (await hardhat_1.default.viem.getTestClient()).extend(viem_1.publicActions);
    const manager = await hardhat_1.default.viem.deployContract("FSManager");
    const fileRegistryAddress = await manager.read.fileRegistry();
    const fileRegistry = await hardhat_1.default.viem.getContractAt("FSFileRegistry", fileRegistryAddress);
    await manager.write.approveSender([sender.account.address], {
        account: recipient.account,
    });
    return { deployer, sender, recipient, other, manager, fileRegistry, admin };
}
(0, bun_test_1.describe)("FSFileRegistry", () => {
    (0, bun_test_1.it)("registers a file successfully when sender is approved", async () => {
        const { fileRegistry, sender, recipient, admin } = await (0, network_helpers_1.loadFixture)(setupFixture);
        const { digestPrefix: pieceCidPrefix, digestTail: pieceCidTail } = (0, utils_1.parsePieceCid)(samplePieceCid);
        const txHash = await fileRegistry.write.registerFile([pieceCidPrefix, pieceCidTail, recipient.account.address], { account: sender.account });
        await admin.waitForTransactionReceipt({ hash: txHash });
        const cidIdentifier = (0, utils_1.computeCidIdentifier)(samplePieceCid);
        const fileData = await fileRegistry.read.getFileData([cidIdentifier]);
        (0, chai_1.expect)(fileData.pieceCidPrefix).to.equal(pieceCidPrefix);
        (0, chai_1.expect)(fileData.pieceCidTail).to.equal(pieceCidTail);
        (0, chai_1.expect)(fileData.sender.toLowerCase()).to.equal(sender.account.address.toLowerCase());
        (0, chai_1.expect)(fileData.recipient.toLowerCase()).to.equal(recipient.account.address.toLowerCase());
        (0, chai_1.expect)(fileData.acked).to.equal(false);
    });
    (0, bun_test_1.it)("fails to register file when sender is not approved", async () => {
        const { fileRegistry, other, recipient } = await (0, network_helpers_1.loadFixture)(setupFixture);
        const { digestPrefix: pieceCidPrefix, digestTail: pieceCidTail } = (0, utils_1.parsePieceCid)(samplePieceCid);
        await (0, chai_1.expect)(fileRegistry.write.registerFile([pieceCidPrefix, pieceCidTail, recipient.account.address], { account: other.account })).to.be.rejectedWith("Sender not approved by recipient");
    });
    (0, bun_test_1.it)("fails to register file that already exists", async () => {
        const { fileRegistry, sender, recipient, admin } = await (0, network_helpers_1.loadFixture)(setupFixture);
        const { digestPrefix: pieceCidPrefix, digestTail: pieceCidTail } = (0, utils_1.parsePieceCid)(samplePieceCid);
        const txHash = await fileRegistry.write.registerFile([pieceCidPrefix, pieceCidTail, recipient.account.address], { account: sender.account });
        await admin.waitForTransactionReceipt({ hash: txHash });
        await (0, chai_1.expect)(fileRegistry.write.registerFile([pieceCidPrefix, pieceCidTail, recipient.account.address], { account: sender.account })).to.be.rejectedWith("File already registered");
    });
    (0, bun_test_1.it)("allows recipient to acknowledge a file", async () => {
        const { fileRegistry, sender, recipient, admin } = await (0, network_helpers_1.loadFixture)(setupFixture);
        const { digestPrefix: pieceCidPrefix, digestTail: pieceCidTail } = (0, utils_1.parsePieceCid)(samplePieceCid);
        const registerTxHash = await fileRegistry.write.registerFile([pieceCidPrefix, pieceCidTail, recipient.account.address], { account: sender.account });
        await admin.waitForTransactionReceipt({ hash: registerTxHash });
        const cidIdentifier = (0, utils_1.computeCidIdentifier)(samplePieceCid);
        const ackTxHash = await fileRegistry.write.acknowledge([cidIdentifier], {
            account: recipient.account,
        });
        await admin.waitForTransactionReceipt({ hash: ackTxHash });
        const fileData = await fileRegistry.read.getFileData([cidIdentifier]);
        (0, chai_1.expect)(fileData.acked).to.equal(true);
    });
    (0, bun_test_1.it)("fails when non-recipient tries to acknowledge", async () => {
        const { fileRegistry, sender, recipient, other, admin } = await (0, network_helpers_1.loadFixture)(setupFixture);
        const { digestPrefix: pieceCidPrefix, digestTail: pieceCidTail } = (0, utils_1.parsePieceCid)(samplePieceCid);
        const registerTxHash = await fileRegistry.write.registerFile([pieceCidPrefix, pieceCidTail, recipient.account.address], { account: sender.account });
        await admin.waitForTransactionReceipt({ hash: registerTxHash });
        const cidIdentifier = (0, utils_1.computeCidIdentifier)(samplePieceCid);
        await (0, chai_1.expect)(fileRegistry.write.acknowledge([cidIdentifier], {
            account: other.account,
        })).to.be.rejectedWith("Only recipient can ack");
    });
    (0, bun_test_1.it)("fails to acknowledge non-existent file", async () => {
        const { fileRegistry, recipient } = await (0, network_helpers_1.loadFixture)(setupFixture);
        const fakeCidIdentifier = (0, viem_1.keccak256)((0, viem_1.toBytes)("fake-identifier"));
        await (0, chai_1.expect)(fileRegistry.write.acknowledge([fakeCidIdentifier], {
            account: recipient.account,
        })).to.be.rejectedWith("File not registered");
    });
    (0, bun_test_1.it)("fails to acknowledge already acknowledged file", async () => {
        const { fileRegistry, sender, recipient, admin } = await (0, network_helpers_1.loadFixture)(setupFixture);
        const { digestPrefix: pieceCidPrefix, digestTail: pieceCidTail } = (0, utils_1.parsePieceCid)(samplePieceCid);
        const registerTxHash = await fileRegistry.write.registerFile([pieceCidPrefix, pieceCidTail, recipient.account.address], { account: sender.account });
        await admin.waitForTransactionReceipt({ hash: registerTxHash });
        const cidIdentifier = (0, utils_1.computeCidIdentifier)(samplePieceCid);
        const ackTxHash = await fileRegistry.write.acknowledge([cidIdentifier], {
            account: recipient.account,
        });
        await admin.waitForTransactionReceipt({ hash: ackTxHash });
        await (0, chai_1.expect)(fileRegistry.write.acknowledge([cidIdentifier], {
            account: recipient.account,
        })).to.be.rejectedWith("Already acknowledged");
    });
    (0, bun_test_1.it)("allows recipient to submit signature after acknowledgment", async () => {
        const { fileRegistry, sender, recipient, admin } = await (0, network_helpers_1.loadFixture)(setupFixture);
        const { digestPrefix: pieceCidPrefix, digestTail: pieceCidTail } = (0, utils_1.parsePieceCid)(samplePieceCid);
        const signatureVisualHash = (0, viem_1.keccak256)((0, viem_1.toBytes)("signature-visual-data"));
        const registerTxHash = await fileRegistry.write.registerFile([pieceCidPrefix, pieceCidTail, recipient.account.address], { account: sender.account });
        await admin.waitForTransactionReceipt({ hash: registerTxHash });
        const cidIdentifier = (0, utils_1.computeCidIdentifier)(samplePieceCid);
        const ackTxHash = await fileRegistry.write.acknowledge([cidIdentifier], {
            account: recipient.account,
        });
        await admin.waitForTransactionReceipt({ hash: ackTxHash });
        const messageHash = (0, viem_1.keccak256)((0, viem_1.encodePacked)(["bytes32", "uint16", "bytes32"], [pieceCidPrefix, pieceCidTail, signatureVisualHash]));
        const signature = await recipient.signMessage({
            message: { raw: messageHash },
        });
        const { r, s, v } = (0, viem_1.parseSignature)(signature);
        const submitSigTxHash = await fileRegistry.write.submitSignature([cidIdentifier, signatureVisualHash, Number(v), r, s], { account: recipient.account });
        await admin.waitForTransactionReceipt({ hash: submitSigTxHash });
        const signatureData = await fileRegistry.read.getSignatureData([
            cidIdentifier,
        ]);
        (0, chai_1.expect)(signatureData.signer.toLowerCase()).to.equal(recipient.account.address.toLowerCase());
        (0, chai_1.expect)(signatureData.timestamp).to.be.greaterThan(0);
    });
    (0, bun_test_1.it)("fails to submit signature before acknowledgment", async () => {
        const { fileRegistry, sender, recipient, admin } = await (0, network_helpers_1.loadFixture)(setupFixture);
        const { digestPrefix: pieceCidPrefix, digestTail: pieceCidTail } = (0, utils_1.parsePieceCid)(samplePieceCid);
        const signatureVisualHash = (0, viem_1.keccak256)((0, viem_1.toBytes)("signature-visual-data"));
        const registerTxHash = await fileRegistry.write.registerFile([pieceCidPrefix, pieceCidTail, recipient.account.address], { account: sender.account });
        await admin.waitForTransactionReceipt({ hash: registerTxHash });
        const cidIdentifier = (0, utils_1.computeCidIdentifier)(samplePieceCid);
        const messageHash = (0, viem_1.keccak256)((0, viem_1.encodePacked)(["bytes32", "uint16", "bytes32"], [pieceCidPrefix, pieceCidTail, signatureVisualHash]));
        const signature = await recipient.signMessage({
            message: { raw: messageHash },
        });
        const { r, s, v } = (0, viem_1.parseSignature)(signature);
        await (0, chai_1.expect)(fileRegistry.write.submitSignature([cidIdentifier, signatureVisualHash, Number(v), r, s], { account: recipient.account })).to.be.rejectedWith("file needs to be acknowledged before submitting signature");
    });
    (0, bun_test_1.it)("fails when non-recipient tries to submit signature", async () => {
        const { fileRegistry, sender, recipient, other, admin } = await (0, network_helpers_1.loadFixture)(setupFixture);
        const { digestPrefix: pieceCidPrefix, digestTail: pieceCidTail } = (0, utils_1.parsePieceCid)(samplePieceCid);
        const signatureVisualHash = (0, viem_1.keccak256)((0, viem_1.toBytes)("signature-visual-data"));
        const registerTxHash = await fileRegistry.write.registerFile([pieceCidPrefix, pieceCidTail, recipient.account.address], { account: sender.account });
        await admin.waitForTransactionReceipt({ hash: registerTxHash });
        const cidIdentifier = await fileRegistry.read.cidIdentifier([
            pieceCidPrefix,
            pieceCidTail,
        ]);
        const ackTxHash = await fileRegistry.write.acknowledge([cidIdentifier], {
            account: recipient.account,
        });
        await admin.waitForTransactionReceipt({ hash: ackTxHash });
        const messageHash = (0, viem_1.keccak256)((0, viem_1.encodePacked)(["bytes32", "uint16", "bytes32"], [pieceCidPrefix, pieceCidTail, signatureVisualHash]));
        const signature = await other.signMessage({
            message: { raw: messageHash },
        });
        const { r, s, v } = (0, viem_1.parseSignature)(signature);
        await (0, chai_1.expect)(fileRegistry.write.submitSignature([cidIdentifier, signatureVisualHash, Number(v), r, s], { account: other.account })).to.be.rejectedWith("Only recipient can submit signature");
    });
    (0, bun_test_1.it)("fails to submit signature twice", async () => {
        const { fileRegistry, sender, recipient, admin } = await (0, network_helpers_1.loadFixture)(setupFixture);
        const { digestPrefix: pieceCidPrefix, digestTail: pieceCidTail } = (0, utils_1.parsePieceCid)(samplePieceCid);
        const signatureVisualHash = (0, viem_1.keccak256)((0, viem_1.toBytes)("signature-visual-data"));
        const registerTxHash = await fileRegistry.write.registerFile([pieceCidPrefix, pieceCidTail, recipient.account.address], { account: sender.account });
        await admin.waitForTransactionReceipt({ hash: registerTxHash });
        const cidIdentifier = (0, utils_1.computeCidIdentifier)(samplePieceCid);
        const ackTxHash = await fileRegistry.write.acknowledge([cidIdentifier], {
            account: recipient.account,
        });
        await admin.waitForTransactionReceipt({ hash: ackTxHash });
        const messageHash = (0, viem_1.keccak256)((0, viem_1.encodePacked)(["bytes32", "uint16", "bytes32"], [pieceCidPrefix, pieceCidTail, signatureVisualHash]));
        const signature = await recipient.signMessage({
            message: { raw: messageHash },
        });
        const { r, s, v } = (0, viem_1.parseSignature)(signature);
        const submitSigTxHash = await fileRegistry.write.submitSignature([cidIdentifier, signatureVisualHash, Number(v), r, s], { account: recipient.account });
        await admin.waitForTransactionReceipt({ hash: submitSigTxHash });
        await (0, chai_1.expect)(fileRegistry.write.submitSignature([cidIdentifier, signatureVisualHash, Number(v), r, s], { account: recipient.account })).to.be.rejectedWith("Signature already submitted");
    });
    (0, bun_test_1.it)("fails with invalid signature", async () => {
        const { fileRegistry, sender, recipient, admin } = await (0, network_helpers_1.loadFixture)(setupFixture);
        const { digestPrefix: pieceCidPrefix, digestTail: pieceCidTail } = (0, utils_1.parsePieceCid)(samplePieceCid);
        const signatureVisualHash = (0, viem_1.keccak256)((0, viem_1.toBytes)("signature-visual-data"));
        const registerTxHash = await fileRegistry.write.registerFile([pieceCidPrefix, pieceCidTail, recipient.account.address], { account: sender.account });
        await admin.waitForTransactionReceipt({ hash: registerTxHash });
        const cidIdentifier = (0, utils_1.computeCidIdentifier)(samplePieceCid);
        const ackTxHash = await fileRegistry.write.acknowledge([cidIdentifier], {
            account: recipient.account,
        });
        await admin.waitForTransactionReceipt({ hash: ackTxHash });
        const wrongMessageHash = (0, viem_1.keccak256)((0, viem_1.toBytes)("wrong-message"));
        const signature = await recipient.signMessage({
            message: { raw: wrongMessageHash },
        });
        const { r, s, v } = (0, viem_1.parseSignature)(signature);
        await (0, chai_1.expect)(fileRegistry.write.submitSignature([cidIdentifier, signatureVisualHash, Number(v), r, s], { account: recipient.account })).to.be.rejectedWith("Invalid signature");
    });
    (0, bun_test_1.it)("correctly calculates cidIdentifier", async () => {
        const { fileRegistry } = await (0, network_helpers_1.loadFixture)(setupFixture);
        const { digestPrefix: pieceCidPrefix, digestTail: pieceCidTail } = (0, utils_1.parsePieceCid)(samplePieceCid);
        const calculatedIdentifier = await fileRegistry.read.cidIdentifier([
            pieceCidPrefix,
            pieceCidTail,
        ]);
        const expectedIdentifier = (0, utils_1.computeCidIdentifier)(samplePieceCid);
        (0, chai_1.expect)(calculatedIdentifier).to.equal(expectedIdentifier);
    });
    (0, bun_test_1.it)("returns empty data for non-existent file", async () => {
        const { fileRegistry } = await (0, network_helpers_1.loadFixture)(setupFixture);
        const fakeCidIdentifier = (0, viem_1.keccak256)((0, viem_1.toBytes)("fake-identifier"));
        const fileData = await fileRegistry.read.getFileData([fakeCidIdentifier]);
        (0, chai_1.expect)(fileData.pieceCidPrefix).to.equal("0x0000000000000000000000000000000000000000000000000000000000000000");
        (0, chai_1.expect)(fileData.pieceCidTail).to.equal(0);
        (0, chai_1.expect)(fileData.sender).to.equal("0x0000000000000000000000000000000000000000");
        (0, chai_1.expect)(fileData.recipient).to.equal("0x0000000000000000000000000000000000000000");
        (0, chai_1.expect)(fileData.acked).to.equal(false);
    });
    (0, bun_test_1.it)("returns empty signature data for non-existent signature", async () => {
        const { fileRegistry } = await (0, network_helpers_1.loadFixture)(setupFixture);
        const fakeCidIdentifier = (0, viem_1.keccak256)((0, viem_1.toBytes)("fake-identifier"));
        const signatureData = await fileRegistry.read.getSignatureData([
            fakeCidIdentifier,
        ]);
        (0, chai_1.expect)(signatureData.signer).to.equal("0x0000000000000000000000000000000000000000");
        (0, chai_1.expect)(signatureData.timestamp).to.equal(0);
        (0, chai_1.expect)(signatureData.signatureVisualHash).to.equal("0x0000000000000000000000000000000000000000000000000000000000000000");
        (0, chai_1.expect)(signatureData.v).to.equal(0);
        (0, chai_1.expect)(signatureData.r).to.equal("0x0000000000000000000000000000000000000000000000000000000000000000");
        (0, chai_1.expect)(signatureData.s).to.equal("0x0000000000000000000000000000000000000000000000000000000000000000");
    });
});

import {
  createTestClient,
  http,
  getContract,
  createWalletClient,
  publicActions,
  encodeFunctionData,
} from "viem";
import { parseEther } from "viem";
import { filecoinCalibration } from "viem/chains";
import { ERC20_ABI } from "./ERC20_ABI";
import { privateKeyToAccount } from "viem/accounts";

const primaryChain = filecoinCalibration;

const RPC = "http://127.0.0.1:8545";
const USDFC_HOLDER = "0xdF70a51062A2DB4e2696e521275E7F1Cf8dc5393";

export const client = createWalletClient({
  transport: http(RPC),
  chain: primaryChain,
  account: privateKeyToAccount(Bun.env.FC_PVT_KEY),
}).extend(publicActions);

export async function testSetup() {
  const admin = createTestClient({
    chain: primaryChain,
    transport: http(RPC),
    mode: "hardhat",
  });

  const usdfc = getContract({
    address: "0xb3042734b608a1B16e9e86B374A3f3e389B4cDf0",
    abi: ERC20_ABI,
    client: admin,
  });

  await admin.setBalance({
    address: USDFC_HOLDER,
    value: parseEther("10000"),
  });
  await admin.setBalance({
    address: client.account.address,
    value: parseEther("10000"),
  });
  await admin.impersonateAccount({
    address: USDFC_HOLDER,
  });
  const txHash = await client.request({
    method: "eth_sendTransaction",
    params: [
      {
        from: USDFC_HOLDER,
        to: usdfc.address,
        data: encodeFunctionData({
          abi: ERC20_ABI,
          functionName: "transfer",
          args: [
            client.account.address,
            await usdfc.read.balanceOf([USDFC_HOLDER]),
          ],
        }),
      },
    ],
  });
  await client.waitForTransactionReceipt({ hash: txHash });
  await admin.stopImpersonatingAccount({
    address: USDFC_HOLDER,
  });
}

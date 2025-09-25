import { getContract } from "viem";
import { definitions } from "../definitions";
export function getContracts(client) {
    return {
        FSManager: getContract({ client, ...definitions.FSManager }),
        FSFileRegistry: getContract({ client, ...definitions.FSFileRegistry }),
        FSKeyRegistry: getContract({ client, ...definitions.FSKeyRegistry }),
    };
}

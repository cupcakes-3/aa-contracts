import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAggregatedWallet, IAggregatedWalletInterface } from "../IAggregatedWallet";
export declare class IAggregatedWallet__factory {
    static readonly abi: ({
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): IAggregatedWalletInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAggregatedWallet;
}

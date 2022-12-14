import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IWallet, IWalletInterface } from "../IWallet";
export declare class IWallet__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): IWalletInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IWallet;
}

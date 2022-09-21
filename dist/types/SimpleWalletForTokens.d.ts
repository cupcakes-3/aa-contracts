import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare type UserOperationStruct = {
    sender: PromiseOrValue<string>;
    nonce: PromiseOrValue<BigNumberish>;
    initCode: PromiseOrValue<BytesLike>;
    callData: PromiseOrValue<BytesLike>;
    callGasLimit: PromiseOrValue<BigNumberish>;
    verificationGasLimit: PromiseOrValue<BigNumberish>;
    preVerificationGas: PromiseOrValue<BigNumberish>;
    maxFeePerGas: PromiseOrValue<BigNumberish>;
    maxPriorityFeePerGas: PromiseOrValue<BigNumberish>;
    paymasterAndData: PromiseOrValue<BytesLike>;
    signature: PromiseOrValue<BytesLike>;
};
export declare type UserOperationStructOutput = [
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
] & {
    sender: string;
    nonce: BigNumber;
    initCode: string;
    callData: string;
    callGasLimit: BigNumber;
    verificationGasLimit: BigNumber;
    preVerificationGas: BigNumber;
    maxFeePerGas: BigNumber;
    maxPriorityFeePerGas: BigNumber;
    paymasterAndData: string;
    signature: string;
};
export interface SimpleWalletForTokensInterface extends utils.Interface {
    functions: {
        "addDeposit()": FunctionFragment;
        "entryPoint()": FunctionFragment;
        "exec(address,uint256,bytes)": FunctionFragment;
        "execBatch(address[],uint256[],bytes[])": FunctionFragment;
        "execFromEntryPoint(address,uint256,bytes)": FunctionFragment;
        "getDeposit()": FunctionFragment;
        "nonce()": FunctionFragment;
        "owner()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "updateEntryPoint(address)": FunctionFragment;
        "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,address,uint256)": FunctionFragment;
        "withdrawDepositTo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addDeposit" | "entryPoint" | "exec" | "execBatch" | "execFromEntryPoint" | "getDeposit" | "nonce" | "owner" | "transfer" | "updateEntryPoint" | "validateUserOp" | "withdrawDepositTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "addDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "entryPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "exec", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "execBatch", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "execFromEntryPoint", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateEntryPoint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "validateUserOp", values: [
        UserOperationStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "withdrawDepositTo", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "addDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exec", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execFromEntryPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateEntryPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUserOp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawDepositTo", data: BytesLike): Result;
    events: {
        "EntryPointChanged(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "EntryPointChanged"): EventFragment;
}
export interface EntryPointChangedEventObject {
    oldEntryPoint: string;
    newEntryPoint: string;
}
export declare type EntryPointChangedEvent = TypedEvent<[
    string,
    string
], EntryPointChangedEventObject>;
export declare type EntryPointChangedEventFilter = TypedEventFilter<EntryPointChangedEvent>;
export interface SimpleWalletForTokens extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SimpleWalletForTokensInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addDeposit(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<[string]>;
        exec(dest: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, func: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execBatch(dest: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], func: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        execFromEntryPoint(dest: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, func: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;
        nonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        transfer(dest: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateEntryPoint(newEntryPoint: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateUserOp(userOp: UserOperationStruct, requestId: PromiseOrValue<BytesLike>, aggregator: PromiseOrValue<string>, missingWalletFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawDepositTo(withdrawAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addDeposit(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    entryPoint(overrides?: CallOverrides): Promise<string>;
    exec(dest: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, func: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execBatch(dest: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], func: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    execFromEntryPoint(dest: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, func: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
    nonce(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    transfer(dest: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateEntryPoint(newEntryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateUserOp(userOp: UserOperationStruct, requestId: PromiseOrValue<BytesLike>, aggregator: PromiseOrValue<string>, missingWalletFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawDepositTo(withdrawAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addDeposit(overrides?: CallOverrides): Promise<void>;
        entryPoint(overrides?: CallOverrides): Promise<string>;
        exec(dest: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, func: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        execBatch(dest: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], func: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        execFromEntryPoint(dest: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, func: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
        nonce(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        transfer(dest: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateEntryPoint(newEntryPoint: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validateUserOp(userOp: UserOperationStruct, requestId: PromiseOrValue<BytesLike>, aggregator: PromiseOrValue<string>, missingWalletFunds: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdrawDepositTo(withdrawAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "EntryPointChanged(address,address)"(oldEntryPoint?: PromiseOrValue<string> | null, newEntryPoint?: PromiseOrValue<string> | null): EntryPointChangedEventFilter;
        EntryPointChanged(oldEntryPoint?: PromiseOrValue<string> | null, newEntryPoint?: PromiseOrValue<string> | null): EntryPointChangedEventFilter;
    };
    estimateGas: {
        addDeposit(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        entryPoint(overrides?: CallOverrides): Promise<BigNumber>;
        exec(dest: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, func: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execBatch(dest: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], func: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        execFromEntryPoint(dest: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, func: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
        nonce(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(dest: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateEntryPoint(newEntryPoint: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateUserOp(userOp: UserOperationStruct, requestId: PromiseOrValue<BytesLike>, aggregator: PromiseOrValue<string>, missingWalletFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawDepositTo(withdrawAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addDeposit(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exec(dest: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, func: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execBatch(dest: PromiseOrValue<string>[], values: PromiseOrValue<BigNumberish>[], func: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        execFromEntryPoint(dest: PromiseOrValue<string>, value: PromiseOrValue<BigNumberish>, func: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(dest: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateEntryPoint(newEntryPoint: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateUserOp(userOp: UserOperationStruct, requestId: PromiseOrValue<BytesLike>, aggregator: PromiseOrValue<string>, missingWalletFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawDepositTo(withdrawAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

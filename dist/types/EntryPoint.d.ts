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
export declare namespace IStakeManager {
    type DepositInfoStruct = {
        deposit: PromiseOrValue<BigNumberish>;
        staked: PromiseOrValue<boolean>;
        stake: PromiseOrValue<BigNumberish>;
        unstakeDelaySec: PromiseOrValue<BigNumberish>;
        withdrawTime: PromiseOrValue<BigNumberish>;
    };
    type DepositInfoStructOutput = [
        BigNumber,
        boolean,
        BigNumber,
        number,
        BigNumber
    ] & {
        deposit: BigNumber;
        staked: boolean;
        stake: BigNumber;
        unstakeDelaySec: number;
        withdrawTime: BigNumber;
    };
}
export declare namespace IEntryPoint {
    type UserOpsPerAggregatorStruct = {
        userOps: UserOperationStruct[];
        aggregator: PromiseOrValue<string>;
        signature: PromiseOrValue<BytesLike>;
    };
    type UserOpsPerAggregatorStructOutput = [
        UserOperationStructOutput[],
        string,
        string
    ] & {
        userOps: UserOperationStructOutput[];
        aggregator: string;
        signature: string;
    };
}
export declare namespace EntryPoint {
    type MemoryUserOpStruct = {
        sender: PromiseOrValue<string>;
        nonce: PromiseOrValue<BigNumberish>;
        callGasLimit: PromiseOrValue<BigNumberish>;
        verificationGasLimit: PromiseOrValue<BigNumberish>;
        preVerificationGas: PromiseOrValue<BigNumberish>;
        paymaster: PromiseOrValue<string>;
        maxFeePerGas: PromiseOrValue<BigNumberish>;
        maxPriorityFeePerGas: PromiseOrValue<BigNumberish>;
    };
    type MemoryUserOpStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber
    ] & {
        sender: string;
        nonce: BigNumber;
        callGasLimit: BigNumber;
        verificationGasLimit: BigNumber;
        preVerificationGas: BigNumber;
        paymaster: string;
        maxFeePerGas: BigNumber;
        maxPriorityFeePerGas: BigNumber;
    };
    type UserOpInfoStruct = {
        mUserOp: EntryPoint.MemoryUserOpStruct;
        requestId: PromiseOrValue<BytesLike>;
        prefund: PromiseOrValue<BigNumberish>;
        contextOffset: PromiseOrValue<BigNumberish>;
        preOpGas: PromiseOrValue<BigNumberish>;
    };
    type UserOpInfoStructOutput = [
        EntryPoint.MemoryUserOpStructOutput,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        mUserOp: EntryPoint.MemoryUserOpStructOutput;
        requestId: string;
        prefund: BigNumber;
        contextOffset: BigNumber;
        preOpGas: BigNumber;
    };
}
export interface EntryPointInterface extends utils.Interface {
    functions: {
        "addStake(uint32)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "depositTo(address)": FunctionFragment;
        "deposits(address)": FunctionFragment;
        "getDepositInfo(address)": FunctionFragment;
        "getRequestId((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))": FunctionFragment;
        "getSenderAddress(bytes)": FunctionFragment;
        "getSenderStorage(address)": FunctionFragment;
        "handleAggregatedOps(((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],address,bytes)[],address)": FunctionFragment;
        "handleOps((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[],address)": FunctionFragment;
        "innerHandleOp(bytes,((address,uint256,uint256,uint256,uint256,address,uint256,uint256),bytes32,uint256,uint256,uint256),bytes)": FunctionFragment;
        "paymasterStake()": FunctionFragment;
        "simulateValidation((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bool)": FunctionFragment;
        "unlockStake()": FunctionFragment;
        "unstakeDelaySec()": FunctionFragment;
        "withdrawStake(address)": FunctionFragment;
        "withdrawTo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addStake" | "balanceOf" | "depositTo" | "deposits" | "getDepositInfo" | "getRequestId" | "getSenderAddress" | "getSenderStorage" | "handleAggregatedOps" | "handleOps" | "innerHandleOp" | "paymasterStake" | "simulateValidation" | "unlockStake" | "unstakeDelaySec" | "withdrawStake" | "withdrawTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "addStake", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "depositTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "deposits", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getDepositInfo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRequestId", values: [UserOperationStruct]): string;
    encodeFunctionData(functionFragment: "getSenderAddress", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getSenderStorage", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "handleAggregatedOps", values: [IEntryPoint.UserOpsPerAggregatorStruct[], PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "handleOps", values: [UserOperationStruct[], PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "innerHandleOp", values: [
        PromiseOrValue<BytesLike>,
        EntryPoint.UserOpInfoStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "paymasterStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "simulateValidation", values: [UserOperationStruct, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "unlockStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "unstakeDelaySec", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawStake", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawTo", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDepositInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRequestId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSenderAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSenderStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleAggregatedOps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handleOps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "innerHandleOp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paymasterStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "simulateValidation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unstakeDelaySec", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;
    events: {
        "Deposited(address,uint256)": EventFragment;
        "StakeLocked(address,uint256,uint256)": EventFragment;
        "StakeUnlocked(address,uint256)": EventFragment;
        "StakeWithdrawn(address,address,uint256)": EventFragment;
        "UserOperationEvent(bytes32,address,address,uint256,uint256,uint256,bool)": EventFragment;
        "UserOperationRevertReason(bytes32,address,uint256,bytes)": EventFragment;
        "Withdrawn(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeLocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeUnlocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserOperationEvent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserOperationRevertReason"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}
export interface DepositedEventObject {
    account: string;
    totalDeposit: BigNumber;
}
export declare type DepositedEvent = TypedEvent<[
    string,
    BigNumber
], DepositedEventObject>;
export declare type DepositedEventFilter = TypedEventFilter<DepositedEvent>;
export interface StakeLockedEventObject {
    account: string;
    totalStaked: BigNumber;
    withdrawTime: BigNumber;
}
export declare type StakeLockedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], StakeLockedEventObject>;
export declare type StakeLockedEventFilter = TypedEventFilter<StakeLockedEvent>;
export interface StakeUnlockedEventObject {
    account: string;
    withdrawTime: BigNumber;
}
export declare type StakeUnlockedEvent = TypedEvent<[
    string,
    BigNumber
], StakeUnlockedEventObject>;
export declare type StakeUnlockedEventFilter = TypedEventFilter<StakeUnlockedEvent>;
export interface StakeWithdrawnEventObject {
    account: string;
    withdrawAddress: string;
    amount: BigNumber;
}
export declare type StakeWithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], StakeWithdrawnEventObject>;
export declare type StakeWithdrawnEventFilter = TypedEventFilter<StakeWithdrawnEvent>;
export interface UserOperationEventEventObject {
    requestId: string;
    sender: string;
    paymaster: string;
    nonce: BigNumber;
    actualGasCost: BigNumber;
    actualGasPrice: BigNumber;
    success: boolean;
}
export declare type UserOperationEventEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean
], UserOperationEventEventObject>;
export declare type UserOperationEventEventFilter = TypedEventFilter<UserOperationEventEvent>;
export interface UserOperationRevertReasonEventObject {
    requestId: string;
    sender: string;
    nonce: BigNumber;
    revertReason: string;
}
export declare type UserOperationRevertReasonEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], UserOperationRevertReasonEventObject>;
export declare type UserOperationRevertReasonEventFilter = TypedEventFilter<UserOperationRevertReasonEvent>;
export interface WithdrawnEventObject {
    account: string;
    withdrawAddress: string;
    amount: BigNumber;
}
export declare type WithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], WithdrawnEventObject>;
export declare type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;
export interface EntryPoint extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EntryPointInterface;
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
        addStake(_unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        depositTo(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deposits(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean,
            BigNumber,
            number,
            BigNumber
        ] & {
            deposit: BigNumber;
            staked: boolean;
            stake: BigNumber;
            unstakeDelaySec: number;
            withdrawTime: BigNumber;
        }>;
        getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IStakeManager.DepositInfoStructOutput
        ] & {
            info: IStakeManager.DepositInfoStructOutput;
        }>;
        getRequestId(userOp: UserOperationStruct, overrides?: CallOverrides): Promise<[string]>;
        getSenderAddress(initCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getSenderStorage(sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            senderStorageCells: BigNumber[];
        }>;
        handleAggregatedOps(opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        handleOps(ops: UserOperationStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        innerHandleOp(callData: PromiseOrValue<BytesLike>, opInfo: EntryPoint.UserOpInfoStruct, context: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paymasterStake(overrides?: CallOverrides): Promise<[BigNumber]>;
        simulateValidation(userOp: UserOperationStruct, offChainSigCheck: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unstakeDelaySec(overrides?: CallOverrides): Promise<[number]>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addStake(_unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    depositTo(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deposits(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        boolean,
        BigNumber,
        number,
        BigNumber
    ] & {
        deposit: BigNumber;
        staked: boolean;
        stake: BigNumber;
        unstakeDelaySec: number;
        withdrawTime: BigNumber;
    }>;
    getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IStakeManager.DepositInfoStructOutput>;
    getRequestId(userOp: UserOperationStruct, overrides?: CallOverrides): Promise<string>;
    getSenderAddress(initCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getSenderStorage(sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
    handleAggregatedOps(opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    handleOps(ops: UserOperationStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    innerHandleOp(callData: PromiseOrValue<BytesLike>, opInfo: EntryPoint.UserOpInfoStruct, context: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paymasterStake(overrides?: CallOverrides): Promise<BigNumber>;
    simulateValidation(userOp: UserOperationStruct, offChainSigCheck: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unlockStake(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unstakeDelaySec(overrides?: CallOverrides): Promise<number>;
    withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addStake(_unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        depositTo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        deposits(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean,
            BigNumber,
            number,
            BigNumber
        ] & {
            deposit: BigNumber;
            staked: boolean;
            stake: BigNumber;
            unstakeDelaySec: number;
            withdrawTime: BigNumber;
        }>;
        getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IStakeManager.DepositInfoStructOutput>;
        getRequestId(userOp: UserOperationStruct, overrides?: CallOverrides): Promise<string>;
        getSenderAddress(initCode: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getSenderStorage(sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
        handleAggregatedOps(opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[], beneficiary: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        handleOps(ops: UserOperationStruct[], beneficiary: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        innerHandleOp(callData: PromiseOrValue<BytesLike>, opInfo: EntryPoint.UserOpInfoStruct, context: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        paymasterStake(overrides?: CallOverrides): Promise<BigNumber>;
        simulateValidation(userOp: UserOperationStruct, offChainSigCheck: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string,
            string,
            string,
            string
        ] & {
            preOpGas: BigNumber;
            prefund: BigNumber;
            actualAggregator: string;
            sigForUserOp: string;
            sigForAggregation: string;
            offChainSigInfo: string;
        }>;
        unlockStake(overrides?: CallOverrides): Promise<void>;
        unstakeDelaySec(overrides?: CallOverrides): Promise<number>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Deposited(address,uint256)"(account?: PromiseOrValue<string> | null, totalDeposit?: null): DepositedEventFilter;
        Deposited(account?: PromiseOrValue<string> | null, totalDeposit?: null): DepositedEventFilter;
        "StakeLocked(address,uint256,uint256)"(account?: PromiseOrValue<string> | null, totalStaked?: null, withdrawTime?: null): StakeLockedEventFilter;
        StakeLocked(account?: PromiseOrValue<string> | null, totalStaked?: null, withdrawTime?: null): StakeLockedEventFilter;
        "StakeUnlocked(address,uint256)"(account?: PromiseOrValue<string> | null, withdrawTime?: null): StakeUnlockedEventFilter;
        StakeUnlocked(account?: PromiseOrValue<string> | null, withdrawTime?: null): StakeUnlockedEventFilter;
        "StakeWithdrawn(address,address,uint256)"(account?: PromiseOrValue<string> | null, withdrawAddress?: null, amount?: null): StakeWithdrawnEventFilter;
        StakeWithdrawn(account?: PromiseOrValue<string> | null, withdrawAddress?: null, amount?: null): StakeWithdrawnEventFilter;
        "UserOperationEvent(bytes32,address,address,uint256,uint256,uint256,bool)"(requestId?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, paymaster?: PromiseOrValue<string> | null, nonce?: null, actualGasCost?: null, actualGasPrice?: null, success?: null): UserOperationEventEventFilter;
        UserOperationEvent(requestId?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, paymaster?: PromiseOrValue<string> | null, nonce?: null, actualGasCost?: null, actualGasPrice?: null, success?: null): UserOperationEventEventFilter;
        "UserOperationRevertReason(bytes32,address,uint256,bytes)"(requestId?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, nonce?: null, revertReason?: null): UserOperationRevertReasonEventFilter;
        UserOperationRevertReason(requestId?: PromiseOrValue<BytesLike> | null, sender?: PromiseOrValue<string> | null, nonce?: null, revertReason?: null): UserOperationRevertReasonEventFilter;
        "Withdrawn(address,address,uint256)"(account?: PromiseOrValue<string> | null, withdrawAddress?: null, amount?: null): WithdrawnEventFilter;
        Withdrawn(account?: PromiseOrValue<string> | null, withdrawAddress?: null, amount?: null): WithdrawnEventFilter;
    };
    estimateGas: {
        addStake(_unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        depositTo(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deposits(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRequestId(userOp: UserOperationStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getSenderAddress(initCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getSenderStorage(sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        handleAggregatedOps(opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        handleOps(ops: UserOperationStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        innerHandleOp(callData: PromiseOrValue<BytesLike>, opInfo: EntryPoint.UserOpInfoStruct, context: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paymasterStake(overrides?: CallOverrides): Promise<BigNumber>;
        simulateValidation(userOp: UserOperationStruct, offChainSigCheck: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unstakeDelaySec(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addStake(_unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        depositTo(account: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deposits(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDepositInfo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRequestId(userOp: UserOperationStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSenderAddress(initCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getSenderStorage(sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handleAggregatedOps(opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        handleOps(ops: UserOperationStruct[], beneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        innerHandleOp(callData: PromiseOrValue<BytesLike>, opInfo: EntryPoint.UserOpInfoStruct, context: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paymasterStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        simulateValidation(userOp: UserOperationStruct, offChainSigCheck: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unstakeDelaySec(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, withdrawAmount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

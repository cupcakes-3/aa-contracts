"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.VerifyingPaymaster__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "_entryPoint",
                type: "address"
            },
            {
                internalType: "address",
                name: "_verifyingSigner",
                type: "address"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "extraUnstakeDelaySec",
                type: "uint32"
            },
        ],
        name: "addStake",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [],
        name: "entryPoint",
        outputs: [
            {
                internalType: "contract IEntryPoint",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getDeposit",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    },
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple"
            },
        ],
        name: "getHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            },
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum IPaymaster.PostOpMode",
                name: "mode",
                type: "uint8"
            },
            {
                internalType: "bytes",
                name: "context",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "actualGasCost",
                type: "uint256"
            },
        ],
        name: "postOp",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "_entryPoint",
                type: "address"
            },
        ],
        name: "setEntryPoint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "unlockStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    },
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple"
            },
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "requiredPreFund",
                type: "uint256"
            },
        ],
        name: "validatePaymasterUserOp",
        outputs: [
            {
                internalType: "bytes",
                name: "context",
                type: "bytes"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "verifyingSigner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address"
            },
        ],
        name: "withdrawStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "withdrawTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x60a06040523480156200001157600080fd5b506040516200161d3803806200161d833981016040819052620000349162000155565b8162000040336200005f565b6200004b81620000af565b506001600160a01b03166080525062000194565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620000b9620000db565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146200013a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b6001600160a01b03811681146200015257600080fd5b50565b600080604083850312156200016957600080fd5b825162000176816200013c565b602084015190925062000189816200013c565b809150509250929050565b608051611466620001b7600039600081816101340152610a0e01526114666000f3fe6080604052600436106100e85760003560e01c8063b0d691fe1161008a578063c399ec8811610059578063c399ec8814610290578063d0e30db0146102a5578063f2fde38b146102ad578063f465c77e146102cd57600080fd5b8063b0d691fe14610200578063bb9fe6bf1461022d578063c23a5cea14610242578063c266f2921461026257600080fd5b8063584465f2116100c6578063584465f214610180578063715018a6146101a05780638da5cb5b146101b5578063a9a23409146101e057600080fd5b80630396cb60146100ed578063205c28781461010257806323d9ac9b14610122575b600080fd5b6101006100fb366004611089565b6102fa565b005b34801561010e57600080fd5b5061010061011d3660046110cf565b610420565b34801561012e57600080fd5b506101567f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561018c57600080fd5b5061010061019b3660046110fb565b61049c565b3480156101ac57600080fd5b506101006104eb565b3480156101c157600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff16610156565b3480156101ec57600080fd5b506101006101fb366004611118565b6104ff565b34801561020c57600080fd5b506001546101569073ffffffffffffffffffffffffffffffffffffffff1681565b34801561023957600080fd5b50610100610519565b34801561024e57600080fd5b5061010061025d3660046110fb565b61059f565b34801561026e57600080fd5b5061028261027d3660046111c0565b61062f565b604051908152602001610177565b34801561029c57600080fd5b5061028261070f565b6101006107a7565b3480156102b957600080fd5b506101006102c83660046110fb565b610813565b3480156102d957600080fd5b506102ed6102e83660046111fd565b6108cf565b604051610177919061124b565b610302610aeb565b600154604080517f390b9978000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff90921691630396cb609134918591859163390b99789160048082019260209290919082900301816000875af1158015610380573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a491906112be565b6103ae919061130a565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815263ffffffff9190911660048201526024016000604051808303818588803b15801561040457600080fd5b505af1158015610418573d6000803e3d6000fd5b505050505050565b610428610aeb565b6001546040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490529091169063205c287890604401600060405180830381600087803b15801561040457600080fd5b6104a4610aeb565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6104f3610aeb565b6104fd6000610b6c565b565b610507610be1565b61051384848484610c05565b50505050565b610521610aeb565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561058b57600080fd5b505af1158015610513573d6000803e3d6000fd5b6105a7610aeb565b6001546040517fc23a5cea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301529091169063c23a5cea90602401600060405180830381600087803b15801561061457600080fd5b505af1158015610628573d6000803e3d6000fd5b5050505050565b6000813560208301356106456040850185611332565b604051610653929190611397565b6040519081900390206106696060860186611332565b604051610677929190611397565b6040805191829003822073ffffffffffffffffffffffffffffffffffffffff909516602083015281019290925260608201526080808201929092529083013560a08083019190915283013560c08083019190915283013560e08083019190915283013561010080830191909152830135610120820152610140015b604051602081830303815290604052805190602001209050919050565b6001546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa15801561077e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a291906113a7565b905090565b6001546040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b760faf99034906024016000604051808303818588803b15801561061457600080fd5b61081b610aeb565b73ffffffffffffffffffffffffffffffffffffffff81166108c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6108cc81610b6c565b50565b606060006108dc8561062f565b90503660006108ef610120880188611332565b909250905060006109016014836113c0565b905080604014806109125750806041145b6109a057604080517f08c379a00000000000000000000000000000000000000000000000000000000081526020600482015260248101919091527f566572696679696e675061796d61737465723a20696e76616c6964207369676e60448201527f6174757265206c656e67746820696e207061796d6173746572416e644461746160648201526084016108ba565b6109f66109b083601481876113d7565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506109f09250889150610c679050565b90610ca2565b73ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610ad0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f566572696679696e675061796d61737465723a2077726f6e67207369676e617460448201527f757265000000000000000000000000000000000000000000000000000000000060648201526084016108ba565b50506040805160208101909152600081529695505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108ba565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146104fd57600080fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f6d757374206f766572726964650000000000000000000000000000000000000060448201526064016108ba565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c016106f2565b6000806000610cb18585610cc6565b91509150610cbe81610d0b565b509392505050565b6000808251604103610cfc5760208301516040840151606085015160001a610cf087828585610f5f565b94509450505050610d04565b506000905060025b9250929050565b6000816004811115610d1f57610d1f611401565b03610d275750565b6001816004811115610d3b57610d3b611401565b03610da2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016108ba565b6002816004811115610db657610db6611401565b03610e1d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016108ba565b6003816004811115610e3157610e31611401565b03610ebe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f756500000000000000000000000000000000000000000000000000000000000060648201526084016108ba565b6004816004811115610ed257610ed2611401565b036108cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60448201527f756500000000000000000000000000000000000000000000000000000000000060648201526084016108ba565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610f96575060009050600361106e565b8460ff16601b14158015610fae57508460ff16601c14155b15610fbf575060009050600461106e565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611013573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166110675760006001925092505061106e565b9150600090505b94509492505050565b63ffffffff811681146108cc57600080fd5b60006020828403121561109b57600080fd5b81356110a681611077565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146108cc57600080fd5b600080604083850312156110e257600080fd5b82356110ed816110ad565b946020939093013593505050565b60006020828403121561110d57600080fd5b81356110a6816110ad565b6000806000806060858703121561112e57600080fd5b84356003811061113d57600080fd5b9350602085013567ffffffffffffffff8082111561115a57600080fd5b818701915087601f83011261116e57600080fd5b81358181111561117d57600080fd5b88602082850101111561118f57600080fd5b95986020929092019750949560400135945092505050565b600061016082840312156111ba57600080fd5b50919050565b6000602082840312156111d257600080fd5b813567ffffffffffffffff8111156111e957600080fd5b6111f5848285016111a7565b949350505050565b60008060006060848603121561121257600080fd5b833567ffffffffffffffff81111561122957600080fd5b611235868287016111a7565b9660208601359650604090950135949350505050565b600060208083528351808285015260005b818110156112785785810183015185820160400152820161125c565b8181111561128a576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b6000602082840312156112d057600080fd5b81516110a681611077565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600063ffffffff808316818516808303821115611329576113296112db565b01949350505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261136757600080fd5b83018035915067ffffffffffffffff82111561138257600080fd5b602001915036819003821315610d0457600080fd5b8183823760009101908152919050565b6000602082840312156113b957600080fd5b5051919050565b6000828210156113d2576113d26112db565b500390565b600080858511156113e757600080fd5b838611156113f457600080fd5b5050820193919092039150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea26469706673582212205607d7d34ea77fa7b964d82ccdd46ad111d57876f1bbc38c45b8c85edbebbd2c64736f6c634300080f0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var VerifyingPaymaster__factory = /** @class */ (function (_super) {
    __extends(VerifyingPaymaster__factory, _super);
    function VerifyingPaymaster__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    VerifyingPaymaster__factory.prototype.deploy = function (_entryPoint, _verifyingSigner, overrides) {
        return _super.prototype.deploy.call(this, _entryPoint, _verifyingSigner, overrides || {});
    };
    VerifyingPaymaster__factory.prototype.getDeployTransaction = function (_entryPoint, _verifyingSigner, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _entryPoint, _verifyingSigner, overrides || {});
    };
    VerifyingPaymaster__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    VerifyingPaymaster__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    VerifyingPaymaster__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    VerifyingPaymaster__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    VerifyingPaymaster__factory.bytecode = _bytecode;
    VerifyingPaymaster__factory.abi = _abi;
    return VerifyingPaymaster__factory;
}(ethers_1.ContractFactory));
exports.VerifyingPaymaster__factory = VerifyingPaymaster__factory;

/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { ParserDelegate } from "./ParserDelegate";

export class ParserDelegateFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ParserDelegate> {
    return super.deploy(overrides) as Promise<ParserDelegate>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ParserDelegate {
    return super.attach(address) as ParserDelegate;
  }
  connect(signer: Signer): ParserDelegateFactory {
    return super.connect(signer) as ParserDelegateFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ParserDelegate {
    return new Contract(address, _abi, signerOrProvider) as ParserDelegate;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "_rawTx",
        type: "bytes"
      }
    ],
    name: "extractInputLength",
    outputs: [
      {
        internalType: "uint256",
        name: "numInputs",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lenInputs",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "_rawTx",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "extractOutputAtIndex",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "_rawTx",
        type: "bytes"
      }
    ],
    name: "extractOutputLength",
    outputs: [
      {
        internalType: "uint256",
        name: "numOutputs",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lenOutputs",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "_rawTx",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "extractOutputScriptAtIndex",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "_rawTx",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "extractOutputValueAtIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b4e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633347750d1461005c57806345e11599146101195780636bc233511461023457806374348058146102ec5780638bd3277a14610390575b600080fd5b6101006004803603602081101561007257600080fd5b810190602081018135600160201b81111561008c57600080fd5b82018360208201111561009e57600080fd5b803590602001918460018302840111600160201b831117156100bf57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610436945050505050565b6040805192835260208301919091528051918290030190f35b6101bf6004803603604081101561012f57600080fd5b810190602081018135600160201b81111561014957600080fd5b82018360208201111561015b57600080fd5b803590602001918460018302840111600160201b8311171561017c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550509135925061044b915050565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101f95781810151838201526020016101e1565b50505050905090810190601f1680156102265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102da6004803603604081101561024a57600080fd5b810190602081018135600160201b81111561026457600080fd5b82018360208201111561027657600080fd5b803590602001918460018302840111600160201b8311171561029757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550509135925061046d915050565b60408051918252519081900360200190f35b6101006004803603602081101561030257600080fd5b810190602081018135600160201b81111561031c57600080fd5b82018360208201111561032e57600080fd5b803590602001918460018302840111600160201b8311171561034f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610498945050505050565b6101bf600480360360408110156103a657600080fd5b810190602081018135600160201b8111156103c057600080fd5b8201836020820111156103d257600080fd5b803590602001918460018302840111600160201b831117156103f357600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050913592506104a4915050565b600080610442836104dc565b91509150915091565b60608061045884846104a4565b905061046381610609565b9150505b92915050565b6000606061047b84846104a4565b905061048681610671565b67ffffffffffffffff16949350505050565b6000806104428361067c565b606060006104b1846104dc565b915050610463836104d08384885103886107309092919063ffffffff16565b9063ffffffff6107eb16565b80516000908190600460606104f98683600263ffffffff61073016565b90508060008151811061050857fe5b01602001516001600160f81b03191615801561054357508060018151811061052c57fe5b6020910101516001600160f81b031916600160f81b145b1561054f578160020191505b600061056c610567888580880363ffffffff61073016565b610991565b60ff1690508061057a575060015b600061059561059089868563ffffffff61073016565b610a0d565b93820193905060005b818110156105fb5760248501946000906105c590610567908c9089908b0360231901610730565b60ff169050806105d3575060015b60006105e96105908c898563ffffffff61073016565b9190960101600401945060010161059e565b509550919350505050915091565b80516060906008600061062a6105678684600719870163ffffffff61073016565b60ff16905080610638575060015b600061064e61059087858563ffffffff61073016565b92820192905061066586848363ffffffff61073016565b9450505050505b919050565b600061046782610a51565b80516000908190818061069961056787838663ffffffff61073016565b60ff169050806106a7575060015b60006106bd61059088858563ffffffff61073016565b92820192905060005b818110156107235783600801935060006106f0610567868789038c6107309092919063ffffffff16565b60ff169050806106fe575060015b60006107146105908b888563ffffffff61073016565b919095010193506001016106c6565b5094509092505050915091565b60608161074c57506040805160208101909152600081526107e4565b828201838111801561075f575080855110155b6107a6576040805162461bcd60e51b8152602060048201526013602482015272536c696365206f7574206f6620626f756e647360681b604482015290519081900360640190fd5b604051915082604083010160405282825283850182038460208701018481015b808210156107df578151838301526020820191506107c6565b505050505b9392505050565b815160609060008061080761056787838663ffffffff61073016565b60ff16905080610815575060015b600061082b61059088858563ffffffff61073016565b9050858110156040518060400160405280600e81526020016d125b9d985b1a59081bdd5d1c1d5d60921b815250906108e15760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156108a657818101518382015260200161088e565b50505050905090810190601f1680156108d35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50918101918260005b8281101561097557846008019450600061091461056787888a038d6107309092919063ffffffff16565b60ff16905080610922575060015b60006109386105908c898563ffffffff61073016565b9682018701969050828a1415610968576109598b858963ffffffff61073016565b98505050505050505050610467565b50859250506001016108ea565b5050604080516020810190915260008152979650505050505050565b6000816000815181106109a057fe5b60209101015160f81c60ff14156109b95750600861066c565b816000815181106109c657fe5b60209101015160f81c60fe14156109df5750600461066c565b816000815181106109ec57fe5b60209101015160f81c60fd1415610a055750600261066c565b506000919050565b600080805b8351811015610a4a578060010184510360080260020a848281518110610a3457fe5b016020015160f81c029190910190600101610a12565b5092915050565b60006060610a5e83610a7e565b90506060610a6b82610a93565b9050610a7681610a0d565b949350505050565b6060610467826000600863ffffffff61073016565b60608082516040519080825280601f01601f191660200182016040528015610ac2576020820181803883390190505b50905060005b8351811015610a4a57838181518110610add57fe5b602001015160f81c60f81b826001838751030381518110610afa57fe5b60200101906001600160f81b031916908160001a905350600101610ac856fea265627a7a723158201c127a78a1539f81fb1e91a02cb0da07ba02138410814c41a6b7296a28a5376c64736f6c634300050f0032";
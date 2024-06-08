import { ethers } from "ethers";
import Web3Modal from "web3modal";
import crowdFunding from "./CrowdFunding.json";

// Ganache RPC URL
const ganacheRpcUrl = "http://127.0.0.1:7545/";

export const CrowdFundingAddress = "0x8Ba3021e4C312bEf53A172C1DfB704fd762f8dB9";
export const CrowdFundingABI = crowdFunding.abi;

// Ganache network config
const ganacheNetwork = {
  chainId: `0x${Number(5777).toString(16)}`,
  chainName: "Ganache",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: [ganacheRpcUrl],
  blockExplorerUrls: [],
};

const changeNetwork = async ({ network }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [network],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const handleNetworkSwitch = async () => {
  await changeNetwork({ network: ganacheNetwork });
};
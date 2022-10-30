import { ClientObj, Data } from "./interface";
import { Algodv2 } from "algosdk";

export const ALGOD_CLIENT: ClientObj = {
  testnet: new Algodv2("", "https://node.testnet.algoexplorerapi.io/", ""),
  mainnet: new Algodv2("", "https://node.algoexplorerapi.io/", "")
};

export const AXIOS_OPTIONS: Data = {
  baseURL: "https://api.flashpay.finance",
  timeout: 30000
};

export const FLASHPAY_CONNECT_MODAL_ID = "flashpay-connect-modal-wrapper";

export const URL: string = "/api/transactions";

export const BUTTON_ID: string = "connect-wallet-button";

export const ALGORAND_ASSETS = {
  mainnet: {
    31566704: {
      longName: "USDC",
      shortName: "USDC"
    },
    1: {
      longName: "Algorand",
      shortName: "ALGO"
    },
    312769: {
      longName: "Tether USDt",
      shortName: "USDt"
    }
  },
  testnet: {
    0: {
      longName: "Algorand",
      shortName: "ALGO"
    },
    10458941: {
      longName: "USDC",
      shortName: "USDC"
    }
  }
};

export const WALLET_PROVIDERS = [
  { type: "pera", name: "Pera wallet" },
  { type: "myAlgo", name: "My Algo wallet" }
];

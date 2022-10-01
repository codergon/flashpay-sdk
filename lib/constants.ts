import { ClientObj, Data } from "./interface";
import { Algodv2 } from "algosdk";

export const ALGOD_CLIENT: ClientObj = {
  testnet: new Algodv2("", "https://node.testnet.algoexplorerapi.io/", ""),
  mainnet: new Algodv2("", "https://node.algoexplorerapi.io/", ""),
};

export const AXIOS_OPTIONS: Data = {
  baseURL: "http://develop.api.flashpay.finance",
  timeout: 30000,
};

export const URL: string = "/api/transactions";

export const BUTTON_ID: string = "connect-wallet-button";

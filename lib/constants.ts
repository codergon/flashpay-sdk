import { ClientObj, Data } from "./interface";
import { Algodv2 } from "algosdk";

export const algodClient: ClientObj = {
  testnet: new Algodv2("", "https://node.testnet.algoexplorerapi.io/", ""),
  mainnet: new Algodv2("", "https://node.mainnet.algoexplorerapi.io/", ""),
};

export const axiosOptions: Data = {
  baseURL: "http://develop.api.flashpay.finance",
  timeout: 30000,
};

export const url: string = "/api/transactions";

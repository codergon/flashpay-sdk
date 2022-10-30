import { ClientObj, Data } from "./interface";
import { Algodv2 } from "algosdk";

export const ALGOD_CLIENT: ClientObj = {
  testnet: new Algodv2("", "https://node.testnet.algoexplorerapi.io/", ""),
  mainnet: new Algodv2("", "https://node.algoexplorerapi.io/", ""),
};

export const AXIOS_OPTIONS: Data = {
  // baseURL: "http://develop.api.flashpay.finance",
  baseURL: "https://flashpay-backend-develop.herokuapp.com",
  timeout: 30000,
};

export const FLASHPAY_CONNECT_MODAL_ID = "flashpay-connect-modal-wrapper";

export const URL: string = "/api/transactions";

export const BUTTON_ID: string = "connect-wallet-button";

export const ALGORAND_ASSETS = [
  {
    asa_id: 31566704,
    decimals: 6,
    image_url:
      "https://res.cloudinary.com/dybhjquqy/image/upload/v1661719301/assets/31566704.svg",
    long_name: "USDC",
    network: "mainnet",
    short_name: "USDC",
  },
  {
    asa_id: 1,
    decimals: 6,
    image_url:
      "https://res.cloudinary.com/dybhjquqy/image/upload/v1662208024/assets/1.svg",
    long_name: "Algorand",
    network: "mainnet",
    short_name: "ALGO",
  },
  {
    asa_id: 312769,
    decimals: 6,
    image_url:
      "https://res.cloudinary.com/dybhjquqy/image/upload/v1661719297/assets/312769.svg",
    long_name: "Tether USDt",
    network: "mainnet",
    short_name: "USDt",
  },
  {
    asa_id: 10458941,
    decimals: 6,
    image_url:
      "https://res.cloudinary.com/dybhjquqy/image/upload/v1661742799/assets/10458941.svg",
    long_name: "USDC",
    network: "testnet",
    short_name: "USDC",
  },
  {
    asa_id: 0,
    decimals: 6,
    image_url:
      "https://res.cloudinary.com/dybhjquqy/image/upload/v1661719304/assets/0.svg",
    long_name: "Algorand",
    network: "testnet",
    short_name: "ALGO",
  },
];

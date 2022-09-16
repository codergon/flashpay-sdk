import { Algodv2 } from "algosdk";

export type ResponseData = {
  [key: string]: string[] | string;
};

export type Data = {
  [key: string]: any;
};

export type callable = {
  (txnId: string): any;
};

export type ClientObj = {
  [key: string]: Algodv2;
};

export interface IRequestData {
  asset: number;
  recipient: string;
  amount: string;
  network: "testnet" | "mainnet";
  txn_type: "payment_link" | "normal";
  payment_link?: string;
}

export interface IResponseData {
  status_code: number;
  message: string;
  data: ResponseData;
}

export interface IWallet {
  wallet: any;
  connect(): Promise<string>;
  signTransaction(txn: any): Promise<string>;
}

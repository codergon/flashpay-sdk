import axios, { AxiosInstance } from "axios";
import algosdk, { Algodv2 } from "algosdk";
import { algodClient, axiosOptions, url } from "./constants";
import { IRequestData, IResponseData, callable, Data } from "./interface";
import { AlgoSigner, MyAlgo, Pera } from "./utils";
import {MODAL_CONTENT} from "./html";

export class FlashPay {
  private readonly axios: AxiosInstance;
  private readonly client: Algodv2;

  constructor(public readonly network: string) {
    this.axios = axios.create(axiosOptions);
    this.client = algodClient[network];
  }

  private getWallet() {
    const id = document.getElementById("id")?.textContent;
    switch (id) {
      case "pera":
        return new Pera(this.network);
      case "myAlgo":
        return new MyAlgo(this.network);
      case "algoSigner":
        return new AlgoSigner(this.network);
      default:
        throw new Error("unsupported wallet type");
    }
  }

  private async createTransaction(data: Data) {
    const enc = new TextEncoder();
    const suggestedParams = await this.client.getTransactionParams().do();
    if (data.asset.asa_id == 0 || 1) {
      return algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        from: data.sender,
        to: data.recipient,
        amount: parseInt(data.amount) * parseInt(data.asset.decimal),
        note: enc.encode(data.txn_reference),
        suggestedParams,
      });
    } else {
      return algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
        from: data.sender,
        to: data.recipient,
        assetIndex: parseInt(data.asset.asa_id),
        amount: parseInt(data.amount) * parseInt(data.asset.decimal),
        note: enc.encode(data.txn_reference),
        suggestedParams,
      });
    }
  }

  public async setup(payload: IRequestData, key: string, callback: callable) {
    // console.log("I'm working", payload, key, callback);
    document.body.innerHTML = MODAL_CONTENT;

    try {
      const wallet = this.getWallet();
      const sender = await wallet.connect();
      const response = await this.axios.post<IResponseData>(
        url,
        { ...payload, sender },
        { headers: { "x-public-key": key } },
      );
      const txn = await this.createTransaction(response.data);
      const txnId = await wallet.signTransaction(txn);
      callback(txnId);
    } catch (err) {
      return err;
    }
  }
}

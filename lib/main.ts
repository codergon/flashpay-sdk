import axios, { AxiosInstance } from "axios";
import algosdk, { Algodv2 } from "algosdk";
import { ALGOD_CLIENT, AXIOS_OPTIONS, BUTTON_ID, URL } from "./constants";
import {
  callable,
  Data,
  IRequestData,
  IResponseData,
  WalletType,
} from "./interface";
import { MyAlgo, Pera } from "./utils";
import { MODAL_CONTENT } from "./html";

export class FlashPay {
  private readonly axios: AxiosInstance;
  private readonly client: Algodv2;
  private selectedWallet: WalletType | null = null;

  constructor(public readonly network: string) {
    this.axios = axios.create(AXIOS_OPTIONS);
    this.client = ALGOD_CLIENT[network];
  }

  private getWallet() {
    switch (this.selectedWallet) {
      case WalletType.pera:
        return new Pera(this.network);
      case WalletType.myAlgo:
        return new MyAlgo(this.network);
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
        amount: parseFloat(data.amount) * 10 ** parseFloat(data.asset.decimals),
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
    const network = key.startsWith("pk_test") ? "testnet" : "mainnet";
    if (network !== this.network) {
      throw new Error("API Key doesn't match specified network");
    }
    document.body.innerHTML = MODAL_CONTENT;
    document.addEventListener("click", async (e: any) => {
      if (e.target.id == WalletType.pera) {
        this.selectedWallet = WalletType.pera;
      }
      if (e.target.id == WalletType.myAlgo) {
        this.selectedWallet = WalletType.myAlgo;
      }
      if (e.target.id == BUTTON_ID) {
        try {
          const wallet = this.getWallet();
          const sender = await wallet.connect();
          //TODO: CHANGE THE HTML TO BE LOADING SCREEN AFTER CONNECT
          const response = await this.axios.post<IResponseData>(
            URL,
            { ...payload, sender },
            { headers: { "x-public-key": key } },
          );
          const txn = await this.createTransaction(response.data.data);
          const txnId = await wallet.signTransaction(txn);
          callback(txnId);
          // TODO: REVERT THE DOM TO THE INITIAL STATE
        } catch (err) {
          // TODO: SHOW ERROR HTML
          return err;
        }
      }
    });
  }
}

import { PeraWalletConnect } from "@perawallet/connect";
import { IWallet } from "./interface";
import MyAlgoWallet from "@randlabs/myalgo-connect";
import { Algodv2 } from "algosdk";
import { algodClient } from "./constants";

export class Pera implements IWallet {
  public readonly wallet = new PeraWalletConnect();
  private readonly client: Algodv2;

  constructor(network: string) {
    this.client = algodClient[network];
  }

  async connect(): Promise<string> {
    try {
      const addresses = await this.wallet.connect();
      this.wallet.connector?.on("disconnect", this.disconnect);
      localStorage.setItem("address", addresses[0]);
      localStorage.setItem("provider", "PeraWallet");
      return addresses[0];
    } catch (err: any) {
      if (err?.data?.type !== "CONNECT_MODAL_CLOSED") {
        throw new Error("Error encountered");
      } else {
        throw new Error(err.message);
      }
    }
  }

  async disconnect(): Promise<void> {
    await this.wallet.disconnect();
    localStorage.removeItem("address");
    localStorage.removeItem("provider");
  }

  async signTransaction(txn: any): Promise<string> {
    const singleTxnGroups = [{ txn: txn }];
    try {
      const signedTxn = await this.wallet.signTransaction([singleTxnGroups]);
      return await this.client.sendRawTransaction(signedTxn).do();
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}

export class MyAlgo implements IWallet {
  public readonly wallet = new MyAlgoWallet();
  private readonly client: Algodv2;

  constructor(network: string) {
    this.client = algodClient[network];
  }

  async connect(): Promise<string> {
    try {
      const accounts = await this.wallet.connect({
        shouldSelectOneAccount: true,
      });
      return accounts[0].address;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async signTransaction(txn: any): Promise<string> {
    try {
      const signedTxn = await this.wallet.signTransaction(txn.toByte());
      return await this.client.sendRawTransaction(signedTxn.blob).do();
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}

export class AlgoSigner implements IWallet {
  //@ts-ignore
  public readonly wallet = window.AlgoSigner;
  private readonly client: Algodv2;

  constructor(network: string) {
    this.client = algodClient[network];
  }

  async connect(): Promise<string> {
    try {
      if (typeof this.wallet === "undefined") {
        window.open(
          "https://chrome.google.com/webstore/detail/algosigner/kmmolakhbgdlpkjkcjkebenjheonagdm",
          "_blank",
        );
        return "";
      } else {
        await this.wallet.connect({ ledger: "TestNet" });
        const accounts = await this.wallet.accounts({ ledger: "TestNet" });
        return accounts[0].address;
      }
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  async signTransaction(txn: any): Promise<string> {
    try {
      const signedTxn = await this.wallet.signTxn(txn.toByte());
      return await this.client.sendRawTransaction(signedTxn.blob).do();
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}

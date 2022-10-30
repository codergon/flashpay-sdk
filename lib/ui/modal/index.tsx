import "./index.scss";
import {
  WalletType,
  IResponseData,
  FlashpayModalsProps,
} from "../../interface";
import axiosJs from "axios";
import React, { useState } from "react";
import { MyAlgo, Pera } from "../../utils";
import { AXIOS_OPTIONS, URL } from "../../constants";
import FlashpayWalletConnectModal from "./FlaspayWalletConnectModal";
import FlashpayTxnSuccessModal from "./FlashpayTxnSuccessModal";
import FlashpayTxnFailedModal from "./FlashpayTxnFailedModal";
import FlashpayTxnProcessingModal from "./FlashpayTxnProcessingModal";

const FlashpayModals = ({
  payload,
  processKey,
  network,
  onCallback,
  createTransaction,
}: FlashpayModalsProps) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [modalType, setModalType] = useState("connect");

  const connectWallet = async (provider: string) => {
    let wallet;
    if (provider === WalletType.myAlgo) {
      wallet = new MyAlgo(network);
    } else if (provider === WalletType.pera) {
      wallet = new Pera(network);
    }

    if (wallet === undefined) return;
    setModalType("processing");

    try {
      const sender = await wallet.connect();
      const axios = axiosJs.create(AXIOS_OPTIONS);
      const response = await axios.post<IResponseData>(
        URL,
        { ...payload, sender },
        { headers: { "x-public-key": processKey } },
      );

      const txn = await createTransaction(response.data.data);
      const txnId = await wallet.signTransaction(txn);
      setModalType("success");
      onCallback(txnId);
    } catch (err: any) {
      console.log(err);
      setModalType("failed");
      if (err.message)
        setErrorMsg(
          err.message.includes("overspend")
            ? "Insufficient balance"
            : err.message.toLowerCase().includes("window not loaded")
            ? "Check your network connection"
            : err.message,
        );
      onCallback("", err);
    }
  };

  return (
    <>
      <div className="flashpay-modal-overlay" />
      {modalType === "connect" ? (
        <FlashpayWalletConnectModal
          data={payload}
          connectWallet={connectWallet}
        />
      ) : modalType === "processing" ? (
        <FlashpayTxnProcessingModal />
      ) : modalType === "success" ? (
        <FlashpayTxnSuccessModal />
      ) : modalType === "failed" ? (
        <FlashpayTxnFailedModal errorMsg={errorMsg} />
      ) : null}
    </>
  );
};

export default FlashpayModals;

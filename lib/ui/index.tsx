import React from "react";
import { Transaction } from "algosdk";
import FlashpayModals from "./modal";
import { callable, Data, IRequestData } from "../interface";
import { AxiosInstance } from "axios";
import ReactDOM from "react-dom/client";
import { FLASHPAY_CONNECT_MODAL_ID } from "../constants";
import { createModalWrapperOnDOM } from "./utils/FlashpayModalsUtils";

const openFlashpayModal = (
  payload: IRequestData,
  processKey: string,
  network: string,
  onCallback: callable,
  createTransaction: (data: Data) => Promise<Transaction>,
  axiosJs: AxiosInstance
) => {
  const root = ReactDOM.createRoot(
    createModalWrapperOnDOM(FLASHPAY_CONNECT_MODAL_ID)
  );
  root.render(
    <FlashpayModals
      {...{
        payload,
        processKey,
        network,
        onCallback,
        createTransaction,
        axiosJs
      }}
    />
  );
};

export default openFlashpayModal;

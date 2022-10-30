import "./index.scss";
import React from "react";
import Lottie from "react-lottie";
import Icons from "./components/Icons";
import animationData from "./lotties/Error.json";
import { closeModal } from "../utils/FlashpayModalsUtils";

const FlashpayTxnFailedModal = ({ errorMsg = "" }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="flashpay-modal">
        <div className="flashpay-modal__header">
          <div className="main">
            <Icons.Logo />
            <button className="closemodal-x" onClick={closeModal}>
              <Icons.Close />
            </button>
          </div>
        </div>

        <div className="modal_content">
          <div className="modal_illustration">
            <Lottie options={defaultOptions} />
          </div>
          <div className="modal_description">
            <p className="main">Transaction Failed</p>
            {errorMsg && <p className="sub">{errorMsg}</p>}
          </div>

          {/* <div className="modal-btns">
            <button className="cancel_button" onClick={closeModal}>
              Close
            </button>
            <button className="continue_button" onClick={closeModal}>
              Retry
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FlashpayTxnFailedModal;

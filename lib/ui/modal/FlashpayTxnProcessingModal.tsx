import "./index.scss";
import React from "react";
import Lottie from "react-lottie";
import Icons from "./components/Icons";
import animationData from "./lotties/Loading.json";

const FlashpayTxnProcessingModal = () => {
  const defaultOptions = {
    loop: true,
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
          </div>
        </div>

        <div className="modal_content">
          <div className="modal_illustration">
            <Lottie options={defaultOptions} />
          </div>
          <div className="modal_description">
            <p className="main">Processing your transaction</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashpayTxnProcessingModal;

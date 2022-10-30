import { FLASHPAY_CONNECT_MODAL_ID } from "../../constants";

const createModalWrapperOnDOM = (modalId: string) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", modalId);
  document.body.appendChild(wrapper);
  return wrapper;
};

function removeModalWrapperFromDOM(modalId: string) {
  const wrapper = document.getElementById(modalId);
  if (wrapper) {
    wrapper.remove();
  }
}

const closeModal = () => {
  removeModalWrapperFromDOM(FLASHPAY_CONNECT_MODAL_ID);
};

export { createModalWrapperOnDOM, closeModal, removeModalWrapperFromDOM };

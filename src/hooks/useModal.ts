import { useDispatch } from "react-redux";
import { openModal, closeModal, ModalProps } from "../redux/slice/modalSlice";

const useModal = () => {
  const dispatch = useDispatch();

  const showModal = (modalProps: ModalProps) => {
    dispatch(openModal(modalProps));
  };

  const hideModal = () => {
    dispatch(closeModal());
  };

  // Predefined modal helpers
  const showInfoModal = (
    title: string,
    content: React.ReactNode | string,
    confirmText = "OK"
  ) => {
    showModal({
      title,
      content,
      confirmText,
      type: "info",
    });
  };

  const showSuccessModal = (
    title: string,
    content: React.ReactNode | string,
    confirmText = "OK"
  ) => {
    showModal({
      title,
      content,
      confirmText,
      type: "success",
    });
  };

  const showErrorModal = (
    title: string,
    content: React.ReactNode | string,
    confirmText = "OK"
  ) => {
    showModal({
      title,
      content,
      confirmText,
      type: "error",
    });
  };

  const showWarningModal = (
    title: string,
    content: React.ReactNode | string,
    confirmText = "OK"
  ) => {
    showModal({
      title,
      content,
      confirmText,
      type: "warning",
    });
  };

  const showConfirmModal = (
    title: string,
    content: React.ReactNode | string,
    onConfirm: () => void,
    confirmText = "Confirm",
    cancelText = "Cancel"
  ) => {
    showModal({
      title,
      content,
      confirmText,
      cancelText,
      onConfirm,
      type: "confirm",
    });
  };

  const showCustomModal = (
    customComponent: React.ReactNode,
    size?: ModalProps["size"]
  ) => {
    showModal({
      customComponent,
      size,
      type: "custom",
    });
  };

  return {
    showModal,
    hideModal,
    showInfoModal,
    showSuccessModal,
    showErrorModal,
    showWarningModal,
    showConfirmModal,
    showCustomModal,
  };
};

export default useModal;

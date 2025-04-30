import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalProps {
  title?: string;
  content?: React.ReactNode | string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  type?: "info" | "success" | "warning" | "error" | "confirm" | "custom";
  customComponent?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

interface ModalState {
  isOpen: boolean;
  modalProps: ModalProps;
}

const initialState: ModalState = {
  isOpen: false,
  modalProps: {
    title: "",
    content: "",
    confirmText: "Confirm",
    cancelText: "Cancel",
    type: "info",
    size: "md",
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalProps>) => {
      state.isOpen = true;
      state.modalProps = { ...initialState.modalProps, ...action.payload };
    },
    closeModal: (state) => {
      state.isOpen = false;
      // Keep the modal props in state to prevent UI flicker during close animation
    },
    resetModal: () => {
      return initialState;
    },
  },
});

export const { openModal, closeModal, resetModal } = modalSlice.actions;
export default modalSlice.reducer;

import toast from "react-hot-toast";
import { AnimatePresence } from "motion/react";

import CustomToast from "../ui/common/CustomToast";
import { CustomToastType } from "../utils/types";

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

interface ToastOptions {
  duration?: number;
  position?: ToastPosition;
}
export function useToast() {
  function showToast(
    type: CustomToastType,
    message: string,
    options: ToastOptions = {},
  ) {
    toast.custom(
      (t) => (
        <AnimatePresence>
          {t.visible && <CustomToast type={type} message={message} />}
        </AnimatePresence>
      ),
      {
        duration: options.duration ?? 3000,
        position: options.position ?? "top-center",
      },
    );
  }

  return { showToast };
}

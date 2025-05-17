import toast from "react-hot-toast";
import { AnimatePresence } from "motion/react";

import CustomToast from "../ui/common/CustomToast";

export function useToast() {
  function showToast(type, message, options = {}) {
    toast.custom(
      (t) => (
        <AnimatePresence>
          {t.visible && <CustomToast type={type} message={message} />}
        </AnimatePresence>
      ),
      {
        duration: options.duration || 3000,
        position: options.position || "top-center",
      },
    );
  }

  return { showToast };
}

import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { motion } from "motion/react";

const iconBaseStyles = "size-6 block shrink-0";

const types = {
  success: "bg-emerald-100 dark:bg-emerald-900",
  failed: "bg-rose-100 dark:bg-rose-900",
  warning: "bg-amber-100 dark:bg-amber-900",
};

const toastVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

function CustomToast({ type, message }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={toastVariants}
      className={`${types[type]} flex items-center justify-center gap-4 rounded-2xl p-4 text-sm text-slate-900 sm:py-8 sm:text-base dark:text-slate-100`}
    >
      {type === "success" && (
        <CheckCircle className={`${iconBaseStyles} text-emerald-500`} />
      )}
      {type === "failed" && (
        <XCircle className={`${iconBaseStyles} text-rose-500`} />
      )}
      {type === "warning" && (
        <AlertTriangle className={`${iconBaseStyles} text-amber-500`} />
      )}

      <span>{message}</span>
    </motion.div>
  );
}

export default CustomToast;

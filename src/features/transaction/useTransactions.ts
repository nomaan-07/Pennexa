import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../services/apiTransaction";
import { useToast } from "../../hooks/useToast";
import { Transaction } from "../../utils/types";

export function useTransactions() {
  const { showToast } = useToast();

  const {
    data: transactions,
    isLoading,
    error,
  } = useQuery<Transaction[], Error>({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  useEffect(() => {
    if (error) {
      showToast("failed", "Transactions could not be loaded.");
      console.error(error);
    }
  }, [error, showToast]);

  return { transactions, isLoading };
}

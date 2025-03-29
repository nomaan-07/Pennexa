import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../services/apiTransaction";
import { useToast } from "../../hooks/useToast";

export function useTransactions() {
  const { showToast } = useToast();

  const { data: transactions, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
    onError: (err) => {
      showToast("failed", "Transactions could not be loaded.");
      console.error(err);
    },
  });

  return { transactions, isLoading };
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTransaction as createTransactionApi } from "../../services/apiTransaction";
import { useToast } from "../../hooks/useToast";

export function useCreateTransaction() {
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const { mutate: createTransaction, isPending: isCreating } = useMutation({
    mutationFn: createTransactionApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
    },
    onError: (err) => {
      showToast("failed", "Transaction could not be created.");
      console.error(err);
    },
  });

  return { createTransaction, isCreating };
}

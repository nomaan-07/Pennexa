import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTransaction as deleteTransactionApi } from "../../services/apiTransaction";
import { useToast } from "../../hooks/useToast";

export function useDeleteTransaction() {
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: deleteTransaction, isPending: isDeleting } = useMutation({
    mutationFn: deleteTransactionApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
    },
    onError: (err) => {
      showToast("failed", "Transaction could not be deleted.");
      console.error(err);
    },
  });

  return { deleteTransaction, isDeleting };
}

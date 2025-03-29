import { updateTransaction as updateTransactionApi } from "../../services/apiTransaction";
import { useToast } from "../../hooks/useToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateTransaction() {
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: updateTransaction, isPending: isUpdating } = useMutation({
    mutationFn: updateTransactionApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: (err) => {
      showToast("failed", "Transaction could not be updated.");
      console.error(err);
    },
  });

  return { updateTransaction, isUpdating };
}

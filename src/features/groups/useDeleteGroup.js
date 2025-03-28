import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGroup as deleteGroupApi } from "../../services/apiGroups";
import { useToast } from "../../hooks/useToast";

export function useDeleteGroup() {
  const { showToast } = useToast();

  const queryClient = useQueryClient();

  const { mutate: deleteGroup, isPending: isDeleting } = useMutation({
    mutationFn: deleteGroupApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["groups"],
      });
    },
    onError: (err) => {
      showToast("failed", "Group could not be deleted.");
      console.error(err);
    },
  });

  return { deleteGroup, isDeleting };
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGroup as deleteGroupApi } from "../../services/apiGroups";

export function useDeleteGroup() {
  const queryClient = useQueryClient();

  const { mutate: deleteGroup, isLoading: isDeleting } = useMutation({
    mutationFn: deleteGroupApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["groups"],
      });
    },
    onError: (err) => {
      console.error(err.message);
    },
  });

  return { deleteGroup, isDeleting };
}

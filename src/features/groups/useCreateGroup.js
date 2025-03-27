import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGroup as createGroupApi } from "../../services/apiGroups";

export function useCreateGroup() {
  const queryClient = useQueryClient();

  const { mutate: createGroup, isLoading: isCreatingGroup } = useMutation({
    mutationFn: createGroupApi,
    // TODO: onSuccess: using Toast
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["groups"],
      });
    },
    onError: (err) => {
      console.error(err.message);
    },
  });

  return { createGroup, isCreatingGroup };
}

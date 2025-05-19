import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGroup as createGroupApi } from "../../services/apiGroups";
import { useToast } from "../../hooks/useToast";

export function useCreateGroup() {
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: createGroup, isPending: isCreatingGroup } = useMutation({
    mutationFn: createGroupApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["groups"],
      });
    },
    onError: (err) => {
      showToast("failed", "Group could not be created.");
      console.error(err);
    },
  });

  return { createGroup, isCreatingGroup };
}

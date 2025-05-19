import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import { useToast } from "../../hooks/useToast";

export function useUpdateUser() {
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
    },

    onError: (error) => {
      showToast("failed", "Update failed, try again!");
      console.error(error);
    },
  });

  return { updateUser, isUpdating };
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../../hooks/useToast";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";

export function useLogin() {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      queryClient.setQueriesData(["user"], data.user);
      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      showToast("failed", "Incorrect email or password.");
      console.log(err);
    },
  });

  return { login, isPending };
}

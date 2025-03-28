import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useToast } from "../../hooks/useToast";
import { useNavigate } from "react-router";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      if (err?.message.includes("already registered"))
        showToast(
          "failed",
          "This email is already registered. Please log in or use a different email.",
        );
      else showToast("failed", "Failed to sign up.");
      console.error(err);
    },
  });

  return { signup, isPending };
}

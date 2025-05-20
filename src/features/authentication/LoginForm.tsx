import { useForm } from "react-hook-form";

import FormRow from "../../ui/forms/FormRow";
import Input from "../../ui/forms/Input";
import Form from "../../ui/forms/Form";
import Button from "../../ui/buttons/Button";

import { emailValidation, passwordValidation } from "../../utils/validations";
import { useLogin } from "./useLogin";
import { useToast } from "../../hooks/useToast";

function LoginForm() {
  const { login, isPending } = useLogin();
  const { showToast } = useToast();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmit(data) {
    const user = {
      email: data.email,
      password: data.password,
    };

    login(user, {
      onSuccess: (data) => {
        showToast(
          "success",
          `Welcome back ${data.user.user_metadata.username}.`,
        );
      },
    });
  }

  return (
    <Form type="auth" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="text"
          register={register}
          field="email"
          id="email"
          validation={emailValidation}
        />
      </FormRow>
      <FormRow label="password" error={errors?.password?.message}>
        <Input
          type="password"
          register={register}
          field="password"
          id="password"
          validation={passwordValidation}
        />
      </FormRow>
      <Button disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </Button>
    </Form>
  );
}

export default LoginForm;

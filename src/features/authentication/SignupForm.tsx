import { useForm } from "react-hook-form";

import Form from "../../ui/forms/Form";
import FormRow from "../../ui/forms/FormRow";
import Input from "../../ui/forms/Input";
import Button from "../../ui/buttons/Button";

import {
  emailValidation,
  nameValidation,
  passwordValidation,
} from "../../utils/validations";
import { useSignup } from "./useSignup";
import { useToast } from "../../hooks/useToast";

function SignupForm() {
  const { signup, isPending } = useSignup();
  const { showToast } = useToast();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmit(data) {
    const newUser = {
      email: data.email,
      username: data.username,
      password: data.password,
    };

    signup(newUser, {
      onSuccess: () => showToast("success", "Welcome to Pennexa."),
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
      <FormRow label="Username" error={errors?.username?.message}>
        <Input
          type="text"
          register={register}
          field="username"
          id="username"
          validation={nameValidation()}
        />
      </FormRow>
      <FormRow label="Password" error={errors?.password?.message}>
        <Input
          type="password"
          register={register}
          field="password"
          id="password"
          validation={passwordValidation}
        />
      </FormRow>
      <Button disabled={isPending}>
        {isPending ? "Signing up..." : "Sign up"}
      </Button>
    </Form>
  );
}

export default SignupForm;

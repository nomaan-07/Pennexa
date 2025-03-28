import { useForm } from "react-hook-form";

import Form from "../ui/forms/Form";
import Heading from "../ui/layout/Heading";
import FormRow from "../ui/forms/FormRow";
import Input from "../ui/forms/Input";
import Logo from "../ui/navigation/Logo";
import Button from "../ui/buttons/Button";
import LoginLayout from "../ui/layout/LoginLayout";

import {
  emailValidation,
  nameValidation,
  passwordValidation,
} from "../utils/validations";
import { NavLink } from "react-router";

function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <LoginLayout>
      <Logo className="justify-center" />
      <Heading className="text-center">Signup to continue</Heading>
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
        <Button>Sign up</Button>
      </Form>
      <p className="text-xs sm:text-sm">
        Already have an account?{" "}
        <NavLink to="/login" className="text-emerald-500 md:cursor-pointer">
          Login
        </NavLink>
      </p>
    </LoginLayout>
  );
}

export default Signup;

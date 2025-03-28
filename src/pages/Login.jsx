import { useForm } from "react-hook-form";

import Form from "../ui/forms/Form";
import Heading from "../ui/layout/Heading";
import FormRow from "../ui/forms/FormRow";
import Input from "../ui/forms/Input";
import Logo from "../ui/navigation/Logo";
import Button from "../ui/buttons/Button";
import LoginLayout from "../ui/layout/LoginLayout";

import { emailValidation, passwordValidation } from "../utils/validations";
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
      <Heading className="text-center">Log in to your account</Heading>
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
        <Button>Login</Button>
      </Form>
      <p className="text-xs sm:text-sm">
        Don't have an account?{" "}
        <NavLink to="/signup" className="text-emerald-500 md:cursor-pointer">
          Signup
        </NavLink>
      </p>
    </LoginLayout>
  );
}

export default Signup;

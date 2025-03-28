import { useForm } from "react-hook-form";

import Form from "../../ui/forms/Form";
import Input from "../../ui/forms/Input";
import FormRow from "../../ui/forms/FormRow";
import Buttons from "../../ui/buttons/Buttons";
import Button from "../../ui/buttons/Button";

function UpdateUserPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const requiredValidation = { required: "This field is required" };
  const passwordValidation = {
    ...requiredValidation,
    minLength: {
      value: 8,
      message: "password must be at least 8 characters",
    },
  };

  const passwordConfirmValidation = {
    ...requiredValidation,
    validate: (value) =>
      getValues().password === value || "Passwords don't match",
  };

  function onSubmit(data) {
    console.log("Form Data:", data);
  }

  function handleReset(e) {
    e.preventDefault();
    reset();
  }

  return (
    <Form type="regular" onSubmit={handleSubmit(onSubmit)}>
      <FormRow type="grid">
        <FormRow
          type="gridItem"
          label="New password"
          error={errors?.password?.message}
        >
          <Input
            type="password"
            register={register}
            field="password"
            id="password"
            validation={passwordValidation}
          />
        </FormRow>
        <FormRow
          type="gridItem"
          label="Confirm password"
          error={errors?.passwordConfirm?.message}
        >
          <Input
            type="password"
            register={register}
            field="passwordConfirm"
            id="passwordConfirm"
            validation={passwordConfirmValidation}
          />
        </FormRow>
      </FormRow>
      <Buttons>
        <Button type="secondary" onClick={handleReset}>
          Cancel
        </Button>
        <Button>Update Password</Button>
      </Buttons>
    </Form>
  );
}

export default UpdateUserPasswordForm;

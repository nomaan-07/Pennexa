import { MouseEvent } from "react";
import { useForm } from "react-hook-form";

import Form from "../../ui/forms/Form";
import Input from "../../ui/forms/Input";
import FormRow from "../../ui/forms/FormRow";
import Buttons from "../../ui/buttons/Buttons";
import Button from "../../ui/buttons/Button";

import {
  passwordConfirmValidation,
  passwordValidation,
} from "../../utils/validations";
import { useToast } from "../../hooks/useToast";
import { useUpdateUser } from "./useUpdateUser";

type FormValues = {
  password: string;
  passwordConfirm: string;
};

function UpdateUserPasswordForm() {
  const { updateUser, isUpdating } = useUpdateUser();
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  function onSubmit(data: FormValues) {
    updateUser(
      { password: data.password },
      {
        onSuccess: () => {
          showToast("success", "Your Password successfully Changed.");
          reset();
        },
      },
    );
  }

  function handleReset(e: MouseEvent<HTMLButtonElement>) {
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
          <Input<FormValues>
            type="password"
            register={register}
            field="password"
            id="password"
            validation={passwordValidation()}
          />
        </FormRow>
        <FormRow
          type="gridItem"
          label="Confirm password"
          error={errors?.passwordConfirm?.message}
        >
          <Input<FormValues>
            type="password"
            register={register}
            field="passwordConfirm"
            id="passwordConfirm"
            validation={passwordConfirmValidation()}
          />
        </FormRow>
      </FormRow>
      <Buttons type="account">
        <Button type="secondary" onClick={handleReset} disabled={isUpdating}>
          Cancel
        </Button>
        <Button disabled={isUpdating}>
          {isUpdating ? "Changing..." : "Change Password"}
        </Button>
      </Buttons>
    </Form>
  );
}

export default UpdateUserPasswordForm;

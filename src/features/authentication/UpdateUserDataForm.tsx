import { MouseEvent } from "react";
import { useForm } from "react-hook-form";

import Form from "../../ui/forms/Form";
import Input from "../../ui/forms/Input";
import FormRow from "../../ui/forms/FormRow";
import AvatarUpload from "../../ui/forms/AvatarUpload";
import Buttons from "../../ui/buttons/Buttons";
import Button from "../../ui/buttons/Button";

import { nameValidation } from "../../utils/validations";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import { useToast } from "../../hooks/useToast";
import { Avatar } from "../../utils/types";

interface FormValues {
  avatar: Avatar;
  email?: string;
  username: string;
}

function UpdateUserDataForm() {
  const { user } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();
  const { showToast } = useToast();

  const avatar = user?.user_metadata?.avatar || null;
  const username = user?.user_metadata?.username || "";
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      email: user?.email || "",
      username,
      avatar,
    },
  });

  function onSubmit(data: FormValues) {
    const updatedUser: FormValues = {
      username: data.username,
      avatar: data.avatar instanceof File ? data.avatar : null,
    };

    updateUser(updatedUser, {
      onSuccess: () => {
        showToast("success", "Your data successfully updated.");
        reset({ avatar });
      },
    });
  }

  function handleReset(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    reset({ avatar, username });
  }

  return (
    <Form type="regular" onSubmit={handleSubmit(onSubmit)}>
      <FormRow type="grid">
        <FormRow type="gridItem" label="Email address">
          <Input type="email" disabled={true} placeholder={user?.email || ""} />
        </FormRow>
        <FormRow
          type="gridItem"
          label="Username"
          error={errors?.username?.message}
        >
          <Input<FormValues>
            type="text"
            register={register}
            field="username"
            id="username"
            validation={nameValidation()}
          />
        </FormRow>
      </FormRow>
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <AvatarUpload setValue={setValue} avatar={watch().avatar} />
        <Buttons type="account">
          <Button type="secondary" onClick={handleReset} disabled={isUpdating}>
            Cancel
          </Button>
          <Button disabled={isUpdating}>
            {isUpdating ? "Updating..." : "Update Account"}
          </Button>
        </Buttons>
      </div>
    </Form>
  );
}

export default UpdateUserDataForm;

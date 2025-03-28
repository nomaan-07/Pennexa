import { useForm } from "react-hook-form";

import Form from "../../ui/forms/Form";
import Input from "../../ui/forms/Input";
import FormRow from "../../ui/forms/FormRow";
import AvatarUpload from "../../ui/forms/AvatarUpload";
import Buttons from "../../ui/buttons/Buttons";
import Button from "../../ui/buttons/Button";
import Spinner from "../../ui/common/Spinner";

import { nameValidation } from "../../utils/validations";
import { useUser } from "../authentication/useUser";
import { useEffect } from "react";

function UpdateUserDataForm() {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      avatar: "",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        email: user?.email || "",
        username: user?.user_metadata?.username || "",
        avatar: user?.user_metadata?.avatar || "",
      });
    }
  }, [user, reset]);

  function onSubmit(data) {
    console.log("Form Data:", data);
  }

  function handleReset(e) {
    e.preventDefault();
    reset();
  }

  return (
    <Form type="regular" onSubmit={handleSubmit(onSubmit)}>
      <AvatarUpload setValue={setValue} previewFile={watch().avatar} />
      <FormRow type="grid">
        <FormRow type="gridItem" label="Email address">
          <Input type="email" disabled={true} placeholder={user?.email || ""} />
        </FormRow>
        <FormRow
          type="gridItem"
          label="Username"
          error={errors?.username?.message}
        >
          <Input
            type="text"
            register={register}
            field="username"
            id="username"
            validation={nameValidation()}
          />
        </FormRow>
      </FormRow>
      <Buttons>
        <Button type="secondary" onClick={handleReset}>
          Cancel
        </Button>
        <Button>Update Account</Button>
      </Buttons>
    </Form>
  );
}

export default UpdateUserDataForm;

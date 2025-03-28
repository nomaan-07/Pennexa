import { useForm } from "react-hook-form";

import Form from "../../ui/forms/Form";
import Input from "../../ui/forms/Input";
import FormRow from "../../ui/forms/FormRow";
import AvatarUpload from "../../ui/forms/AvatarUpload";
import Buttons from "../../ui/buttons/Buttons";
import Button from "../../ui/buttons/Button";

function UpdateUserDataForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm();

  const usernameValidation = {
    minLength: {
      value: 4,
      message: "Username must be at least 4 characters",
    },
    maxLength: {
      value: 10,
      message: "Username must not exceed 10 characters",
    },

    validate: (value) => value.trim() !== "" || "This field cannot be empty",
  };

  const emailValidation = {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Invalid email format",
    },
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
      <AvatarUpload setValue={setValue} previewFile={watch().avatar} />
      <FormRow type="grid">
        <FormRow
          type="gridItem"
          label="Email address"
          error={errors?.email?.message}
        >
          <Input
            type="text"
            register={register}
            field="email"
            id="email"
            validation={emailValidation}
          />
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
            validation={usernameValidation}
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

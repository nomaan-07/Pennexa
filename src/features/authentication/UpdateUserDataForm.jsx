import { useForm } from "react-hook-form";

import Form from "../../ui/forms/Form";
import Input from "../../ui/forms/Input";
import FormRow from "../../ui/forms/FormRow";
import AvatarUpload from "../../ui/forms/AvatarUpload";
import Buttons from "../../ui/buttons/Buttons";
import Button from "../../ui/buttons/Button";

import { emailValidation, nameValidation } from "../../utils/validations";

function UpdateUserDataForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm();

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

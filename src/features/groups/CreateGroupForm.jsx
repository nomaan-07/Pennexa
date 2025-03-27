import icons from "../../data/icons";
import Button from "../../ui/buttons/Button";
import Modal from "../../ui/common/Modal";
import Form from "../../ui/forms/Form";
import FormRow from "../../ui/forms/FormRow";
import FormChips from "../../ui/forms/FormChips";
import FormChip from "../../ui/forms/FormChip";
import Input from "../../ui/forms/Input";

import { colors } from "../../data/colors";
import { useForm } from "react-hook-form";
import { useCreateGroup } from "./useCreateGroup";

function CreateGroupForm({ isOpen, onClose }) {
  const { isCreatingGroup, createGroup } = useCreateGroup();

  const { register, handleSubmit, formState, watch, reset } = useForm();

  const { errors } = formState;

  const groupValidation = { required: "You must choose a group" };
  const colorValidation = { required: "You must choose a Color" };
  const iconValidation = { required: "You must choose a Icon" };
  const nameValidation = {
    required: "This field is required",
    minLength: {
      value: 3,
      message: "Name must be at least 3 characters",
    },
    maxLength: {
      value: 10,
      message: "Name must not exceed 10 characters",
    },
    validate: (value) => value.trim() !== "" || "This field cannot be empty",
  };

  function handleClose() {
    reset();
    onClose();
  }

  function onSubmit(data) {
    const newGroup = {
      type: data.group,
      icon: data.icon,
      name: data.name.toLowerCase(),
      colors: {
        textColor: `text-${data.color}-600`,
        bgColor100: `bg-${data.color}-100`,
        bgColor600: `bg-${data.color}-600`,
      },
    };
    createGroup(newGroup, {
      onSuccess: handleClose,
    });
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Form onSubmit={handleSubmit(onSubmit)} disabled={isCreatingGroup}>
        <FormRow error={errors?.group?.message}>
          <p>Choose the Group:</p>
          <FormChips>
            <FormChip
              field="group"
              activeClasses="bg-rose-50 text-rose-500"
              name="expense"
              iconName="LucideTrendingDown"
              watch={watch}
              register={register}
              validation={groupValidation}
            />
            <FormChip
              field="group"
              activeClasses="bg-emerald-50 text-emerald-500"
              name="income"
              iconName="LucideTrendingUp"
              watch={watch}
              register={register}
              validation={groupValidation}
            />
          </FormChips>
        </FormRow>
        <FormRow label="Enter category name:" error={errors?.name?.message}>
          <Input
            id="name"
            type="text"
            register={register}
            field="name"
            validation={nameValidation}
          />
        </FormRow>
        <FormRow error={errors?.icon?.message}>
          <p>Choose an Icon:</p>
          <FormChips>
            {icons.map((item) => (
              <div key={item.name}>
                <label
                  htmlFor={item.name}
                  className={`transition-colors *:size-7 ${watch().icon === item.name ? "text-emerald-500" : "text-slate-500 md:cursor-pointer md:hover:text-slate-900 dark:text-slate-300 dark:md:hover:text-slate-200"}`}
                >
                  {item.icon}
                </label>
                <input
                  type="radio"
                  id={item.name}
                  value={item.name}
                  className="hidden"
                  {...register("icon", iconValidation)}
                />
              </div>
            ))}
          </FormChips>
        </FormRow>
        <FormRow error={errors?.color?.message}>
          <p>Choose a Color:</p>
          <FormChips>
            {colors.map((color) => (
              <div
                key={color.name}
                className={`size-8 ${watch().color === color.name ? "brightness-110" : "p-0.5"} `}
              >
                <label
                  htmlFor={color.name}
                  className={`block size-full rounded-full md:cursor-pointer ${color.bgColor600}`}
                ></label>
                <input
                  type="radio"
                  id={color.name}
                  value={color.name}
                  className="hidden"
                  {...register("color", colorValidation)}
                />
              </div>
            ))}
          </FormChips>
        </FormRow>
        <Button>{isCreatingGroup ? "Creating..." : "Add Category"}</Button>
      </Form>
    </Modal>
  );
}

export default CreateGroupForm;

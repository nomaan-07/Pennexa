import icons from "../../data/icons";
import Button from "../../ui/buttons/Button";
import Modal from "../../ui/common/Modal";
import Form from "../../ui/forms/Form";
import FormRow from "../../ui/forms/FormRow";
import FormChips from "../../ui/forms/FormChips";
import FormChip from "../../ui/forms/FormChip";
import Input from "../../ui/forms/Input";
import GroupFormIcon from "../../ui/forms/GroupFormIcon";

import { colors } from "../../data/colors";
import { useForm } from "react-hook-form";
import { useCreateGroup } from "./useCreateGroup";
import { useToast } from "../../hooks/useToast";
import GroupFormColor from "../../ui/forms/GroupFormColor";

function CreateGroupForm({ isOpen, onClose, incomeCount, expenseCount }) {
  const { isCreatingGroup, createGroup } = useCreateGroup();
  const { register, handleSubmit, formState, watch, reset } = useForm();
  const { showToast } = useToast();

  const watchedValues = watch();
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
    if (watchedValues.group === "income" && incomeCount >= 10) {
      showToast("failed", "You can't add more than 10 income sources.");
      return;
    }

    if (watchedValues.group === "expense" && expenseCount >= 10) {
      showToast("failed", "You can't add more than 10 expense categories.");
      return;
    }

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
      onSuccess: () => {
        showToast(
          "success",
          `new ${watchedValues.group} group successfully created.`,
        );
        handleClose();
      },
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
              isActive={watchedValues.group === "expense"}
              register={register}
              validation={groupValidation}
            />
            <FormChip
              field="group"
              activeClasses="bg-emerald-50 text-emerald-500"
              name="income"
              iconName="LucideTrendingUp"
              isActive={watchedValues.group === "income"}
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
            {icons.map((icon) => (
              <GroupFormIcon
                icon={icon}
                iconValidation={iconValidation}
                register={register}
                isActive={watchedValues.icon === icon.name}
                key={icon.name}
              />
            ))}
          </FormChips>
        </FormRow>
        <FormRow error={errors?.color?.message}>
          <p>Choose a Color:</p>
          <FormChips>
            {colors.map((color) => (
              <GroupFormColor
                color={color}
                isActive={watchedValues.color === color.name}
                register={register}
                colorValidation={colorValidation}
                key={color.name}
              />
            ))}
          </FormChips>
        </FormRow>
        <Button>{isCreatingGroup ? "Creating..." : "Add Category"}</Button>
      </Form>
    </Modal>
  );
}

export default CreateGroupForm;

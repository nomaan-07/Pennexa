import icons from "../../data/icons";
import Button from "../../ui/buttons/Button";
import Modal from "../../ui/common/Modal";
import Form from "../../ui/forms/Form";
import FormRow from "../../ui/forms/FormRow";
import FormChips from "../../ui/forms/FormChips";
import FormChip from "../../ui/forms/FormChip";
import Input from "../../ui/forms/Input";
import GroupFormIcon from "../../ui/forms/GroupFormIcon";
import GroupFormColor from "../../ui/forms/GroupFormColor";

import { colors } from "../../data/colors";
import { useForm } from "react-hook-form";
import { useCreateGroup } from "./useCreateGroup";
import { useToast } from "../../hooks/useToast";
import { selectValidation, nameValidation } from "../../utils/validations";
import { ClickHandler, TransactionType } from "../../utils/types";

interface CreateGroupFormProps {
  isOpen?: boolean;
  onClose: ClickHandler;
  incomeCount: number;
  expenseCount: number;
}

type FormValues = {
  color: string;
  group: TransactionType;
  icon: string;
  name: string;
};

type NewGroup = {
  type: TransactionType;
  icon: string;
  name: string;
  colors: {
    textColor: `text-${string}-600`;
    bgColor100: `bg-${string}-100`;
    bgColor600: `bg-${string}-600`;
  };
};

function CreateGroupForm({
  isOpen,
  onClose,
  incomeCount,
  expenseCount,
}: CreateGroupFormProps) {
  const { isCreatingGroup, createGroup } = useCreateGroup();
  const { register, handleSubmit, formState, watch, reset } =
    useForm<FormValues>();
  const { showToast } = useToast();

  const watchedValues = watch();
  const { errors } = formState;

  function handleClose() {
    reset();
    onClose();
  }

  function onSubmit(data: FormValues) {
    if (watchedValues.group === "income" && incomeCount >= 10) {
      showToast("failed", "You can't add more than 10 income sources.");
      return;
    }

    if (watchedValues.group === "expense" && expenseCount >= 10) {
      showToast("failed", "You can't add more than 10 expense categories.");
      return;
    }

    const newGroup: NewGroup = {
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow error={errors?.group?.message}>
          <p>Choose the Group:</p>
          <FormChips>
            <FormChip<FormValues>
              field="group"
              activeClasses="bg-rose-50 text-rose-500"
              name="expense"
              iconName="LucideTrendingDown"
              isActive={watchedValues.group === "expense"}
              register={register}
              validation={selectValidation("group")}
            />
            <FormChip<FormValues>
              field="group"
              activeClasses="bg-emerald-50 text-emerald-500"
              name="income"
              iconName="LucideTrendingUp"
              isActive={watchedValues.group === "income"}
              register={register}
              validation={selectValidation("group")}
            />
          </FormChips>
        </FormRow>
        <FormRow label="Enter category name:" error={errors?.name?.message}>
          <Input<FormValues>
            id="name"
            type="text"
            register={register}
            field="name"
            validation={nameValidation("name", 3)}
          />
        </FormRow>
        <FormRow error={errors?.icon?.message}>
          <p>Choose an Icon:</p>
          <FormChips>
            {icons.map((icon) => (
              <GroupFormIcon<FormValues>
                icon={icon}
                iconValidation={selectValidation("icon")}
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
              <GroupFormColor<FormValues>
                color={color}
                isActive={watchedValues.color === color.name}
                register={register}
                colorValidation={selectValidation("color")}
                key={color.name}
              />
            ))}
          </FormChips>
        </FormRow>
        <Button disabled={isCreatingGroup}>
          {isCreatingGroup ? "Creating..." : "Add Category"}
        </Button>
      </Form>
    </Modal>
  );
}

export default CreateGroupForm;

import { useForm } from "react-hook-form";

import Button from "../../ui/buttons/Button";
import Form from "../../ui/forms/Form";
import FormChips from "../../ui/forms/FormChips";
import FormRow from "../../ui/forms/FormRow";
import Input from "../../ui/forms/Input";
import Textarea from "../../ui/forms/Textarea";
import Modal from "../../ui/common/Modal";
import FormChip from "../../ui/forms/FormChip";

import { expenseGroups, incomeGroups } from "../../data/data-groups";

function CreateTransactionForm({ isOpen, onClose, transactionToEdit = {} }) {
  const { id: editId, ...editedValues } = transactionToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, formState, watch, reset } = useForm({
    defaultValues: isEditSession
      ? { ...editedValues, date: editedValues.date.toISOString().split("T")[0] }
      : {},
  });

  const { errors } = formState;

  const categories = (
    watch().type === "expense" || editedValues.transactionType === "expense"
      ? expenseGroups
      : incomeGroups
  ).slice(0, 10);

  const typeValidation = { required: "You must choose a transaction type" };
  const categoryValidation = { required: "You must choose a category" };
  const requiredValidation = { required: "This field is required" };
  const numberValidation = {
    ...requiredValidation,
    validate: (value) => Number(value) > 0 || "Enter a valid number",
  };
  const descriptionValidation = {
    ...requiredValidation,
    validate: (value) => value.trim() !== "" || "This field cannot be empty",
  };

  function onSubmit(data) {
    console.log(data);
  }

  function handleCancel() {
    reset();
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={handleCancel}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {!isEditSession && (
          <FormRow error={errors?.type?.message}>
            <p>Choose the transaction:</p>
            <FormChips>
              <FormChip
                field="type"
                activeClasses="bg-rose-50 text-rose-500"
                name="expense"
                iconName="LucideTrendingDown"
                watch={watch}
                register={register}
                validation={typeValidation}
              />
              <FormChip
                field="type"
                activeClasses="bg-emerald-50 text-emerald-500"
                name="income"
                iconName="LucideTrendingUp"
                watch={watch}
                register={register}
                validation={typeValidation}
              />
            </FormChips>
          </FormRow>
        )}

        {(watch().type || isEditSession) && (
          <FormRow error={errors?.category?.message}>
            <p>Choose the Category:</p>
            <FormChips>
              {categories.map((group) => (
                <FormChip
                  field="category"
                  activeClasses={`${group.textColor} ${group.bgColor100}`}
                  name={group.name}
                  iconName={group.icon}
                  watch={watch}
                  register={register}
                  key={group.name}
                  validation={categoryValidation}
                />
              ))}
            </FormChips>
          </FormRow>
        )}
        <FormRow type="grid">
          <FormRow
            type="gridItem"
            label="Enter the date:"
            error={errors?.date?.message}
          >
            <Input
              id="date"
              type="date"
              register={register}
              field="date"
              validation={requiredValidation}
            />
          </FormRow>
          <FormRow
            type="gridItem"
            label="Enter Amount ($):"
            error={errors?.amount?.message}
          >
            <Input
              id="amount"
              type="number"
              register={register}
              field="amount"
              validation={numberValidation}
            />
          </FormRow>
        </FormRow>
        <FormRow label="Description:" error={errors?.description?.message}>
          <Textarea
            id="description"
            register={register}
            field="description"
            validation={descriptionValidation}
          />
        </FormRow>
        <Button>
          {isEditSession ? "Edit transaction" : "Add transaction"}
        </Button>
      </Form>
    </Modal>
  );
}

export default CreateTransactionForm;

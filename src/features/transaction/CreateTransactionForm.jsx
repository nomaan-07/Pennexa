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
import {
  nameValidation,
  numberValidation,
  requiredValidation,
  selectValidation,
} from "../../utils/validations";

function CreateTransactionForm({ isOpen, onClose, transactionToEdit = {} }) {
  const { id: editId, ...editedValues } = transactionToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, formState, watch, reset } = useForm({
    defaultValues: isEditSession
      ? { ...editedValues, date: editedValues.date.toISOString().split("T")[0] }
      : {},
  });

  const watchedValues = watch();

  const { errors } = formState;

  const categories = (
    watchedValues.type === "expense" ||
    editedValues.transactionType === "expense"
      ? expenseGroups
      : incomeGroups
  ).slice(0, 10);

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
                isActive={watchedValues.type}
                register={register}
                validation={selectValidation("transaction type")}
              />
              <FormChip
                field="type"
                activeClasses="bg-emerald-50 text-emerald-500"
                name="income"
                iconName="LucideTrendingUp"
                isActive={watchedValues.type}
                register={register}
                validation={selectValidation("transaction type")}
              />
            </FormChips>
          </FormRow>
        )}

        {(watchedValues.type || isEditSession) && (
          <FormRow error={errors?.category?.message}>
            <p>Choose the Category:</p>
            <FormChips>
              {categories.map((group) => (
                <FormChip
                  field="category"
                  activeClasses={`${group.textColor} ${group.bgColor100}`}
                  name={group.name}
                  iconName={group.icon}
                  isActive={watchedValues.type}
                  register={register}
                  key={group.name}
                  validation={selectValidation("category")}
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
            validation={nameValidation("description", 0, 75)}
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

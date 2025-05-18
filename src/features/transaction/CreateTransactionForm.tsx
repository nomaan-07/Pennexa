import { useForm } from "react-hook-form";

import Button from "../../ui/buttons/Button";
import Form from "../../ui/forms/Form";
import FormChips from "../../ui/forms/FormChips";
import FormRow from "../../ui/forms/FormRow";
import Input from "../../ui/forms/Input";
import Textarea from "../../ui/forms/Textarea";
import Modal from "../../ui/common/Modal";
import FormChip from "../../ui/forms/FormChip";

import { useGroups } from "../groups/useGroups";
import { useCreateTransaction } from "./useCreateTransaction";
import { useToast } from "../../hooks/useToast";
import {
  nameValidation,
  numberValidation,
  requiredValidation,
  selectValidation,
} from "../../utils/validations";
import { useUpdateTransaction } from "./useUpdateTransaction";
import { ClickHandler, Transaction } from "../../utils/types";

interface ChangeFieldDefault extends Omit<Transaction, "id"> {
  transactionType: string;
}

interface ChangedFieldCurrent extends Omit<ChangeFieldDefault, "category"> {
  category: string;
}

type ChangedFields = Partial<
  Record<
    keyof ChangedFieldCurrent,
    ChangedFieldCurrent[keyof ChangedFieldCurrent]
  >
>;

function getChangedFields(
  currentData: ChangedFieldCurrent,
  defaultData: ChangeFieldDefault,
): ChangedFields {
  const changedFields: ChangedFields = {};

  (Object.keys(currentData) as (keyof ChangedFieldCurrent)[]).forEach((key) => {
    if (key === "category") {
      if (currentData.category !== defaultData.category.name) {
        changedFields.category = currentData.category;
      }
    } else {
      const currentValue = currentData[key];
      const defaultValue = defaultData[key as keyof ChangeFieldDefault];

      if (
        currentValue !== defaultValue &&
        currentValue !== null &&
        currentValue !== undefined
      ) {
        changedFields[key] = currentValue;
      }
    }
  });

  return changedFields;
}

interface TransactionToUpdate extends Transaction {
  transactionType: string;
}

interface CreateTransactionFormProps {
  isOpen?: boolean;
  onClose: ClickHandler;
  transactionToUpdate: TransactionToUpdate;
}

function CreateTransactionForm({
  isOpen,
  onClose,
  transactionToUpdate = {} as TransactionToUpdate,
}: CreateTransactionFormProps) {
  const { showToast } = useToast();
  const { groups, isGroupsLoading } = useGroups();
  const { createTransaction, isCreating } = useCreateTransaction();
  const { updateTransaction, isUpdating } = useUpdateTransaction();

  const { id: editId, ...editedValues } = transactionToUpdate;
  const isUpdateSession = Boolean(editId);
  const transactionGroups = groups ?? [];

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<ChangedFieldCurrent>({
    defaultValues: isUpdateSession
      ? {
          ...editedValues,
          date: editedValues.date.split("T")[0],
          category: editedValues.category.name,
        }
      : {},
  });

  const watchedValues = watch();

  if (isGroupsLoading) return null;

  const expenseGroups = transactionGroups.filter(
    (group) => group.type === "expense",
  );
  const incomeGroups = transactionGroups.filter(
    (group) => group.type === "income",
  );

  const categories =
    watchedValues.type === "expense" ||
    editedValues.transactionType === "expense"
      ? expenseGroups
      : incomeGroups;

  function onSubmit(data: ChangedFieldCurrent) {
    const chosenGroup = transactionGroups.find(
      (group) => group.name === data.category,
    );

    if (!chosenGroup) return;

    if (isUpdateSession) {
      const changedFields = getChangedFields(
        { ...data, date: `${data.date}T00:00:00` },
        editedValues,
      );

      if (Object.keys(changedFields).length === 0) {
        showToast("warning", "No changes detected");
        return;
      }

      const updatedTransaction = {
        ...changedFields,
        category: changedFields.category
          ? {
              name: data.category,
              textColor: chosenGroup.colors.textColor,
              bgColor100: chosenGroup.colors.bgColor100,
              bgColor600: chosenGroup.colors.bgColor600,
              icon: chosenGroup.icon,
            }
          : undefined,
      };

      Object.keys(updatedTransaction).forEach((key) => {
        const typedKey = key as keyof typeof updatedTransaction;
        if (updatedTransaction[typedKey] === undefined) {
          delete updatedTransaction[typedKey];
        }
      });

      updateTransaction(
        {
          id: editId,
          updatedTransaction: updatedTransaction as Partial<
            Omit<Transaction, "id">
          >,
        },
        {
          onSuccess: () => {
            showToast("success", "Transaction updated successfully");
            reset();
            onClose();
          },
        },
      );

      return;
    }

    const category = {
      name: data.category,
      textColor: chosenGroup.colors.textColor,
      bgColor100: chosenGroup.colors.bgColor100,
      bgColor600: chosenGroup.colors.bgColor600,
      icon: chosenGroup.icon,
    };

    const newTransaction = {
      category,
      type: data.type,
      amount: data.amount,
      description: data.description,
      date: data.date,
    };

    createTransaction(newTransaction, {
      onSuccess: () => {
        showToast("success", "Transaction created successfully");
        reset();
        onClose();
      },
    });
  }

  function handleCancel() {
    reset();
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={handleCancel}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {!isUpdateSession && (
          <FormRow error={errors?.type?.message}>
            <p>Choose the transaction:</p>
            <FormChips>
              <FormChip<ChangedFieldCurrent>
                field="type"
                activeClasses="bg-rose-50 text-rose-500"
                name="expense"
                iconName="LucideTrendingDown"
                isActive={watchedValues.type === "expense"}
                register={register}
                validation={selectValidation("transaction type")}
              />
              <FormChip<ChangedFieldCurrent>
                field="type"
                activeClasses="bg-emerald-50 text-emerald-500"
                name="income"
                iconName="LucideTrendingUp"
                isActive={watchedValues.type === "income"}
                register={register}
                validation={selectValidation("transaction type")}
              />
            </FormChips>
          </FormRow>
        )}

        {(watchedValues.type || isUpdateSession) && (
          <FormRow error={errors?.category?.message}>
            <p>Choose the Category:</p>
            <FormChips>
              {categories.map((group) => (
                <FormChip<ChangedFieldCurrent>
                  field="category"
                  activeClasses={`${group.colors.textColor} ${group.colors.bgColor100}`}
                  name={group.name}
                  iconName={group.icon}
                  isActive={watchedValues.category === group.name}
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
              validation={requiredValidation<ChangedFieldCurrent>()}
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
              validation={numberValidation<ChangedFieldCurrent>()}
            />
          </FormRow>
        </FormRow>
        <FormRow label="Description:" error={errors?.description?.message}>
          <Textarea<ChangedFieldCurrent>
            id="description"
            register={register}
            field="description"
            validation={nameValidation("description", 0, 75)}
          />
        </FormRow>
        <Button disabled={isCreating}>
          {isUpdateSession
            ? isUpdating
              ? "Updating..."
              : "Update transaction"
            : isCreating
              ? "Adding..."
              : "Add transaction"}
        </Button>
      </Form>
    </Modal>
  );
}

export default CreateTransactionForm;

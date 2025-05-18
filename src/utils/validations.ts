import { FieldValues, RegisterOptions } from "react-hook-form";

export const requiredValidation = <
  T extends FieldValues,
>(): RegisterOptions<T> => ({
  required: "This field is required",
});

export const nameValidation = <T extends FieldValues>(
  field = "username",
  minLength = 4,
  maxLength = 10,
): RegisterOptions<T> => ({
  ...requiredValidation<T>(),
  minLength: {
    value: minLength,
    message: `${field} must be at least ${minLength} characters`,
  },
  maxLength: {
    value: maxLength,
    message: `${field} must not exceed ${maxLength} characters`,
  },
  validate: (value: string) =>
    value.trim() !== "" || "This field cannot be empty",
});

export const numberValidation = <
  T extends FieldValues,
>(): RegisterOptions<T> => ({
  ...requiredValidation<T>(),
  validate: (value: string) => Number(value) > 0 || "Enter a valid number",
});

export const emailValidation = <
  T extends FieldValues,
>(): RegisterOptions<T> => ({
  ...requiredValidation<T>(),
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: "Invalid email format",
  },
  valueAsDate: false,
  valueAsNumber: false,
});

export const passwordValidation = <
  T extends FieldValues,
>(): RegisterOptions<T> => ({
  ...requiredValidation<T>(),
  minLength: {
    value: 8,
    message: "password must be at least 8 characters",
  },
});

export const passwordConfirmValidation = <
  T extends FieldValues,
>(): RegisterOptions<T> => ({
  ...requiredValidation<T>(),
  validate: (value: string, allValues: Record<string, unknown>) =>
    (allValues["password"] as string) === value || "Passwords don't match",
});

export const selectValidation = <T extends FieldValues>(
  field: string,
): RegisterOptions<T> => ({
  required: `You must select the ${field}`,
});

export const requiredValidation = { required: "This field is required" };

export const nameValidation = (
  field = "username",
  minLength = 4,
  maxLength = 10,
) => ({
  ...requiredValidation,
  minLength: {
    value: minLength,
    message: `${field} must be at least ${minLength} characters`,
  },
  maxLength: {
    value: maxLength,
    message: `${field} must not exceed ${maxLength} characters`,
  },
  validate: (value) => value.trim() !== "" || "This field cannot be empty",
});

export const numberValidation = {
  ...requiredValidation,
  validate: (value) => Number(value) > 0 || "Enter a valid number",
};

export const emailValidation = {
  ...requiredValidation,
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: "Invalid email format",
  },
};

export const passwordValidation = {
  ...requiredValidation,
  minLength: {
    value: 8,
    message: "password must be at least 8 characters",
  },
};

export const passwordConfirmValidation = {
  ...requiredValidation,
  validate: (value, allValues) =>
    allValues["password"] === value || "Passwords don't match",
};

export const selectValidation = (field) => ({
  required: `You must select the ${field}`,
});

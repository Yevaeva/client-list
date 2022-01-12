import * as Yup from "yup";

// patterns
export const phonePattern = /^(([+374]{4}|[0]{1}))?([1-9]{2})(\d{6})$/;
// messages
export const validationMessages = {
  required: "Required field!",
  emailFormat: "Invalid email address!",
  phoneFormat: "Invalid phone number!",
};

//Yup schemas
export const clientAddValidationSchema = Yup.object().shape({
  name: Yup.string().required(validationMessages.required),
  phone: Yup.string()
    .matches(phonePattern, validationMessages.phoneFormat)
    .required(validationMessages.required),
  email: Yup.string()
    .email(validationMessages.emailFormat)
    .required(validationMessages.required),
});

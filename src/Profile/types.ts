import * as Yup from "yup";

export const schemValidation = Yup.object({
    name: Yup.string().min(3).max(255).required(),
    email: Yup.string().email()
});
import * as Yup from "yup";

export const initialValues = {
    email: "",
    password: ""
};
  
export const schema = Yup.object().shape({
  email: Yup.string().required("O usuário é obrigatorio"),
  password: Yup.string().required("A senha é obrigatoria")
});

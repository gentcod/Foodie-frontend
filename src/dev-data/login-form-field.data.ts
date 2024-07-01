import { InputFieldProps } from "../components/form/form.component";

export const inputFields: InputFieldProps[] = [
   {
      id: 'sign-in-email',
      label: 'Email',
      type: 'email',
      name: 'email'
   },
   {
      id: 'sign-in-password',
      label: 'Password',
      type: 'password',
      name: 'password'
   },
];

export const defaultFormFields = {
   email: '',
   password: '',
}
import { InputFieldProps } from "../components/form/form.component";

export const inputFields: InputFieldProps[] = [
   {
      id: 'sign-up-username',
      label: 'Username',
      type: 'text',
      name: 'username'
   },
   {
      id: 'sign-up-email',
      label: 'Email',
      type: 'email',
      name: 'email'
   },
   {
      id: 'sign-up-firstname',
      label: 'First Name',
      type: 'text',
      name: 'firstName'
   },
   {
      id: 'sign-up-lastname',
      label: 'Last Name',
      type: 'text',
      name: 'lastName'
   },
   {
      id: 'sign-up-middlename',
      label: 'Middle Name',
      type: 'text',
      name: 'middleName'
   },
   {
      id: 'sign-up-password',
      label: 'Password',
      type: 'password',
      name: 'password'
   },
   {
      id: 'sign-up-confirm-password',
      label: 'Confirm Password',
      type: 'password',
      name: 'confirmPassword'
   },
];

export const defaultFormFields = {
   username: '',
   firstName: '',
   lastName: '',
   middleName: '',
   email: '',
   password: '',
   confirmPassword: '',
}
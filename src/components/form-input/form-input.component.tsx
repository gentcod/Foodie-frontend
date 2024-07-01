import { InputHTMLAttributes, FC } from 'react';
import {FormInputContainer, FormInputContent, FormInputLabel} from './form-input.styles'

type FormInputProps = { 
   label: string;
   changeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({label, value, type, name, id, changeFunc}) => {
   return (
      <FormInputContainer>
         <FormInputContent 
            id={id} 
            type={type} required 
            name={name} 
            value={value}
            onChange={changeFunc}
         />
         <FormInputLabel mod={Boolean(value && typeof value === 'string')} htmlFor={id}>
            {label}
         </FormInputLabel>
      </FormInputContainer>
   )
}

export default FormInput;
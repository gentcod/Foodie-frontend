import { ChangeEvent, FormEvent } from "react";
import FormInput from "../form-input/form-input.component";
import Heading from "../heading/heading.component";
import { Button, HeaderContainer, InputContainer, LoginForm } from "./form.style";

export type InputFieldProps = {
   id: string;
   label: string;
   type: string;
   name: string;
}

type FormProps = {
   heading: string;
   formSubmitFunc: (e: FormEvent<HTMLFormElement>) => void;
   inputChangeFunc: (e: ChangeEvent<HTMLInputElement>) => void;
   inputData: InputFieldProps[];
   buttonText: string;
   formData: {};
}

const Form = ({heading, formSubmitFunc, inputChangeFunc, inputData, buttonText, formData}: FormProps) => {
  return (
    <LoginForm>
      <HeaderContainer>
        <Heading text={heading} isCustom={true} />
      </HeaderContainer>

      <InputContainer onSubmit={formSubmitFunc}>
        {inputData.map(data => (
         <FormInput
            key={data.id}
            label={data.label}
            type={data.type}
            changeFunc={inputChangeFunc}
            value={formData[`${data.name}`]}
            name={data.name}
            id={data.id}
         />
        ))}
        <Button>{buttonText}</Button>
      </InputContainer>
    </LoginForm>
  );
};

export default Form

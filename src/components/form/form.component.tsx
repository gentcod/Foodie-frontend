import { ChangeEvent, FormEvent } from "react";
import FormInput from "../form-input/form-input.component";
import Heading from "../heading/heading.component";
import { Button, ButtonContainer, HeaderContainer, InputContainer, LoginForm } from "./form.style";
import Spinner from "../spinner/spinner.component";

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
   authIsLoading: boolean;
}

const Form = ({heading, formSubmitFunc, inputChangeFunc, inputData, buttonText, formData, authIsLoading}: FormProps) => {
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
        <ButtonContainer>
          <Button>{buttonText}</Button>
          {authIsLoading ? <Spinner size={2.5}/> : <></>}
        </ButtonContainer>
      </InputContainer>
    </LoginForm>
  );
};

export default Form

import styled, { css } from 'styled-components';

type FormInputLabelProps = {
   mod: boolean;
}

const modLabel = css`
   font-size: 1.3rem;
   top: -1rem;
   color:white;
`

export const FormInputLabel = styled.label<FormInputLabelProps>`
   font-size: 1.2rem;
   font-weight: 300;
   color: #4b4949;
   position: absolute;
   top: 2rem;
   cursor: pointer;
   margin-left: .5rem;

   transition: all .8s;

   ${({mod}) => mod && modLabel}
`
export const FormInputContainer = styled.div`
   width: 90%;
   display: flex;
   flex-direction: row;
   position: relative;
`
export const FormInputContent = styled.input`
   outline: none;
   border: none;
   height: 3rem;
   margin-top: 1rem;
   margin-bottom: 2rem;
   display: block;
   border-bottom: 1px solid #222;
   border-radius: 2px;
   width: 100%;
   padding: 1rem;

   &:focus {
      border-bottom: 3px solid #e6be8a;
      box-shadow: 0 .5rem 1rem rgba(5, 5, 5, .8)
   }

   &:focus ~ ${FormInputLabel} {
      ${modLabel}
   }
`
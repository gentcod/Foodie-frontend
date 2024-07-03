import styled from "styled-components";

export const HeaderContainer = styled.div`
   margin-bottom: 5rem;
`;

export const LoginForm = styled.div`
   height: 100%;
   padding: 1rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

export const InputContainer = styled.form`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 3rem;
`;

export const ButtonContainer = styled.div`
   height: 5rem;
   padding .5rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   row-gap: 1rem;
   margin-top: 1rem;
`;

export const Button = styled.button`
   border: none;
   cursor: pointer;
   padding .5rem 3rem;
   border-radius: 2px;
   font-weight: 700;
   transition: .8s ease;

   &:active {
      transform: translateY(1rem);
   }

   &:hover {
    background-color: #e6be8a;
    color: #777;
   }
`;
import styled from "styled-components";

type SearchBarProp = {
   left: number;
};

export const SearchBarContainer = styled.div<SearchBarProp>`
   display: in-line block;
   box-shadow: 0 .5rem 1rem rgba(2, 2, 2, .2);
   padding: 1rem;
   position: absolute;
   left: ${({left}) => (left/10) - 10}rem;
   top: 12rem;
`

export const SearchBar = styled.input`
   border: none;
   outline: none;
   height: 3.5rem;
   width: 30rem;
   border-radius: 1.2rem;
   padding: 1.5rem;
   background-color: #eee;
   color: #999;
   margin-bottom: 1rem;
   transition: .8s all ease;

   &:focus {
      border-bottom: 2px solid #ed6b2e;
      color: #333;
      font-weight: 500;

      ::placeholder {
         color: #333;
         font-weight: 700;
      }
   }
`
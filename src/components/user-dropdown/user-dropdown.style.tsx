import { Link } from "react-router-dom";
import styled from "styled-components";

type DropdownProp = {
   left: number;
};

export const DropdownContainer = styled.div<DropdownProp>`
   height: auto;
   width: 25rem;
   background-color: #555;
   padding: 1rem;
   border-radius: 1rem;
   box-shadow: 0 .5rem 1rem rgba(2, 2, 2, .8);
   position: absolute;
   left: ${({left}) => (left/10) - 20}rem;
   top: 13rem;
   z-index: 10;

   display: flex;
   flex-direction: column;
`;

export const UserDetailsContainer = styled.div`
   height: 5rem;
   background-color: #e6be8a;
   border-radius: 3rem;

   display: flex;
   column-gap: 2rem;
   justify-content: center;
   align-items: center;
`;

export const UserPicture = styled.img`
   height: 4rem;
   width: 4rem;
   border-radius: 50%;
   overflow: hidden;
   object-fit: cover;
`;

export const UserName = styled.h5`
   color: #444;
   font-size: 1.4rem;
   letter-spacing: 1px;
`;

export const UserModList = styled.div`
   padding: 1rem;
   // margin-left: 2rem;

   display: flex;
   flex-direction: column;
   row-gap: .5rem;
   justify-content: center;
   align-items: center;
`;

export const UserModListItem = styled(Link)`
   background-color: #424242;
   width: 90%;
   padding: .5rem 1rem;
   padding-left: 1rem;
   text-transform: capitalize;
   font-weight: 500;
   letter-spacing: 1px;
   color: white;
   border-radius: .5rem;

   &:hover {
      background-color: #e6be8a;
   }
`;

export const UserModListItemDiv = styled.div`
   background-color: #424242;
   width: 90%;
   padding: .5rem 1rem;
   padding-left: 1rem;
   text-transform: capitalize;
   font-weight: 500;
   letter-spacing: 1px;
   color: white;
   border-radius: .5rem;

   &:hover {
      background-color: #e6be8a;
   }
`;
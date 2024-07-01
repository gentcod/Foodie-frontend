import styled, { css } from "styled-components";

type HeaderProp = {
   custom: boolean
}

const noMargin = css`
   margin-left: 0;
`

export const Header = styled.h2<HeaderProp>`
   font-weight: 300;
   font-size: 2rem;
   color: white;
   text-transform: uppercase;
   letter-spacing: .5rem;
   text-align: left;
   margin-left: 10rem;

   ${({custom}) => custom && noMargin};
`
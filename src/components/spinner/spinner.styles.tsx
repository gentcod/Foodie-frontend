import styled from "styled-components";

type SpinnerSizeProp = {
  size?: number;
}

export const SpinnerOverlay = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div<SpinnerSizeProp>`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #ed6b2e;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  width: ${({size}) => size}rem;
  height: ${({size}) => size}rem;
`;

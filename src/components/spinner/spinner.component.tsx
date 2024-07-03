import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

type SpinnerProps = {
   size?: number;
}

const Spinner = ({size}: SpinnerProps) => {
   return (
      <SpinnerOverlay>
         <SpinnerContainer size={size}/>
      </SpinnerOverlay>
   )
}

export default Spinner;
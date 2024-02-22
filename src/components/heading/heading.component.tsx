import { Header } from "./heading.style";

type HeadingProp = { 
   text: string;
}

const Heading = ({text}: HeadingProp) => {
   return (
      <>
         <Header>{text}</Header>
      </>
   )
}

export default Heading;
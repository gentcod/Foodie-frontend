import { Header } from "./heading.style";

type HeadingProp = { 
   text: string;
   isCustom?: boolean;
}

const Heading = ({text, isCustom}: HeadingProp) => {
   return (
      <>
         <Header custom={isCustom!}>{text}</Header>
      </>
   )
}

export default Heading;
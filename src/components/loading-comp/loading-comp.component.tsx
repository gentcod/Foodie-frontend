import Loading from "../loading/loading.component";
import {
  Container,
  ContainerContent,
  ContainerContentMid,
  ContainerContentShort,
  ContainerInnerLeft,
  ContainerInnerRight,
  LoadingContainer,
} from "./loading-comp.style";

const LoadingComp = () => {
  return (
    <Container>
      <LoadingContainer>
        <ContainerInnerLeft>
          <Loading />
        </ContainerInnerLeft>
        <ContainerInnerRight>
          <ContainerContentMid />
          <ContainerContentShort />
          <ContainerContent />
          <ContainerContentMid />
        </ContainerInnerRight>
      </LoadingContainer>
    </Container>
  );
};

export default LoadingComp;

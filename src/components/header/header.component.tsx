import { Container, HeaderImage, HeaderTitle } from './header.style';

const Header = () => {
   return (
      <Container to={'/'}>
         <HeaderImage />
         <HeaderTitle>Foodie</HeaderTitle>
      </Container>
   )
}

export default Header;
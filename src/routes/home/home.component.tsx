import Map from "../../components/map/map.component";

import {
  FeaturedContainer,
  FeaturedImage,
  FeaturedTitle,
  HomeContainer,
  WelcomeText,
  WelcomeContainer,
  ExternalLink,
} from "./home.style";
import RecipeCategoryContainer from "../../components/recipe-category-container/recipe-category-container.component";
import { HeaderImage } from "../../components/header/header.style";

const Home = () => {
  return (
    <HomeContainer>
      <FeaturedContainer>
        <FeaturedTitle>Featured recipes</FeaturedTitle>
        <FeaturedImage src="https://res.cloudinary.com/douvgvdla/image/upload/v1711645135/cld-sample-4.jpg" />
      </FeaturedContainer>
      <WelcomeContainer>
        <HeaderImage />
        <WelcomeText>
          Foodie is an iteration of { <ExternalLink to={'https://gentcod-foodie.netlify.app'}>Foodie-V1</ExternalLink>}. 
          It offers a collection of various recipes, allowing users to browse through different categories, 
          view detailed instructions, and find inspiration for cooking.
        </WelcomeText>
      </WelcomeContainer>
      <RecipeCategoryContainer />
      <Map />
    </HomeContainer>
  );
};

export default Home;

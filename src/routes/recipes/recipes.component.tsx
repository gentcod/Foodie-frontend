import { categoryData } from "../../dev-data/recipe-page-data";
import Heading from "../../components/heading/heading.component";

import {
  Container,
  FeaturedHeading,
  RecipeCategory,
  RecipeCategoryContent,
  RecipeCategoryItem,
  RecipeCategoryItemImage,
  RecipeCategoryItemName,
} from "./recipes.style";
import { Outlet } from "react-router-dom";
import FeaturedRecipes from "../../components/featured-recipes/featured-recipes.component";
import RecipeModal from "../../components/recipe-modal/recipe-modal.component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetRecipeByIdModal } from "../../store/recipe/recipe.action";

const Recipes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetRecipeByIdModal());
  }, [dispatch])

  return (
    <>
      <Container>
        {categoryData.map((data) => (
          <RecipeCategory key={data.id}>
            <Heading text={data.heading} />
            <RecipeCategoryContent>
              {data.contents.map((el) => (
                <RecipeCategoryItem key={el.id}>
                  <RecipeCategoryItemImage src={el.imgSrc} />
                  <RecipeCategoryItemName>{el.name}</RecipeCategoryItemName>
                </RecipeCategoryItem>
              ))}
            </RecipeCategoryContent>
          </RecipeCategory>
        ))}
      </Container>
      <FeaturedHeading text="Featured Recipes"/>
      <FeaturedRecipes/>
      <RecipeModal/>
      <Heading text="Other Recipes"/>
      <Outlet />
    </>
  );
};

export default Recipes;

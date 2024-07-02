import { useDispatch, useSelector } from "react-redux";
import { getBoundaries } from "../../utils/helper/dom-locate.helper.utils";
import {
  Content,
  ContentContainer,
  FavLoggedContent,
  FavLoggedOutContainer,
  FavoritesContainer,
  Heading,
} from "./favorites.style";
import { useEffect } from "react";
import { notify } from "../../utils/helper/toastify.helper.utils";
import {
  fetchFavoritesFailed,
  fetchFavoritesStart,
} from "../../store/favorites/favorites.action";
import { selectUserIsLoggedIn } from "../../store/user/user.selector";
import {
  selectFavErrorResponse,
  selectFavorites,
} from "../../store/favorites/favorites.selector";
import EntityBlocks from "../recipe-blocks/entity-blocks.component";

const FavoritesDropdown = ({ elementRef, buttonRef }) => {
  const dispatch = useDispatch();
  const boundary = getBoundaries(buttonRef);
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  dispatch(fetchFavoritesStart());

//   useEffect(() => {
//   }, [dispatch]);

  const favorites = useSelector(selectFavorites);

  const recipesEntityList = favorites.recipes
    ? favorites.recipes.map((data) => {
        return {
          id: data.id,
          imageSrc: data.imageSrc,
          name: data.name,
        };
      })
    : [];

  const restaurantsEntityList = favorites.restaurants
    ? favorites.restaurants.map((data) => {
        return {
          id: data.id,
          imageSrc: data.imageSrc,
          name: data.name,
        };
      })
    : [];

  const errResp = useSelector(selectFavErrorResponse);
  useEffect(() => {
    if (errResp) {
      notify(errResp.message!, "error");
      dispatch(fetchFavoritesFailed(null));
    }
  }, [errResp, dispatch]);

  return (
    <>
      {isLoggedIn ? (
        <FavoritesContainer ref={elementRef} left={boundary?.left}>
          <Content>
            <ContentContainer>
              <Heading>
                Totoal Favorite Recipes: {favorites.totalFavRecipes}
              </Heading>
              {recipesEntityList.length > 0 ? (
                <EntityBlocks entity="recipe" entityList={recipesEntityList} />
              ) : (
                <></>
              )}
            </ContentContainer>
            <ContentContainer>
              <Heading>
                Totoal Favorite Restaurants: {favorites.totalFavRestaurants}
              </Heading>
              {restaurantsEntityList.length > 0 ? (
                <EntityBlocks
                  entity="recipe"
                  entityList={restaurantsEntityList}
                />
              ) : (
                <></>
              )}
            </ContentContainer>
          </Content>
        </FavoritesContainer>
      ) : (
        <FavLoggedOutContainer ref={elementRef} left={boundary?.left}>
          <FavLoggedContent>
            <Heading>Login or Register to add favorites.</Heading>
          </FavLoggedContent>
        </FavLoggedOutContainer>
      )}
    </>
  );
};

export default FavoritesDropdown;

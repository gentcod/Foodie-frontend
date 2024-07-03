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
  refreshFavStatesStart,
  removeRecipeFromFavoritesStart,
  removeRestaurantFromFavoritesStart,
} from "../../store/favorites/favorites.action";
import { selectUserIsLoggedIn } from "../../store/user/user.selector";
import {
  selectFavErrorResponse,
  selectFavorites,
  selectFavoritesIsLoading,
  selectRemoveFavRecipeErrResp,
  selectRemoveFavRecipeResp,
  selectRemoveFavRestaurantErrResp,
  selectRemoveFavRestaurantResp,
} from "../../store/favorites/favorites.selector";
import EntityBlocks from "../entity-blocks/entity-blocks.component";

const FavoritesDropdown = ({ elementRef, buttonRef }) => {
  const dispatch = useDispatch();
  const boundary = getBoundaries(buttonRef);
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const favorites = useSelector(selectFavorites);
  
  useEffect(() => {
    if (isLoggedIn) 
      dispatch(fetchFavoritesStart());
  }, [isLoggedIn, dispatch]);

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
  
  // Remove from Favorites
  const handleDeleteRec = (recipeId: number) => {
    dispatch(removeRecipeFromFavoritesStart(recipeId));
    return;
  };

  const handleDeleteRes = (restaurantId: number) => {
    dispatch(removeRestaurantFromFavoritesStart(restaurantId));
    return;
  };

  // Handle Success Response
  const removeFavRecResp = useSelector(selectRemoveFavRecipeResp);
  const removeFavResResp = useSelector(selectRemoveFavRestaurantResp);
  useEffect(() => {
    if (removeFavRecResp) {
      notify(removeFavRecResp!, "success");
      dispatch(fetchFavoritesStart());
      dispatch(refreshFavStatesStart());
      return;
    }
    if (removeFavResResp) {
      notify(removeFavResResp!, "success");
      dispatch(fetchFavoritesStart());
      dispatch(refreshFavStatesStart());
      return;
    }
  }, [removeFavRecResp, removeFavResResp, isLoggedIn, dispatch]);

  // Handle Error Response
  const removeFavRecErrResp = useSelector(selectRemoveFavRecipeErrResp);
  const removeFavResErrResp = useSelector(selectRemoveFavRestaurantErrResp);
  useEffect(() => {
    if (removeFavRecErrResp) {
      notify(removeFavRecErrResp.message!, "error");
      dispatch(refreshFavStatesStart());
      return;
    }
    if (removeFavResErrResp) {
      notify(removeFavResErrResp.message!, "error");
      dispatch(refreshFavStatesStart());
      return;
    }
  }, [removeFavRecErrResp, removeFavResErrResp, isLoggedIn, dispatch]);

  const favoritesLoading = useSelector(selectFavoritesIsLoading);
  const deletableRec = {
    isdeletable: true,
    handleDeleteFunc: handleDeleteRec,
  };

  const deletableRes = {
    isdeletable: true,
    handleDeleteFunc: handleDeleteRes,
  };

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
                <EntityBlocks
                contentLoading={favoritesLoading}
                entityType="recipe" 
                entityList={recipesEntityList}
                deletable={deletableRec}
                 />
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
                  contentLoading={favoritesLoading}
                  entityType="recipe"
                  entityList={restaurantsEntityList}
                  deletable={deletableRes}
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

// TODO: Use for adding Favorites
  // Add to Favorites
  // const addFavRecipeResp = useSelector(selectAddFavRecipeResp);
  // const addFavResResp = useSelector(selectAddFavRestaurantResp);
  // useEffect(() => {
  //   if (addFavRecipeResp) {
  //     notify(addFavRecipeResp!, "success");
  //     dispatch(refreshFavoritesStart());
  //     return;
  //   }
  //   if (addFavResResp) {
  //     notify(addFavResResp!, "success");
  //     dispatch(refreshFavoritesStart());
  //     return;
  //   }
  // }, [addFavRecipeResp, addFavResResp, dispatch]);

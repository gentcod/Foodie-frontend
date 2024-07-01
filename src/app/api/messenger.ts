import axios, { AxiosError, AxiosResponse } from "axios";
import { PaginatedResponse } from "../models/pagination";
import { LoginDto, SignUpDto } from "../dtos/user";
import { RatingDto } from "../dtos/rating";

const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(async response => {
   if (process.env.NODE_ENV === 'development') await sleep();
   const pagination = response.headers['pagination'];
   if (pagination) {
      response.data = new PaginatedResponse(response.data, JSON.parse(pagination));
      return response;
   }
   return response;
}, (error: AxiosError) => {
   const { data, status } = error.response as AxiosResponse;
   switch (status) {
      case 400:
         if (data.errors) {
            const modelStateErrors: string[] = [];
            for (const key in data.errors) {
               if (data.erros[key]) modelStateErrors.push(data.errors[key])
            }

            throw modelStateErrors.flat();
         }
         console.error(data.title)
         break;
   }

   return Promise.reject(error.response);
});

const request = {
   get: (url: string, params?: URLSearchParams) => axios.get(url, {params}).then(responseBody),
   authget: (url: string, accessToken: string, params?: URLSearchParams) => axios.get(url,
      {
         params,
         headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
         },
      }
   ).then(responseBody),
   post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
   authpost: (url: string, body: {}, accessToken: string) => axios.post(url, body, 
      {
         headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
         },
      }
   ).then(responseBody),
   put: (url: string, body: {}) => axios.put(url, body, ).then(responseBody),
   authdelete: (url: string, accessToken: string) => axios.delete(url,
      {
         headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
         },
      }
   ).then(responseBody),
   delete: (url: string) => axios.delete(url).then(responseBody),
};

const Recipes = {
   list: (params?: URLSearchParams) => request.get('recipes',params),
   getRecipeById: (recipeId: number) => request.get(`recipes/${recipeId}`),
   listFeatured: () => request.get('recipes/featured'),
};

const Restaurant = {
   list: (params?: URLSearchParams) => request.get('restaurants', params),
   getRestaurantById: (resaturantId: number) => request.get(`restaurants/${resaturantId}`),
};

const Rating = {
   getRecipesRatings: () => request.get('recipes/ratings/'),
   getRecipeRating: (recipeId: number) => request.get(`recipes/ratings/${recipeId}`),
   getRestaurantsRatings: () => request.get('restaurants/ratings/'),
   getRestarantRating: (resaturantId: number) => request.get(`restaurants/ratings/${resaturantId}`),
   addRecipeRating: (recipeId: number, ratingBody: RatingDto) => 
      request.authpost(`recipes/ratings/add/${recipeId}`, {
         ratingNum: ratingBody.rating,
         comment: ratingBody.comment,
      },
      ratingBody.accessToken
   ),
   addRestaurantRating: (resaturantId: number, ratingBody: RatingDto) => 
      request.authpost(`restaurants/atings/add/${resaturantId}`, {
         ratingNum: ratingBody.rating,
         comment: ratingBody.comment,
      },
      ratingBody.accessToken
   ),
   removeRecipeRating: (accessToken: string, recipeId: number) => 
      request.authdelete(`recipes/ratings/remove/${recipeId}`, accessToken),
   removeRestaurantRating: (accessToken: string, resaturantId: number) => 
      request.authdelete(`restaurants/ratings/remove/${resaturantId}`, accessToken),
};

const Bookmarks = {
   list: (accessToken: string) => request.authget('bookmarks', accessToken),
   addBookMark: (accessToken: string, recipeId: number) => request.authpost(`bookmarks/add/${recipeId}`, {}, accessToken),
   deleteBookMark: (accessToken: string, recipeId: number) => request.authdelete(`bookmarks/add/${recipeId}`, accessToken)
};

const CookieBookmarks = {
   list: () => request.get('bookmarks'),
   addBookMark: (recipeId: number) => request.post(`bookmarks/add/${recipeId}`, {}),
   deleteBookMark: (recipeId: number) => request.delete(`bookmarks/add/${recipeId}`)
};

const Favorites = {
   list: (accessToken: string) => request.authget('favorite', accessToken),
   addFavoriteRecipe: (accessToken: string, recipeId: number) => 
      request.authpost(`favorites/add/recipe/${recipeId}`, {}, accessToken),
   removeFavoriteRecipe: (accessToken: string, recipeId: number) => 
      request.authdelete(`favorites/remove/recipe/${recipeId}`, accessToken),
   addFavoriteRestaurant: (accessToken: string, resaturantId: number) => 
      request.authpost(`favorites/add/restaurant/${resaturantId}`, {}, accessToken),
   removeFavoriteRestaurant: (accessToken: string, resaturantId: number) => 
      request.authdelete(`favorites/add/restaurant/${resaturantId}`, accessToken)
};

const User = {
   login: (loginCred: LoginDto) => request.post('account/login', {
      email: loginCred.email,
      password: loginCred.password
   }),
   signup: (signUpCred: SignUpDto) => request.post('account/signup', {
      username: signUpCred.username,
      firstName: signUpCred.firstName,
      lastName: signUpCred.lastName,
      email: signUpCred.email,
      password: signUpCred.password
   })
};

// getAxiosParams is an helper function that helps to convert a URLSearchParams.
export const getAxiosParams = (queryString: string = document.location.search) => {
   const params = new URLSearchParams(queryString);
   return params
};

const messenger = {
   Recipes,
   Restaurant,
   Rating,
   Bookmarks,
   CookieBookmarks,
   Favorites,
   User
}

export default messenger;
import { createSelector } from "reselect";
import { LoginuserState, SignupUserState } from "./user.reducer";
import { RootState } from "../store";

const selectLoginUserReducer = (state: RootState): LoginuserState => state.loginUser;
const selectSignupUserReducer = (state: RootState): SignupUserState => state.signupUser;

// Login Data
export const selectLoginCred = createSelector(
   [selectLoginUserReducer],
   (loginUserSlice) => loginUserSlice.loginCred
);

export const selectLoggedInUser = createSelector(
   [selectLoginUserReducer],
   (loginUserSlice) => loginUserSlice.userData.user
);

export const selectAccessToken = createSelector(
   [selectLoginUserReducer],
   (loginUserSlice) => loginUserSlice.userData!.accessToken
)

export const selectLoginIsLoading = createSelector(
   [selectLoginUserReducer],
   (loginUserSlice) => loginUserSlice.isLoading
);

export const selectUserIsLoggedIn = createSelector(
   [selectLoginUserReducer],
   (loginUserSlice) => loginUserSlice.isLoggedIn
);

export const selectLoginErrorResponse = createSelector(
   [selectLoginUserReducer],
   (loginUserSlice) => loginUserSlice.errorResponse
);

// Signup Data
export const selectSignupCred = createSelector(
   [selectSignupUserReducer],
   (signupUserSlice) => signupUserSlice.signupCred
)

export const selectSignupResponse = createSelector(
   [selectSignupUserReducer],
   (signupUserSlice) => signupUserSlice.signupResponse
)

export const selectSignupIsLoading = createSelector(
   [selectSignupUserReducer],
   (signupUserSlice) => signupUserSlice.isLoading
)

export const selectSignupErrorResponse = createSelector(
   [selectSignupUserReducer],
   (signupUserSlice) => signupUserSlice.errorResponse
)
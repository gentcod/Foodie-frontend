import { all, call, put, select, takeLatest } from "typed-redux-saga/macro";
import messenger from "../../app/api/messenger";
import { selectLoginCred, selectLoginErrorResponse, selectSignupCred, selectSignupErrorResponse } from "./user.selector";
import { loginUserFailed, loginUserSuccess, signUpUserFailed, signUpUserSuccess } from "./user.action";
import { LOGIN_USER_ACTION_TYPES, SIGNUP_USER_ACTION_TYPES } from "./user.types";

const { User } = messenger

// Login User
function* loginUserAsync() {
   try {
      const loginCred = yield* select(selectLoginCred);
      const userData = yield* call(User.login, loginCred!);
      yield* put(loginUserSuccess(userData));
   } catch (error) {
      const errorResponse = yield* select(selectLoginErrorResponse);
      yield* put(loginUserFailed(errorResponse!));
   }
};

function* onLoginUser() {
   yield* takeLatest(LOGIN_USER_ACTION_TYPES.LOGIN_USER_START, loginUserAsync);
};

// Signup User
function* signUserAsync() {
   try {
      const signupCred = yield* select(selectSignupCred);
      const userData = yield* call(User.signup, signupCred!);
      yield* put(signUpUserSuccess(userData));
   } catch (error) {
      const errorResponse = yield* select(selectSignupErrorResponse);
      yield* put(signUpUserFailed(errorResponse!));
   }
};

function* onSignUser() {
   yield* takeLatest(SIGNUP_USER_ACTION_TYPES.SIGNUP_USER_START, signUserAsync);
};

// User Saga
export function* userSaga() {
   yield* all([ call(onLoginUser), call(onSignUser)])
}
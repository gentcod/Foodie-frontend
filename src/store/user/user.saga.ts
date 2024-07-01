import { all, call, put, select, takeLatest } from "typed-redux-saga/macro";
import messenger from "../../app/api/messenger";
import { selectLoginCred, selectSignupCred } from "./user.selector";
import { loginUserFailed, loginUserSuccess, logoutUser, logoutUserFailed, logoutUserSuccess, signUpUserFailed, signUpUserSuccess } from "./user.action";
import { USER_ACTION_TYPES } from "./user.types";

const { User } = messenger

// Login User
function* loginUserAsync() {
   try {
      const loginCred = yield* select(selectLoginCred);
      const userData = yield* call(User.login, loginCred!);
      yield* put(loginUserSuccess(userData));
   } catch (error) {
      yield* put(loginUserFailed((error as any).data));
   }
};

function* onLoginUser() {
   yield* takeLatest(USER_ACTION_TYPES.LOGIN_USER_START, loginUserAsync);
};

// Signup User
function* signUserAsync() {
   try {
      const signupCred = yield* select(selectSignupCred);
      const userData = yield* call(User.signup, signupCred!);
      yield* put(signUpUserSuccess(userData));
   } catch (error) {
      yield* put(signUpUserFailed((error as any).data));
   }
};

function* onSignUser() {
   yield* takeLatest(USER_ACTION_TYPES.SIGNUP_USER_START, signUserAsync);
};

//Logout User
function* logoutUserAsync() {
   try {
      yield* call(logoutUser)
      yield* put(logoutUserSuccess());
   } catch (error) {
      yield* put(logoutUserFailed(error as Error));
   }
};

function* onLogoutUser() {
   yield* takeLatest(USER_ACTION_TYPES.LOGOUT_USER_START, logoutUserAsync);
};

// User Saga
export function* userSaga() {
   yield* all([ call(onLoginUser), call(onSignUser), call(onLogoutUser)])
}
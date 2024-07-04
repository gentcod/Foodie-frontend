import { LoginDto, SignUpDto } from "../../app/dtos/user";
import { ErrorResponseBody, ResponseBody } from "../../app/models/response";
import { User } from "../../app/models/user";
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

type LoginUserStart = ActionWithPayload<USER_ACTION_TYPES.LOGIN_USER_START, LoginDto>;
type LoginUserSuccess = ActionWithPayload<USER_ACTION_TYPES.LOGIN_USER_SUCCESS, ResponseBody<User>>;
type LoginUserFailed = ActionWithPayload<USER_ACTION_TYPES.LOGIN_USER_FAILED, ErrorResponseBody | null>;

type LogoutUser = Action<USER_ACTION_TYPES.LOGOUT_USER_START>;
type LogoutUserSuccess = Action<USER_ACTION_TYPES.LOGOUT_USER_SUCCESS>;
type LogoutUserFailed = ActionWithPayload<USER_ACTION_TYPES.LOGOUT_USER_FAILED, Error>;

type CheckSession = Action<USER_ACTION_TYPES.CHECK_SESSION_START>;
type CheckSessionSuccess = ActionWithPayload<USER_ACTION_TYPES.CHECK_SESSION_SUCCESS, ResponseBody<null> | null>;
type CheckSessionFailed = ActionWithPayload<USER_ACTION_TYPES.CHECK_SESSION_FAILED, Error>;

type SignUpUserStart = ActionWithPayload<USER_ACTION_TYPES.SIGNUP_USER_START, SignUpDto>;
type SignUpUserSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGNUP_USER_SUCCESS, ResponseBody<null> | null>;
type SignUpUserFailed = ActionWithPayload<USER_ACTION_TYPES.SIGNUP_USER_FAILED, ErrorResponseBody | null>;

export const loginUserStart = withMatcher((loginCred: LoginDto): LoginUserStart =>
   createAction(USER_ACTION_TYPES.LOGIN_USER_START, loginCred));
export const loginUserSuccess = withMatcher((user: ResponseBody<User>): LoginUserSuccess =>
   createAction(USER_ACTION_TYPES.LOGIN_USER_SUCCESS, user));
export const loginUserFailed = withMatcher((errorResponse: ErrorResponseBody | null): LoginUserFailed =>
   createAction(USER_ACTION_TYPES.LOGIN_USER_FAILED, errorResponse));

export const signUpUserStart = withMatcher((signupCred: SignUpDto): SignUpUserStart =>
   createAction(USER_ACTION_TYPES.SIGNUP_USER_START, signupCred));
export const signUpUserSuccess = withMatcher((resp: ResponseBody<null> | null): SignUpUserSuccess =>
   createAction(USER_ACTION_TYPES.SIGNUP_USER_SUCCESS, resp));
export const signUpUserFailed = withMatcher((errorResponse: ErrorResponseBody | null): SignUpUserFailed =>
   createAction(USER_ACTION_TYPES.SIGNUP_USER_FAILED, errorResponse));

export const logoutUser = withMatcher((): LogoutUser =>
   createAction(USER_ACTION_TYPES.LOGOUT_USER_START));
export const logoutUserSuccess = withMatcher((): LogoutUserSuccess =>
   createAction(USER_ACTION_TYPES.LOGOUT_USER_SUCCESS));
export const logoutUserFailed = withMatcher((error: Error): LogoutUserFailed =>
   createAction(USER_ACTION_TYPES.LOGOUT_USER_FAILED, error));

export const checkSession = withMatcher((): CheckSession =>
   createAction(USER_ACTION_TYPES.CHECK_SESSION_START));
export const checkSessionSuccess = withMatcher((resp: ResponseBody<null> | null): CheckSessionSuccess =>
   createAction(USER_ACTION_TYPES.CHECK_SESSION_SUCCESS, resp));
export const checkSessionFailed = withMatcher((error: Error): CheckSessionFailed =>
   createAction(USER_ACTION_TYPES.CHECK_SESSION_FAILED, error));

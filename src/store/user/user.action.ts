import { LoginDto, SignUpDto } from "../../app/dtos/user";
import { ErrorResponseBody, ResponseBody } from "../../app/models/response";
import { User } from "../../app/models/user";
import { ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utilities";
import { LOGIN_USER_ACTION_TYPES, SIGNUP_USER_ACTION_TYPES } from "./user.types";

type LoginUserStart = ActionWithPayload<LOGIN_USER_ACTION_TYPES.LOGIN_USER_START, LoginDto>;
type LoginUserSuccess = ActionWithPayload<LOGIN_USER_ACTION_TYPES.LOGIN_USER_SUCCESS, ResponseBody<User>>;
type LoginUserFailed = ActionWithPayload<LOGIN_USER_ACTION_TYPES.LOGIN_USER_FAILED, ErrorResponseBody>;

type SignUpUserStart = ActionWithPayload<SIGNUP_USER_ACTION_TYPES.SIGNUP_USER_START, SignUpDto>;
type SignUpUserSuccess = ActionWithPayload<SIGNUP_USER_ACTION_TYPES.SIGNUP_USER_SUCCESS, ResponseBody<null>>;
type SignUpUserFailed = ActionWithPayload<SIGNUP_USER_ACTION_TYPES.SIGNUP_USER_FAILED, ErrorResponseBody>;

export const loginUserStart = withMatcher((loginCred: LoginDto) : LoginUserStart => 
   createAction(LOGIN_USER_ACTION_TYPES.LOGIN_USER_START, loginCred));
export const loginUserSuccess = withMatcher((user: ResponseBody<User>): LoginUserSuccess => 
   createAction(LOGIN_USER_ACTION_TYPES.LOGIN_USER_SUCCESS, user));
export const loginUserFailed = withMatcher((errorResponse: ErrorResponseBody) : LoginUserFailed => 
   createAction(LOGIN_USER_ACTION_TYPES.LOGIN_USER_FAILED, errorResponse));

export const signUpUserStart = withMatcher((signupCred: SignUpDto) : SignUpUserStart => 
   createAction(SIGNUP_USER_ACTION_TYPES.SIGNUP_USER_START, signupCred));
export const signUpUserSuccess = withMatcher((resp: ResponseBody<null>): SignUpUserSuccess => 
   createAction(SIGNUP_USER_ACTION_TYPES.SIGNUP_USER_SUCCESS, resp));
export const signUpUserFailed = withMatcher((errorResponse: ErrorResponseBody) : SignUpUserFailed => 
   createAction(SIGNUP_USER_ACTION_TYPES.SIGNUP_USER_FAILED, errorResponse));

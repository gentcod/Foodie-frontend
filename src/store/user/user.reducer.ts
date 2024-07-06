import { AnyAction } from "redux-saga";
import { LoginDto, SignUpDto } from "../../app/dtos/user"
import { ErrorResponseBody, ResponseBody } from "../../app/models/response";
import { User } from "../../app/models/user";
import { checkSessionFailed, checkSessionSuccess, loginUserFailed, loginUserStart, loginUserSuccess, logoutUserFailed, logoutUserSuccess, signUpUserFailed, signUpUserStart, signUpUserSuccess } from "./user.action";

export type LoginuserState = {
   readonly loginCred?: LoginDto;
   readonly userData: User;
   readonly isLoading: boolean;
   readonly response?: ResponseBody<null>;
   readonly errorResponse: ErrorResponseBody | Error | null;
   readonly isLoggedIn: boolean;
};

const LOGIN_USER_INITIAL_STATE: LoginuserState = {
   userData: {} as User,
   isLoading: false,
   errorResponse: null,
   isLoggedIn: false,
};

export const loginUserReducer = (state = LOGIN_USER_INITIAL_STATE, action = {} as AnyAction): LoginuserState => {
   if (loginUserStart.match(action))
      return {
         ...state,
         loginCred: action.payload,
         isLoading: true,
      }
   ;
   if (loginUserSuccess.match(action))
      return {
         ...state,
         userData: action.payload.data,
         isLoggedIn: true,
         loginCred: undefined,
         isLoading: false,
      }
   ;
   if (logoutUserSuccess.match(action))
      return {
         ...state,
         userData: {} as User,
         isLoggedIn: false,
      }
   ;
   if (loginUserFailed.match(action) || logoutUserFailed.match(action))
      return {
         ...state,
         errorResponse: action.payload,
         isLoggedIn: false,
      }
   ;
   if (checkSessionSuccess.match(action))
      return {
         ...state,
         response: action.payload!
      }
   ;
   if (checkSessionFailed.match(action))
      return {
         ...state,
         userData: {} as User,
         isLoggedIn: false,
         response: undefined,
      }
   ;
   return state
};

export type SignupUserState = {
   readonly signupCred?: SignUpDto;
   readonly signupResponse: ResponseBody<null> | null;
   readonly isLoading: boolean;
   readonly errorResponse: ErrorResponseBody | null;
};

const SIGNUP_USER_INITIAL_STATE: SignupUserState = {
   signupCred: undefined,
   signupResponse: null,
   isLoading: false,
   errorResponse: null
};

export const signupUserReducer = (state = SIGNUP_USER_INITIAL_STATE, action = {} as AnyAction): SignupUserState => {
   if (signUpUserStart.match(action))
      return {
         ...state,
         signupCred: action.payload,
         isLoading: true,
      }
   
   if (signUpUserSuccess.match(action))
      return {
         ...state,
         signupResponse: action.payload,
         signupCred: undefined,
         isLoading: false,
      }

   if (signUpUserFailed.match(action))
      return {
         ...state,
         errorResponse: action.payload,
         isLoading: false,
      }
   return state;
};
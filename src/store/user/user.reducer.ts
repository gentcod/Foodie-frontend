import { AnyAction } from "redux-saga";
import { LoginDto, SignUpDto } from "../../app/dtos/user"
import { ErrorResponseBody, ResponseBody } from "../../app/models/response";
import { User } from "../../app/models/user";
import { loginUserFailed, loginUserStart, loginUserSuccess, signUpUserFailed, signUpUserStart, signUpUserSuccess } from "./user.action";

export type LoginuserState = {
   readonly loginCred?: LoginDto;
   readonly userData: User;
   readonly isLoading: boolean;
   readonly errorResponse: ErrorResponseBody | null;
};

const LOGIN_USER_INITIAL_STATE: LoginuserState = {
   loginCred: undefined,
   userData: {} as User,
   isLoading: false,
   errorResponse: null
};

export const loginUserReducer = (state = LOGIN_USER_INITIAL_STATE, action = {} as AnyAction): LoginuserState => {
   if (loginUserStart.match(action))
      return {
         ...state,
         loginCred: action.payload,
         isLoading: true,
      }

   if (loginUserSuccess.match(action))
      return {
         ...state,
         userData: action.payload.data,
         loginCred: undefined,
         isLoading: false,
      }

   if (loginUserFailed.match(action))
      return {
         ...state,
         errorResponse: action.payload,
         isLoading: false,
      }
   return state
};

export type SignupUserState = {
   readonly signupCred?: SignUpDto;
   readonly signupResponse: ResponseBody<null>;
   readonly isLoading: boolean;
   readonly errorResponse: ErrorResponseBody | null;
};

const SIGNUP_USER_INITIAL_STATE: SignupUserState = {
   signupCred: undefined,
   signupResponse: {} as ResponseBody<null>,
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
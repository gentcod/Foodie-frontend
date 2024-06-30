export interface ResponseBody<T> {
   status: string;
   message: string;
   data: T
}

export interface ErrorResponseBody {
   status: string;
   message: string;
}
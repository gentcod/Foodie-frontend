import { toast } from "react-toastify";

enum NotifierEnum {
   SUCCES = 'success',
   ERROR = 'error'
}

export const notify = (message: string, type?: string) => {
   const toastFunc = type === NotifierEnum.SUCCES ? toast.success : toast.error;
   toastFunc(message, {
      position: "top-center",
      autoClose: 200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
   })
};
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NotifierContainer } from "./notifier.style";

const Notifier = () => {

  return (
    <NotifierContainer>
      <ToastContainer
         position="top-center"
         autoClose={3000}
         hideProgressBar={false}
         newestOnTop
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="colored"
      />
    </NotifierContainer>
  );
};

export default Notifier;

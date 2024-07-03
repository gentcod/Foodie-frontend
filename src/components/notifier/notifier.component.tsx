import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NotifierContainer } from "./notifier.style";

const Notifier = () => {
  return (
    <NotifierContainer>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </NotifierContainer>
  );
};

export default Notifier;

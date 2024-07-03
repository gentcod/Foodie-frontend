import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserFailed, loginUserStart } from "../../store/user/user.action";
import { selectLoginErrorResponse, selectLoginIsLoading, selectUserIsLoggedIn } from "../../store/user/user.selector";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginContainer } from "./login.style"
import { notify } from "../../utils/helper/toastify.helper.utils";
import Form from "../form/form.component";
import { inputFields } from "../../dev-data/login-form-field.data";
import { getRedirect } from "../../utils/helper/others.helper.utils";

const defaultFormFields = {
   email: '',
   password: '',
}

const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const location = useLocation();

   const [formData, setFormData] = useState(defaultFormFields);

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;      
      setFormData({...formData, [name]: value});
   };
   const { email, password } = formData;

   const resetFormFields = () => {
      setFormData(defaultFormFields);
   };

   const isLoggedIn = useSelector(selectUserIsLoggedIn);
   const redirect = getRedirect(location.search);
   useEffect(() => {
      if (isLoggedIn) {
         notify("Logged in successfully", "success");
         setTimeout(() => { 
            resetFormFields();
            navigate(`/${redirect ? redirect : ""}`);
         }, 3000);
      }
   }, [isLoggedIn, redirect, navigate]);

   const errResp = useSelector(selectLoginErrorResponse);
   useEffect(() => {
      if (errResp) {
         notify(errResp.message!, "error");
         dispatch(loginUserFailed(null));
      }
   }, [errResp, dispatch]);

   const loginIsLoading = useSelector(selectLoginIsLoading);

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(loginUserStart({email, password}))
   };

   return (
      <LoginContainer>
         <Form
            heading="Login User"
            formSubmitFunc={handleSubmit}
            inputChangeFunc={handleInputChange}
            inputData={inputFields}
            formData={formData}
            buttonText="Login"
            authIsLoading={loginIsLoading}
         />
      </LoginContainer>
   );
};

export default Login;
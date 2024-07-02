import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Form from "../form/form.component";
import { SignUpContainer } from "./signup.style"
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { notify } from "../../utils/helper/toastify.helper.utils";
import { selectSignupErrorResponse, selectSignupResponse } from "../../store/user/user.selector";
import { signUpUserFailed, signUpUserStart, signUpUserSuccess } from "../../store/user/user.action";
import { defaultFormFields, inputFields } from "../../dev-data/signup-form-field.data";
import { getRedirect } from "../../utils/helper/others.helper.utils";

const SignUp = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const location = useLocation();

   const [formData, setFormData] = useState(defaultFormFields);

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;      
      setFormData({...formData, [name]: value});
   };

   const resetFormFields = () => {
      setFormData(defaultFormFields);
   };
   
   const signupResp = useSelector(selectSignupResponse);
   useEffect(() => {
      if (signupResp) {
         notify(signupResp.message!, "success");
         setTimeout(() => { 
            resetFormFields();
            dispatch(signUpUserSuccess(null));
            navigate(`/${getRedirect(location.search)}`);
         }, 3000);
      }
   }, [signupResp, location.search, dispatch, navigate]);

   const errResp = useSelector(selectSignupErrorResponse);
   useEffect(() => {
      if (errResp) {
         notify(errResp.message!, "error");
         dispatch(signUpUserFailed(null));
      }
   }, [errResp, dispatch]);

   const { username, firstName, lastName, middleName, email, password, confirmPassword } = formData;
   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         notify("Passwords are not the same", "error");
         return;
      }
      dispatch(signUpUserStart({username, firstName, lastName, middleName, email, password}))
   };
   return (
      <SignUpContainer>
         <Form
            heading="Sign Up User"
            formSubmitFunc={handleSubmit}
            inputChangeFunc={handleInputChange}
            inputData={inputFields}
            formData={formData}
            buttonText="Sign Up"
         />
      </SignUpContainer>
   );
};

export default SignUp;
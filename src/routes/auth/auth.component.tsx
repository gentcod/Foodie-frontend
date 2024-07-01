import { Outlet } from 'react-router-dom';
import { AuthContainer } from './auth.style';

export const Auth = () => {
   return (
      <>
         <AuthContainer>
            <Outlet/>
         </AuthContainer>
      </>
   )
};

export default Auth;
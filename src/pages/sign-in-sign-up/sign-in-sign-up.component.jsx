import React from 'react'; 
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import SIGN_IN_SIGN_UP_CONTAINER from './sign-in-sign-up.styles';
const SignInAndSignUp  = () => (
    <SIGN_IN_SIGN_UP_CONTAINER>
        <SignIn/>
        <SignUp/>
    </SIGN_IN_SIGN_UP_CONTAINER>
)
export default SignInAndSignUp;
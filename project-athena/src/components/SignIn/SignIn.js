import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import '../SignIn/SignIn.css'
import SignInForm from './SignInForm';
import {FirebaseContext} from '../Firebase';
const SignIn = () => (
    <Container maxWidth="sm">
   <FirebaseContext.Consumer>
      
    {firebase => {
      return <div>I've access to Firebase and rendered something.</div>;
    }}


  </FirebaseContext.Consumer>

  <SignInForm/>
</Container>

);





export default SignIn;
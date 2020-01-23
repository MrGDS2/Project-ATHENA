import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../SignIn/SignIn.css';

const SignInForm = () => (

 <Form>
  <Form.Group controlId="formPlaintextEmail">
    <Form.Label > Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group>
 <a  className="SignInLink" href="">Forgot Password?</a>
</Form.Group>
<Form.Group>
<a className="SignInLink"  href="">Not a member? Sign Up</a>
  </Form.Group>

 

<Button className="button" variant="light" type="submit">
    Sign In
  </Button>
</Form>
)

export default SignInForm;
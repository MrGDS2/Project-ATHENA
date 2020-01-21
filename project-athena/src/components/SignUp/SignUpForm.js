import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




const SignUpForm = () => (

 <Form>
 <Form.Group controlId="formPlaintextName">
    <Form.Label > First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter First Name" />
   </Form.Group>
     
   <Form.Group controlId="formPlaintextName">
    <Form.Label > Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Last Name" />
   </Form.Group>
  
 
 
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

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>


 

<Button className="button" variant="light" type="submit">
    Sign Up
  </Button>
</Form>
)

export default SignUpForm;
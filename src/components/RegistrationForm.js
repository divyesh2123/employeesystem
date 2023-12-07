import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function RegistrationForm() {
  return (
    <Form>
 
     <Form.Group className="mb-3" controlId="" >
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Please Title" name='title' />
    </Form.Group>

    <Form.Group className="mb-3" controlId="">
      <Form.Label>FirstName</Form.Label>
      <Form.Control type="text" placeholder="Please Enter First Name" name='firstName' />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="">
      <Form.Label>LastName</Form.Label>
      <Form.Control type="text" placeholder="Please Enter Last Name"
      name='lastName'
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="">
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" 
      placeholder="Please Enter Email "
      title='email' />
    </Form.Group>

    <Form.Group className="mb-3" controlId="">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" 
      placeholder="Please Enter Password"
      title='password' name='password' />
    </Form.Group>

    <Form.Group className="mb-3" controlId="">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="text" 
      placeholder="Please Enter Confirm Password "
      title='confirm password' name='confirmPassword' />
    </Form.Group>
  
    
    <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="accept Terms"
        name='acceptTerms'
      />

<Button variant="primary" >Save</Button>
<Button variant="danger">Cancel</Button>
  </Form>
  )
}

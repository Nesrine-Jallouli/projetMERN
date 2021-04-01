import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { userLogin } from "../JS/actions";
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';

const Login = () => {
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [role, setRole] = useState()
  const loading = useSelector((state) => state.userReducer.loading);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();

    dispatch(
      userLogin({

        email,
        password,
      })
    );
  };

  // const errors = useSelector(state => state.userReducer.errors)
  // console.log(errors)
  // const dispatch = useDispatch();
  //  if (role==="candidat")  return <Redirect to="/Profile" />;
  
   if (isAuth) 
   {
    if (user.role==="candidat") 
    {
      return <Redirect to='/Profile' />
    }
    else if (user.role==="entreprise") 
    {
      return <Redirect to='/ProfileEntreprise' />
    }
   }
     
  console.log(loading)
  return (
      loading ? <h1> please wait </h1> :



        <div className="container">
     
        <div className='Login-design text-dark shadow p-3 mb-5 '>
    <Container>
    <Label for="title" className='text-center text-Login'>LOGIN</Label>
    <Row>
    <Col>
    <Form id="loginForm" method="post" >
    {/* {

errors ?     <div class="alert alert-danger" role="alert">
{errors.msg} </div>: null

  } */}
      <FormGroup>
        <Label for="email"> Email</Label>
        <Input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" required/>
      </FormGroup>
      <FormGroup>
        <Label for="Password"> Password</Label>
        <Input type="password" name="password" id="Password"  onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" required/>
      </FormGroup>
      <Label>Don't have an account?</Label>
      <Link to='/Register'> Register</Link>
      {/* <Link to='/'> */}
        <Button className='button_login bg-success' onClick={login}>SIGN IN</Button>
        {/* </Link> */}

    </Form>
    </Col>
    </Row>
    </Container>
    </div>
      
    </div>
  )
};

export default Login;

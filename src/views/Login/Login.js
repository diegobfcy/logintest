import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import Toolbar from '../../components/Toolbar/Toolbar';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <div className="login-container">
      <Toolbar />
      <div className="bg-image">
        <Container>
          <LoginForm />
        </Container>
      </div>
    </div>
  );
};

export default Login;

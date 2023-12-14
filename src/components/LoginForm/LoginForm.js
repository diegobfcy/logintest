import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css'; 
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('DNI:', dni);
    console.log('Contraseña:', password);

    navigate(`/menu?dni=${dni}&password=${password}`);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={10} md={6}>
          <div className="login-container p-3 rounded bg-white">
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicDNI">
                <Form.Label>DNI</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu DNI"
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="success" type="submit" block>
                Iniciar Sesión
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;

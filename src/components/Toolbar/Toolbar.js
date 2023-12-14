import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UcsmLogo from '../../assets/UcsmLogo.png';
import styles from './Toolbar.module.css';  

const Toolbar = () => {
  return (
    <Navbar className={styles.Toolbar} bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="#">

          <img
            src={UcsmLogo}
            width="150"
            className="d-inline-block align-top"
            alt="Logo"
          />

        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Toolbar;

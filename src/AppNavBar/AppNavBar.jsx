import {
  NavLink,
} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const AppNavBar = ({
  currentUser = 'Guest',
}) => (
  <Container className="mb-4">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        Takeoff Staff
      </Navbar.Brand>

      <Nav className="me-auto flex-row">
        <NavLink to="/login" className="ms-2">
          Login
        </NavLink>

        <NavLink to="/contacts" className="ms-2">
          Contacts
        </NavLink>
      </Nav>

      <Navbar.Text>
        Signed in as:
        <NavLink to="/login" className="ms-1">
          { currentUser }
        </NavLink>
      </Navbar.Text>
    </Navbar>
  </Container>
);


export default AppNavBar;

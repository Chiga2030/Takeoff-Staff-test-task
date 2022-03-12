import {
  NavLink,
} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const AppNavBar = ({
  loginedUser = 'Guest',
}) => (
  <Container className="mb-4">
    <Navbar bg="light" expand="lg" className="px-3">
      <Navbar.Brand>
        Takeoff Staff
      </Navbar.Brand>

      <Nav className="me-auto flex-row">
        { loginedUser === 'Guest' ? (
          <NavLink to="/login" className="ms-2">
            Login
          </NavLink>
        ) : false }

        <NavLink to="/contacts" className="ms-2">
          Contacts
        </NavLink>
      </Nav>

      <Navbar.Text>
        Signed in as:
        <NavLink to="/login" className="ms-1">
          { loginedUser }
        </NavLink>
      </Navbar.Text>
    </Navbar>
  </Container>
);


export default AppNavBar;

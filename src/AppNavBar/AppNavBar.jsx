import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const AppNavBar = () => (
  <Container>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        Takeoff Staff
      </Navbar.Brand>
      <Nav className="me-auto flex-row">
        <Nav.Link className="ms-2" href="login">Login</Nav.Link>
        <Nav.Link className="ms-2" href="contacts">Contacts</Nav.Link>
      </Nav>
      <Navbar.Text>
        Signed in as: <a href="login">Guest</a>
      </Navbar.Text>
    </Navbar>
  </Container>
);


export default AppNavBar;

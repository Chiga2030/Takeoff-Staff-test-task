import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const LoginPage = ({
  users,
}) => (
  <div className="d-flex h-100 align-items-center">
    <Container className=" ">
      <Form.Label htmlFor="userSelect">Select user:</Form.Label>
      <Form className="d-flex justify-content-left">
        <Form.Select
          className="col form-select-lg px-4" id="userSelect">
          { users.map(item => (
            <option key={ item }>
              { item }
            </option>)) }
        </Form.Select>
        <Button className="col-sm-2 ms-4" type="button">Login</Button>
      </Form>
    </Container>
  </div>
);


export default LoginPage;

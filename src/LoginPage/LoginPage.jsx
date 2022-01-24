import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const LoginPage = () => (
  <div className="d-flex h-100 align-items-center">
    <Container className=" ">
      <Form.Label htmlFor="userSelect">Select user:</Form.Label>
      <Form className="d-flex justify-content-left">
        <Form.Select
          className="col form-select-lg px-4" id="userSelect">
          <option>User 1</option>
          <option>User 2</option>
          <option>User 3</option>
        </Form.Select>
        <Button className="col-sm-2 ms-4" type="button">Submit</Button>
      </Form>
    </Container>
  </div>
);


export default LoginPage;

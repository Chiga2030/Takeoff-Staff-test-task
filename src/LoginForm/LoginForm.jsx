import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginForm = ({
  users,
}) => (
  <>
    <Form.Label htmlFor="userSelect">Select user:</Form.Label>
    <Form
      name="userSelectForm"
      className="d-flex justify-content-left"
    >
      <Form.Select
        name="select"
        className="col form-select-lg px-4" id="userSelect">
        { users.map(item => (
          <option key={ item.name }>
            { item.name }
          </option>)) }
      </Form.Select>

      <Button
        onClick={ () => console.log('test') }
        className="col-sm-2 ms-4"
        type="button"
      >
        Login
      </Button>
    </Form>
  </>
);


export default LoginForm;

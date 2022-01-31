import useFetchUser from '../hooks/useFetchUser';


import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginForm = ({
  users,
  setUserData,
  setFetchUserDataStatus,
}) => (
  <Container>
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
        onClick={ () => useFetchUser(
          document.forms.userSelectForm.select.value)
          .then(data => {
            setFetchUserDataStatus('request');
            return data;
          })
          .then(data => new Promise(resolve => setTimeout(() => {
            resolve(data);
          }, 2000)))
          .then(data => setUserData(...data)) }
        className="col-sm-2 ms-4"
        type="button"
      >
        Login
      </Button>
    </Form>
  </Container>
);


export default LoginForm;

import useFetchUser from '../../hooks/useFetchUser';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginForm = ({
  users,
  setUserData,
  setFetchUserDataStatus,
}) => {
  const onClickHandler = () => {
    setFetchUserDataStatus('request');
    useFetchUser(document.forms.userSelectForm.select.value)
      // .then(response => {
      //   if (!response.ok) {
      //     console.log(response.ok);
      //     return response;
      //   } throw new Error('Error: Network is unavailable');
      // })
      .then(data => setUserData(...data))
      .catch(error => {
        setFetchUserDataStatus('fail', error.message);
        console.log(error.message);
      });
  };


  return (
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
          onClick={ onClickHandler }
          className="col-sm-2 ms-4"
          type="button"
        >
          Login
        </Button>
      </Form>
    </Container>
  );
};


export default LoginForm;

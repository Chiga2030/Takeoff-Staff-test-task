import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import {
  Eyeglasses,
} from 'react-bootstrap-icons';

const stateError = {
  'Username is not exsist': {
    subDescription: 'We searched everywhere, but there is no such user',
  },
};

const FailedFetchInfo = ({
  errorDescription,
  onLogout,
}) => (
  <Container className="d-flex flex-column align-items-center">
    <Eyeglasses className="text-danger" style={ {
      width: '8rem',
      height: '8rem',
    } } />
    <h2 className="display-5 fw-bold">{ errorDescription }</h2>
    <p className="lead">
      { stateError[errorDescription].subDescription }
    </p>
    <div>
      <Button size="lg mt-5" onClick={ onLogout }>Try login again</Button>
    </div>
  </Container>
);


export default FailedFetchInfo;

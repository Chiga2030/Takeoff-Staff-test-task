import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';


const FetchSpinner = () => (
  <Container className="d-flex flex-column align-items-center">
    <Spinner animation="border" role="status" variant="primary">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </Container>
);


export default FetchSpinner;

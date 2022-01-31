import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const ProfileCard = ({
  loginedUser,
}) => (
  <Container className="d-flex justify-content-center">
    <Card style={ {
      width: '20rem',
    } }>
      <Card.Header>
        <strong>Your profile</strong>
      </Card.Header>
      <Card.Body>
        <Card.Title>{ loginedUser.name }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          { loginedUser.username }
        </Card.Subtitle>
        <ListGroup variant="flush">
          <ListGroup.Item>E-mail: { loginedUser.email }</ListGroup.Item>
          <ListGroup.Item>Phone: { loginedUser.phone }</ListGroup.Item>
          <ListGroup.Item>Website: { loginedUser.website }</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="text-muted">
        { `${loginedUser.address.city},
          ${loginedUser.address.street},
          ${loginedUser.address.suite}` }
      </Card.Footer>
    </Card>
  </Container>
);


export default ProfileCard;

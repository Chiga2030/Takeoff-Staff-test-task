import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

import {
  PencilSquare,
  Trash,
} from 'react-bootstrap-icons';


const ContactsPage = () => (
  <Container>
    <Card className="mb-4">
      <Card.Header><h2>Contacts</h2></Card.Header>

      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="searchForm">
            <Form.Label>Contacts search</Form.Label>
            <Form.Control type="search" placeholder="Enter your query" />
          </Form.Group>
        </Form>

        <Accordion flush alwaysOpen={ true }>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Add new contact</Accordion.Header>

            <Accordion.Body>
              <Form>
                <Form.Group className="mb-3" controlId="addForm">
                  <Form.Label>
                    Descript your contact
                  </Form.Label>

                  <div className="d-flex">
                    <div className="me-2 col">
                      <Form.Control
                        className="mb-2"
                        type="text"
                        placeholder="Name of contact"
                      />

                      <Form.Control
                        type="phone"
                        placeholder="Phone number"
                      />
                    </div>

                    <Button type="button" className="col-2">
                      Add contact
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>

    <ListGroup as="ol" variant="flush" numbered>
      <ListGroup.Item
        as="li"
        className="
          d-flex
          justify-content-between
          align-items-start
          border-bottom
        "
        action
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Patricia Lebsack</div>
          +7(903)505-3369
        </div>

        <Button
          className="align-self-center me-2"
          variant="outline-secondary"
          size="sm"
        >
          <span className="me-1">edit</span>
          <PencilSquare />
        </Button>

        <Button
          className="align-self-center"
          variant="outline-danger"
          size="sm"
        >
          <span className="me-1">delete</span>
          <Trash />
        </Button>
      </ListGroup.Item>
    </ListGroup>
  </Container>
);


export default ContactsPage;

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
import contactsSlice from '../../store/reducers/contactsSlice';
import {
  useState,
} from 'react';


const ContactsPage = ({
  authUsername,
  contactList,
  onDelete,
  onAdd,
}) => {
  const [
    nameInput,
    setNameInput,
  ] = useState('');
  const [
    phoneInput,
    setPhoneInput,
  ] = useState('');

  return (
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
                          value={ nameInput }
                          onChange={
                            event => setNameInput(event.target.value)
                          }
                        />

                        <Form.Control
                          type="phone"
                          placeholder="Phone number"
                          value={ phoneInput }
                          onChange={
                            event => setPhoneInput(event.target.value)
                          }
                        />
                      </div>

                      <Button
                        type="button"
                        className="col-2"
                        disabled={ !nameInput || !phoneInput }
                        onClick={ () => {
                          onAdd({
                            username: authUsername,
                            newContact: {
                              name: nameInput,
                              phone: phoneInput,
                            },
                          });

                          setNameInput('');
                          setPhoneInput('');
                        } }
                      >
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
        { contactList.map((contact, index) => (
          <Contact
            authUsername={ authUsername }
            name={ contact.name }
            phone={ contact.phone }
            index={ index }
            onDelete={ onDelete }
            key={ contactsSlice.name + index }
          />
        )) }
      </ListGroup>
    </Container>
  );
};


const Contact = ({
  name,
  phone,
  index,
  authUsername,
  onDelete,
}) => (
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
      <div className="fw-bold">{ name }</div>
      { phone }
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
      onClick={ () => onDelete({
        username: authUsername,
        index: index,
      }) }
    >
      <span className="me-1">delete</span>
      <Trash />
    </Button>
  </ListGroup.Item>
);


export default ContactsPage;

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

import Contact from './components/Contact';


const ContactsPage = ({
  authUsername,
  contactList,
  onDeleteHandler,
  onAddNewContactHandler,
  nameInput,
  setNameInput,
  phoneInput,
  setPhoneInput,
  onSaveContactHandler,
  searchQuery,
  setSearchQuery,
}) => (
  <Container>
    <Card className="mb-4">
      <Card.Header><h2>Contacts</h2></Card.Header>

      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="searchForm">
            <Form.Label>Contacts search</Form.Label>
            <Form.Control
              type="search"
              placeholder="Enter your query"
              value={ searchQuery }
              onChange={ event => setSearchQuery(event.target.value) }
            />
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
                        onChange={ event => setNameInput(event.target.value) }
                      />

                      <Form.Control
                        type="phone"
                        placeholder="Phone number"
                        value={ phoneInput }
                        onChange={ event => setPhoneInput(event.target.value) }
                      />
                    </div>

                    <Button
                      type="button"
                      className="col-2"
                      disabled={ !nameInput || !phoneInput }
                      onClick={ onAddNewContactHandler }
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
      { contactList.map(contact => (
        <Contact
          authUsername={ authUsername }
          name={ contact.name }
          phone={ contact.phone }
          id={ contact.id }
          onDeleteHandler={ onDeleteHandler }
          onSaveContactHandler={ onSaveContactHandler }
          key={ contact.id }
        />
      )) }
    </ListGroup>
  </Container>
);


export default ContactsPage;

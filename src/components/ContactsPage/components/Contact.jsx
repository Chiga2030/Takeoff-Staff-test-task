import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

import {
  useState,
  useEffect,
} from 'react';

import ButtonSaveGroupe from './ButtonSaveGroupe';
import ButtonEditGroupe from './ButtonEditGroupe';


const Contact = ({
  name,
  phone,
  id,
  onDeleteHandler,
  onSaveContactHandler,
}) => {
  const [
    isEdit,
    setIsEdit,
  ] = useState(false);

  const [
    nameInput,
    setNameInput,
  ] = useState(name);
  const [
    phoneInput,
    setPhoneInput,
  ] = useState(phone);

  const onSaveHandler = () => {
    onSaveContactHandler(id, {
      name: nameInput,
      phone: phoneInput,
    });

    setIsEdit(false);
  };

  const onCancelHandler = () => {
    onSaveContactHandler(id, {
      name,
      phone,
    });

    setNameInput(name);
    setPhoneInput(phone);
    setIsEdit(false);
  };

  useEffect(() => {
    setNameInput(name);
    setPhoneInput(phone);
  }, [
    name,
    phone,
  ]);

  return (
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
        {isEdit ? (
          <Form.Control
            className="mb-2"
            type="text"
            placeholder="Name of contact"
            value={nameInput}
            onChange={event => setNameInput(event.target.value)}
          />
        ) : (
          <div className="fw-bold">{name}</div>
        )}

        {isEdit ? (
          <Form.Control
            className="mb-2"
            type="text"
            placeholder="Name of contact"
            value={phoneInput}
            onChange={event => setPhoneInput(event.target.value)}
          />
        ) : (
          phone
        )}
      </div>

      {isEdit ? (
        <ButtonSaveGroupe
          onSaveHandler={onSaveHandler}
          onCancelHandler={onCancelHandler}
        />
      ) : (
        <ButtonEditGroupe
          setIsEdit={setIsEdit}
          onDeleteHandler={() => onDeleteHandler(id)}
        />
      )}
    </ListGroup.Item>
  );
};


export default Contact;

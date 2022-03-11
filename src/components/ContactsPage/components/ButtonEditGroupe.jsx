import Button from 'react-bootstrap/Button';

import {
  PencilSquare,
  Trash,
} from 'react-bootstrap-icons';

const ButtonEditGroupe = ({
  setIsEdit,
  onDeleteHandler,
}) => (
  <>
    <Button
      className="align-self-center me-2"
      variant="outline-secondary"
      size="sm"
      onClick={() => setIsEdit(true)}
    >
      <span className="me-1">edit</span>
      <PencilSquare />
    </Button>

    <Button
      className="align-self-center"
      variant="outline-danger"
      size="sm"
      onClick={onDeleteHandler}
    >
      <span className="me-1">delete</span>
      <Trash />
    </Button>
  </>
);

export default ButtonEditGroupe;

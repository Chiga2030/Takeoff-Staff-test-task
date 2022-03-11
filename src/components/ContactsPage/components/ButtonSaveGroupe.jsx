import {
  Button,
} from 'react-bootstrap';

import {
  Save,
  XCircle,
} from 'react-bootstrap-icons';


const ButtonSaveGroupe = ({
  onSaveHandler,
  onCancelHandler,
}) => (
  <>
    <Button
      className="align-self-center me-2"
      variant="outline-primary"
      size="sm"
      onClick={ onSaveHandler }
    >
      <span className="me-1">save</span>
      <Save />
    </Button>

    <Button
      className="align-self-center me-2"
      variant="outline-secondary"
      size="sm"
      onClick={ onCancelHandler }
    >
      <span className="me-1">cancel</span>
      <XCircle />
    </Button>
  </>
);


export default ButtonSaveGroupe;

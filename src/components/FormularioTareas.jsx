
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'
import {Form, Button} from 'react-bootstrap'

const FormularioTareas = () => {
    return (
        <Form>
            <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                {/* Input es Form.Control */}
                <Form.Control type="text" placeholder="Ingresa una Tarea" />
                <Button variant='info'>➕</Button>
            </Form.Group>
        </Form>
    );
};

export default FormularioTareas;
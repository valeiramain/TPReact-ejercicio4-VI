// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";

const FormularioTareas = () => {
    // uso un State cuando el dato cambia y quiero que se renderice en el momento

    // VALIDACIONES con react-hook-form. traigo libreria de validaciones useForm()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const agregarTarea = () => {
        console.log('Aqui tengo que crear una tarea')
        // invoca a reset de la libreria de validaciones
        reset()
    }

    return (
        <>
        {/* handleSubmit hace las validaciones, si todo esta ok, llama a agregarTarea */}
            <Form onSubmit={handleSubmit(agregarTarea)}>
                <Form.Group
                    className="mb-1 d-flex"
                    controlId="exampleForm.ControlInput1"
                >
                    {/* register: es para validar cada input(Form.Control), se indica todo lo que se quiera validar */}
                    <Form.Control
                        type="text"
                        placeholder="Ingresa una tarea"
                        {...register("tarea", {
                            required: "La tarea es un dato obligatorio",
                            minLength: {
                                value: 3,
                                message: "La tarea debe contener como minimo 3 caracteres",
                            },
                            maxLength: {
                                value: 50,
                                message:
                                    "La tarea debe contener hasta 50 caracteres como maximo",
                            },
                        })}
                    />
                    <Button variant="info" type="submit">
                        ➕
                    </Button>
                </Form.Group>

                {/* muestra mensaje de error, cuando existe (?). Es una propiedad que puede o no existir, por eso va el ? */}
                <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
            </Form>
            <ListaTareas></ListaTareas>
        </>
    );
};

export default FormularioTareas;

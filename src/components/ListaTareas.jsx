import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = ({tareasProps}) => {
    return (
        // <ul>
        <ListGroup className="mt-3">
            {/* <li> */}
            {/* codigo de js entre {} */}
            {
            // para uso interno de react se usa key, para identificar un componente unico
            // tarea en el contenido de la posicion del array, indice es la posicion del array
            tareasProps.map((tarea,indice) => (<ItemTarea key={indice} tareaProps={tarea}></ItemTarea>))
            }
        </ListGroup>
    );
};

export default ListaTareas;
import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTareas = () => {
    return (
        // <ul>
        <ListGroup className='mt-4'>
            {/* li */}
            <ItemTarea></ItemTarea>
        </ListGroup>
    );
};

export default ListaTareas;
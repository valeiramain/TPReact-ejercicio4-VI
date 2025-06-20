import { ListGroup, Button } from 'react-bootstrap';

const ItemTarea = ({ tareaProps }) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>{tareaProps}<Button variant='danger'><i className="bi bi-x text-dark"></i></Button></ListGroup.Item>
    );
};

export default ItemTarea;
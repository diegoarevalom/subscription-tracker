import { moneyFormat } from '../helper';

interface SingleItemPros {
    price: number;
    type: string;
    id: string;
    eliminarItem: string;
    editItem: string;
}

const SingleItem = ({ price, type, id, eliminarItem, editItem }: SingleItemPros) => {

    const handleDelete = (e) => {
        e.preventDefault();
        const answer = window.confirm(`Borrar subscripcion a${type}`);
        if (answer) {
            eliminarItem(id);

        }
    }

    const handleEdit = (e) => {
        e.preventDefault();
        editItem(id);
    }

    const urlImage = `/images/${type}.png`;

    return (
        <div className="single-item">
            <img src={urlImage} alt="Services" />
            <h3>Precio: {moneyFormat(Number(price))}</h3>
            <a href="" className='delete' onClick={handleDelete}>Borrar</a>
            <a href="" className='edit' onClick={handleEdit}>Editar</a>
        </div>
    );
}

export default SingleItem;
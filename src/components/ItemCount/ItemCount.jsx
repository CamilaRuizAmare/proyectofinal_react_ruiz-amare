import {useState} from 'react';

const ItemCount = ({product, addItem}) => {
    const [count, setCount] = useState(1);

    const sumar = () => {
        setCount(count + 1);
    };
    const restar = () => {
        if (count > 1){
        setCount(count - 1);
        }
    };

    return (
        <div className='d-flex row justify-items-center'>
            <div className='m-2'>
                <button onClick={sumar} className='btn btn-dark'>+</button>
                <span className='mx-3'>{count}</span>
                <button onClick={restar} className='btn btn-dark px-3'>-</button>
            </div>
            <div className=''>
                <button onClick={() => addItem(product, count)} className='btn btn-dark mx-2'>Agregar al carrito</button>
            </div>
        </div>
    )
};

export default ItemCount;
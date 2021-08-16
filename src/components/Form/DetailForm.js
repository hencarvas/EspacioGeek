import React, {useState} from 'react';
// import { database } from '../../Firebase/Firebase';
// import { CartContext } from '../Context/CartContext';


const DetailForm = ({addCart}) => {

    // const { deleteCart} = useContext(CartContext);     


    const [inputs, setInputs] = useState();

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addCart(inputs);
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="div-form" >
                <input tipe="text" placeholder="Nombre" name="nombre" onChange={handleInput}/>
                <input tipe="text" placeholder="Apellido" name="apellido" onChange={handleInput}/>
                <input tipe="text" placeholder="Telefono" name="telefono" onChange={handleInput}/>
                <input tipe="text" placeholder="Email" name="email" onChange={handleInput}/>
                <button className="btn-compra">Finalizar Compra</button>
            </div>
        </form>
    )
}

export default DetailForm;
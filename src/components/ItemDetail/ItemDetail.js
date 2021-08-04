import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import Contador from './../Counter/Counter';


const ItemDetail = ({itemToDisplay}) => {
   
    const [count, setCount] = useState(1);

    const [finished, setFinished] = useState(false);

    const handleState = () => setFinished(!finished); 

    const {addToCart,  removeToCart} = useContext(CartContext);
  
    const handleAdd = () => {
        addToCart({ ...itemToDisplay, count});
    }

    // console.log(cart)

    
    return (
        <article className="article-detail">
            <div className="div-img">
                <img className="img-detail" src={"/" + itemToDisplay.img} alt={itemToDisplay.titulo}/>
            </div>
            <div className="div-detail">
                <h3 className="titulo-detail">{itemToDisplay.titulo}</h3>
                <span className="precio-detail">$ {itemToDisplay.precio}</span>
                <span className="titulo-detail">Stock: {itemToDisplay.stock}</span>

                {!finished ? (
                    <>
                    <Contador inicial={1} count={count} setCount={setCount} stock={itemToDisplay.stock}/>

                    <button className="btn-comprar" onClick={() => {handleState(); handleAdd()}}>Agregar al Carrito </button>
                    </>
                ):(
                    <div className="div-btn">
                        <Link to="/cart" onClick={handleState}>
                            <button className="boton1" onClick={handleState}>Terminar Compra</button>
                        </Link>
                            <button className="boton2" onClick={() => {handleState(); removeToCart(itemToDisplay.id)}}>Modificar</button>
                    </div>
                )}
            </div>
        </article>
    );

};  

export default ItemDetail;

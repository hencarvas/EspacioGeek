import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import CartItem from "./setCart";
import { NavLink } from "react-router-dom";


const CartWidget = () => {

    const {cart, deleteCart, totalCart} = useContext(CartContext);
  
    console.log(cart)

    return (
    <div  className="div-content"> 
        <div className="cart-top">
            <h2 className="tit-carrito" > Carrito</h2>
            <button className="btn-vaciar" onClick={() => {deleteCart()}}>Vaciar Carrito </button>
        </div>
    
    <div className="div-content-cart">
        <div className="div-carrito">
            {cart.length <= 0 ? (
                <div className="volver-ini">
                <h3 >No hay Productos en el Carrito</h3>
                <NavLink to="/" className="" >Volver al Inicio</NavLink>

                </div>
            ) : (
                <div>
                    {cart.map((item) => (
                     <CartItem item={item} key={item.id}/>
                     ))
                    }   
                    <div className="div-total">
                        <h3 className="total-cart">Total: ${totalCart()}</h3>
                        <button className="btn-compra">Finalizar Compra</button>
                    </div>
                </div>
                )

            }        
        </div>
    </div>
    </div>
    )

    };  

export default CartWidget;


/* <div className="cart-items">          
                        <img src={item.img} alt={item.titulo} className="img-item"/>
                        <NavLink to={`/articulo/${item.id}`} onClick={() => {modifyArticle(item.id)}}className="link-card">
                        <h3 className="titulo-item">{item.titulo}</h3>
                        </NavLink>
                        <h3 className="cant-item"> Cantidad: {item.count}</h3>
                        <h3 className="cant-item"> id: {item.id}</h3>

                        <h3 className="precio-item">Precio C/U ${item.precio}</h3>
                        <h3 className="total-item"> Total: ${item.precio * item.count}</h3>
                    
                        <div className="btn-item">
                            <button className="btn-item" onClick={() => {removeToCart(item.id)}}><i className="fas fa-trash "  ></i>
                                </button> 
                            </div> 
                    </div> )) */
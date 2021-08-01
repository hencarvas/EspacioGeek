import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {
   
    const {cart, deleteCart} = useContext(CartContext);
  
    console.log(cart)
    


    return (
    <div>
        {cart.length <= 0 ? (
            <h3 >No hay Productos en el Carrito</h3>
        ) : (
            <div>          
                <h4>Carrito</h4>
                <h3 >{cart.titulo}</h3>
            </div>
            )
        }
        <button className="btn-comprar" onClick={() => {deleteCart()}}>Vaciar Carrito </button>


        
    </div>
    )

    // return (
    //     <article className="article-detail">
    //         <div className="div-img">
    //             <img className="img-detail" src={"/" + cartToDisplay.img} alt={cartToDisplay.titulo}/>
    //             <h3 className="titulo-detail">{cartToDisplay.titulo}</h3>
    //             <>{cart}</>
    //         </div>
            
    //     </article>
    // );


};  

export default CartWidget;





// const Cart = () => {
//     return <i className="fas fa-shopping-cart"></i>
// };

// export default Cart
// import React, { useContext, useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import {Articulos} from "../../datos/Articulos.json";
// import { CartContext } from '../Context/CartContext';
// import React from "react";

// import CartWidget from "./Cart"

// const Cart = () => {

//     return (
//         <nav className="div-items">
            
//             <CartWidget />
            
//         </nav>
//     )


    // const [cartToDisplay, setCartToDisplay] = useState({});

    // const {cart} = useContext(CartContext);
    // console.log(cart)

    // const {id} = useParams();
    
    // useEffect(() => {
    //     setCartToDisplay({});

    //     const getItem = () => {
    //         return new Promise((resolve) => {
    //             setTimeout(() => {
    //                 resolve(cart.find(cart => cart.id === id));
    //             }, 1000);
    //         });
    //     };
    //     getItem().then((result) => setCartToDisplay(result));
    // },
    // [id]);
    
    // return (
      

    //     <article className="article-detail">
    //         <div className="div-img">
    //             <img className="img-detail" src={"/" + cartToDisplay.img}/>
    //             <h3 className="titulo-detail">{cart.titulo}</h3>
    //             <>{cart}</>
    //         </div>
            
    //     </article>
        
    //     );
    // };
    
    // export default Cart;
    
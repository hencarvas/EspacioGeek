import React, { createContext, useState } from 'react';


export const CartContext = createContext();

const DataProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const isInCart = (newItem) => cart.filter(item => item.id === newItem.id ).length === 0;
    
    const addToCart = (newItem) => {
        if (isInCart(newItem) ) {
            setCart([...cart, newItem]);
        } else {
            alert("El articulo ye está en el carrito")
        };
    };

    const removeToCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const deleteCart = () => setCart([]);

    return(
        <CartContext.Provider value={{cart, addToCart, removeToCart, deleteCart}}>
                 {children}
    </CartContext.Provider>
    );

}

export default DataProvider;
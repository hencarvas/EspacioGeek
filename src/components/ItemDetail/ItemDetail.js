import React from "react";
import Contador from "./../Counter/Counter";


const ItemDetail = ({itemToDisplay}) => {
    return (
            <article className="section">
               <img className="imagen" src={"/" + itemToDisplay.img} alt={itemToDisplay.titulo}/>
                <h3 className="titulo">{itemToDisplay.titulo}</h3>
                <span className="precio">Precio:  ${itemToDisplay.precio}</span>
                <span className="count"> <Contador inicial={0} stock={itemToDisplay.stock}/></span>
                <button className="btn-comprar">Comprar</button>
            </article>
    );
};  
export default ItemDetail;
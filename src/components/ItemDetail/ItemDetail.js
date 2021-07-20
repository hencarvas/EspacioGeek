import React from "react";
import Contador from "./../Counter/Counter";


const ItemDetail = ({itemToDisplay}) => {
    return (
            <div className="section">
               <img className="imagen" src={"/" + itemToDisplay.img} alt={itemToDisplay.titulo}/>
                <h3 className="titulo">{itemToDisplay.titulo}</h3>
                <p className="precio">Precio:  {itemToDisplay.precio}</p>
                <p className="count"> <Contador inicial={0} stock={itemToDisplay.stock}/></p>
                <button className="btn-comprar">Comprar</button>
            </div>
    );
};  
export default ItemDetail;
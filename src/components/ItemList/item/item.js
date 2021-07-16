import React from "react";
import Contador from "./../../Counter/Counter";


const Item = ({articulo}) => {
    return (
        <article className="article">
            <div className="section">
                <img className="img" src={articulo.img} alt="img"></img>
                <h3 className="titulo">{articulo.titulo}</h3>
                <p className="precio">Precio:  {articulo.precio}</p>
                <p className="count"> <Contador inicial={0} stock={articulo.stock}/></p>

            </div>
        </article>
    );
};

export default Item;
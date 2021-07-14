import React from "react";


const Item = ({articulo}) => {
    return (
        <article className="article">
            <div className="section">
                <img className="img" src={articulo.img} alt="img"></img>
                <h3 className="titulo">{articulo.titulo}</h3>
                <p className="precio">Precio:  {articulo.precio}</p>
            </div>
        </article>
    );
};

export default Item;
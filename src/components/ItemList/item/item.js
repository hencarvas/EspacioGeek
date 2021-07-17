import React from "react";
import { Link } from "react-router-dom";



const Item = ({articulo}) => {
    return (
        <Link to={`/articulo/${articulo.id}`}>
            <article className="article">
                <div className="section">
                    <img className="img" src={articulo.img} alt={articulo.img}></img>
                    <h3 className="titulo">{articulo.titulo}</h3>
                    <p className="precio">Precio:  {articulo.precio}</p>

                </div>
            </article>
        </Link>
    );
};

export default Item;
import React from "react";
import { NavLink } from "react-router-dom";


const Item = ({articulo}) => {
    return (
        <>
        <NavLink to={`/articulo/${articulo.id}`} className="link-card">
            <article className="article">
                <div className="section">
                    <img className="img" src={articulo.img} alt={articulo.img}></img>
                    <h3 className="nom-articulo">{articulo.titulo}</h3>
                    <p className="precio">Precio:  {articulo.precio}</p>
                </div>
            </article>
        </NavLink>
        </>
    );
};

export default Item;
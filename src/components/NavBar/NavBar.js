import React from "react";
import Cart from "./Cart/Cart";
import {NavLink} from "react-router-dom";
import {Categorias} from "./../../datos/categorias.json";

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/" className="titulo-prin" >EspacioGeek</NavLink>
            <ul>
                {Categorias.map((cat) => (
                    <NavLink to={`/categoria/${cat.id}`}
                        key={cat.id}  className="nav-enlace">
                        {cat.nombre}
                    </NavLink>
                ))}
            </ul>
            <div className="div-cart">
                <Cart/>
            </div>
        </nav>
    );
};

export default NavBar;
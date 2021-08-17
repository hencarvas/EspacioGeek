import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {Categorias} from "./../../datos/categorias.json";
import { CartContext } from '../Context/CartContext';

// import {ItemCart} from "../Cart/Cart"

const NavBar = () => {
    
    const {quantityItmes} = useContext(CartContext);
    
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
                <NavLink to="/cart"> <i className="fas fa-shopping-cart item-cart"> <span className="cant-items">{quantityItmes()}</span></i></NavLink>
            </div>
        </nav>
    );
};

export default NavBar;


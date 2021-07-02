import React from "react";
import Cart from "./Cart/Cart"

const NavBar = () => {
    return (
        <nav>
            <h1>EspacioGeek</h1>
            <ul>
                <li href="#" className="nav-enlace">Comics</li>
                <li href="#" className="nav-enlace">Funkos</li>
                <li href="#" className="nav-enlace">Remeras</li>
                <li href="#" className="nav-enlace">Merchandising</li>
            </ul>
            <div className="div-cart">
                <Cart/>
            </div>
        </nav>
    );
};

export default NavBar;
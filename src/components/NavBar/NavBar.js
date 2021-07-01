import React from "react";

const NavBar = (props) => {
 
    return (
        <nav>
            <h1>EspacioGeek</h1>
            <ul>
                <li href="#" class="nav-enlace">Comics</li>
                <li href="#" class="nav-enlace">Funkos</li>
                <li href="#" class="nav-enlace">Remeras</li>
                <li href="#" class="nav-enlace">Merchandising</li>
            </ul>
            
            {/* <button onClick={props.darBienvenida}>Saludo</button> */}
        </nav>

    );
};

export default NavBar;
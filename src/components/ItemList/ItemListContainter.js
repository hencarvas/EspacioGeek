import React, { useState } from "react";
// import Contador from "../Counter/Counter";
import ItemList from "./ItemList";


const ItemListContainer = () => {
    const [displayItems, setDisplayItems] = useState([]);
    const itemsArray = [
        {
            id: 1,
            titulo: "Comic Avengers",
            img: "./img/comic_avenger.jpg",
            precio: 1800,
            stock: 5,
        },
        {
            id: 2,
            titulo: "Funko Pop - Freddie Mercury",
            img: "./img/funko_freddy.jpg",
            precio: 1900,
            stock: 6,  
        },
        {
            id: 3,
            titulo: "Remera Super Mario",
            img: "./img/remera_mario.jpg",
            precio: 999,
            stock: 5,  
        },
        {
            id: 4,
            titulo: "Juego De 3 Tazas Harry Potter",
            img: "./img/tazas_harry.jpg",
            precio: 1100,
            stock: 5,  
        }
    ]
    
    // Promesa
    const getItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemsArray)
            }, 1000)
        })
    }

    getItems().then((result) => setDisplayItems(result));


    return (
        <div className="contenedor">
       
            <ItemList displayItems={displayItems} />
        </div>
    );
     
};

export default ItemListContainer;
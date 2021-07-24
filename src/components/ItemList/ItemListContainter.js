import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Articulos} from "../../datos/Articulos.json";
import ItemList from "./ItemList";


const ItemListContainer = () => {
    const [displayItems, setDisplayItems] = useState([]);
    
    const {catId} = useParams();

    useEffect(() => {
        setDisplayItems([]);

    // Promesa
        const getItems = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    if (catId) {
                        let filterList = Articulos.filter((item) => item.categoria === catId);
                        resolve(filterList);
                    } else{
                        resolve(Articulos);
                    }
                }, 1000)
            })
        };

        getItems().then((result) => setDisplayItems(result));
    }, [catId]);

    return (
        <div className="contenedor">
            <ItemList displayItems={displayItems} />
        </div>
    );
     
};

export default ItemListContainer;
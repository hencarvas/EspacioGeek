import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Articulos} from "../../datos/Articulos.json";
import ItemDetail from "./ItemDetail";  

const DetailContainer = () => {
    const [itemToDisplay, setItemToDisplay] = useState({});

    const {id} = useParams();
    
    useEffect(() => {
        setItemToDisplay({});

        const getItem = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(Articulos.find(articulo => articulo.id === id));
                }, 2000);
            });
        };
        getItem().then((result) => setItemToDisplay(result));
    },
    [id]);
    
    return (
        <div className="contenedor">
            <ItemDetail itemToDisplay={itemToDisplay}/>
        </div>    
    );
};

export default DetailContainer;

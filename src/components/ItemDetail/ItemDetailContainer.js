import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Articulos} from "../../Articulos.json";
import ItemDetail from "./ItemDetail";  


const DetailContainer = () => {
    const [itemToDisplay, setItemToDisplay] = useState([]);

    const {id} = useParams();

    const getItem = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Articulos.find((articulo) => articulo.id.toString() === id));
            }, 1000);
        });
    };
    useEffect( () => {
        // setItemToDisplay();
        getItem().then((result) => setItemToDisplay(result));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    [id]
    );
    
    return (
        <>
        <ItemDetail itemToDisplay={itemToDisplay}/>;
        </>
    );
   
};

export default DetailContainer;

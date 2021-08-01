import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Articulos} from "../../datos/Articulos.json";
import Loader from "./../Loader/Loader"
import ItemDetail from "./ItemDetail";  

const DetailContainer = () => {
    const [itemToDisplay, setItemToDisplay] = useState({});

    const {id} = useParams();
    
    useEffect(() => {
        setItemToDisplay({});

        const getItem = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(Articulos.find(articulo => articulo.id === id));
                }, 1000);
            });
        };
        getItem().then((result) => setItemToDisplay(result));
    },
    [id]);
    
    return (
        <> { itemToDisplay ?  ( 
            <ItemDetail itemToDisplay={itemToDisplay} />
            ) : (
                <>
                <Loader />    
            </>
        )
    }
    </>
    )
};

export default DetailContainer;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import {Articulos} from "../../datos/Articulos.json";
// import Loader from "./../Loader/Loader"
import ItemDetail from "./ItemDetail";  
import {database} from "./../../firebase/firebase";


const DetailContainer = () => {
    const [itemToDisplay, setItemToDisplay] = useState([]);

    const {id} = useParams();
    
    useEffect(() => {
        setItemToDisplay([]);

        const getItem = () => {
            const articulo = database.collection("articulos");

            // return new Promise((resolve) => {
            //     setTimeout(() => {
            //         resolve(articulo.find(articulo => articulo.id === id));
            //     }, 1000);
            // });
            articulo.get().then(((articulo) => setItemToDisplay({ ...articulo.docs[0].data(), id: articulo.docs[0].id})
            // (articulo.docs.find((doc) => articulo.docs.id === (id) 
            // { return { ...doc.data(), id: doc.id}  })
            )
            )
            
            // ({ ...articulo.docs[0].data(), id: articulo.docs[0].id})
        };
        getItem();

    },   [id]);
    
    return (
        // <> { itemToDisplay ?  ( 
            <ItemDetail itemToDisplay={itemToDisplay} />
            // ) : (
                // <>
                // <Loader />    
            // </>
        )
    // }
    // </>
    // )
};

export default DetailContainer;

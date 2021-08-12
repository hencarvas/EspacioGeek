import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Loader from "./../Loader/Loader"
import ItemDetail from "./ItemDetail";  
import {database} from "./../../firebase/firebase";


const DetailContainer = () => {
    const [itemToDisplay, setItemToDisplay] = useState([]);

    const {id} = useParams();
    
    useEffect(() => {
        setItemToDisplay([]);
        
        const getItem = async (id) => {
            const doc = await database.collection('articulos').doc(id).get();
            setItemToDisplay({...doc.data()})
        }
        if(id === '') {
            setItemToDisplay(itemToDisplay)
        } else {
            getItem(id)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },   [id]);
    
    return (
        <ItemDetail itemToDisplay={itemToDisplay} id={id} />

    //     <> { itemToDisplay.length ?  ( 
           
    //         ) : (
    //             <Loader />    
    //     )
    // }
    // </>
    )
};

export default DetailContainer;


            // return new Promise((resolve) => {
            //     setTimeout(() => {
            //         resolve(articulo.find(articulo => articulo.id === id));
            //     }, 1000);
            // });
            // (articulo.docs.find((doc) => articulo.docs.id === (id) 
            // { return { ...doc.data(), id: doc.id}  })
            
            // ({ ...articulo.docs[0].data(), id: articulo.docs[0].id})

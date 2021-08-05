import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import {Articulos} from "../../datos/Articulos.json";
import ItemList from "./ItemList";
// import Loader from "./../Loader/Loader";
import {database} from "./../../firebase/firebase";

const ItemListContainer = () => {
    const [displayItems, setDisplayItems] = useState([]);
    
    const {catId} = useParams();


    useEffect(() => {
        setDisplayItems([]);

        
        const getItems = () => {
            const articulo = database.collection("articulos")
           
            // if(catId) {
            //     database.collection("articulos").where("categoria", "==", categoria)
            // } else {
            //     database.collection("articulos")
            // }
            
            
            // database.collection("articulos").where("categoria", "==", categoria);
            

            articulo.get().then((result) => setDisplayItems(result.docs.map((doc) => {
                return { ...doc.data(), id: doc.id};
                })
            )
            );
            
            // return new Promise((resolve) => {
            //     setTimeout(() => {
            //         if (catId) {
            //             let filterList = Articulos.filter((item) => item.categoria === catId);
            //             resolve(filterList);
            //         } else{
            //             resolve(articulo);
            //         }
            //     }, 1000)
            // })
      
            

           

            // console.log(articulo)
        };

        
        getItems();
    }, [catId]);

    return (
            <div className="contenedor">
                <ItemList displayItems={displayItems} />
            </div>
        // <>
        // {
        //     displayItems.length ? (
        //     ) : (
        //         <Loader/> 
        //     )
        // }
        // </>
    );
     
};

export default ItemListContainer;
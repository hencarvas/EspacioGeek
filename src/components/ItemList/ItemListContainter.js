import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
// import Loader from "./../Loader/Loader";
import {database} from "./../../firebase/firebase";

const ItemListContainer = () => {   
    const [displayItems, setDisplayItems] = useState([]);
    
    const {catId} = useParams();

    useEffect(() => {
        setDisplayItems([]);        
        
        const getItems = () => {
            if( catId ) { 
                    const categoria = database.collection("articulos").where("categoria", "==", catId)
                    categoria.get().then((query) => setDisplayItems(query.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                 })
                 ))
                } else {   
                    const articulo = database.collection("articulos")
                    articulo.get().then((result) => setDisplayItems(result.docs.map((docu) => {
                    return { ...docu.data(), id: docu.id};
                    })  
                    ));         
                }
            };
            
        getItems(catId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    ///////////////////
    // articulo.get().then((result) => setDisplayItems(result.docs.map((doc) => {
    //     return { ...doc.data(), id: doc.id};
    // })
    // )
    // );

//////////////////////////7
        // const getItems = () => {
        //     const articulo = database.collection("articulos")
           
        //     articulo.get().then((result) => setDisplayItems(result.docs.map((doc) => {
        //         return { ...doc.data(), id: doc.id};
        //         })
        //     )
        //     );
        // }

////////////////////////////////

            
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

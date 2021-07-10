import React, { useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemList/ItemListContainter"
import Contador from './components/Counter/Counter';


const App = () => {
  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListContainer />
        
      </div>
    </>
  );
};

export default App;
 
/* <ItemListContainer /> */
  /* <div>
      <b>{articulos.titulo}</b>
      <small>{articulos.img}</small>
      <p>{articulos.precio}</p>
    </div> */

/* <ItemListContainer greeting="Encuentra tus articulos favoritos!!"/> */
        /* <Contador count ="0" inicial={1} stock={10}/> */
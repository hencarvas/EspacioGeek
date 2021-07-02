import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemList/ItemListContainter"

const App = () => {
  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting="Encuentra tus articulos favoritos!!"/>
      </div>
    </>
  );
}

export default App;

import './App.css';
import NavBar from "./components/NavBar/NavBar"

function App() {
  const darBienvenida = () => alert("Bienvenido");
  return (
    <>
      <div className="App">
        <NavBar nombreTienda="Espacio Geek" />
        {/* <h1>Hola mundo</h1>  */}
      </div>
    </>
  );
}

export default App;

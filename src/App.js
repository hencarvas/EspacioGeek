import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainter";
import DetailContainer from './components/ItemDetail/ItemDetailContainer';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/articulo/:id/">
            <DetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
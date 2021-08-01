import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProvider from './components/Context/CartContext';
import ItemListContainer from "./components/ItemList/ItemListContainter";
import DetailContainer from './components/ItemDetail/ItemDetailContainer';
import DetailCart from './components/Cart/setCart'
import NavBar from './components/NavBar/NavBar';
// import ItemCart from './components/Cart/Cart';


const App = () => {
  return (
     
    <CartProvider >
      <BrowserRouter>
        <NavBar />
        <Switch>
        <div className="container">
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/cart/">
            <DetailCart />
          </Route>
          <Route exac path="/categoria/:catId/">
            <ItemListContainer />
          </Route>
          <Route exact path="/articulo/:id/">
            <DetailContainer />
          </Route>
          </div>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;

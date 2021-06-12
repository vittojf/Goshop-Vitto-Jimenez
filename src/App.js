import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Cart from './Components/Cart/Cart';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemOrderContainer from './Components/ItemOrderContainer/ItemOrderContainer';
import NavBar from './Components/Navbar/Navbar';
import {CartProvider} from './context/cartContext'

function App() {
  
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    <Switch>
    


      <Route path="/item/:id">
        <ItemDetailContainer/>
      </Route>

      <Route path="/category/:categoryId">
        <ItemListContainer />
      </Route>
 
      <Route path="/cart">
        <Cart/>

      </Route>

      <Route path="/orders">
        <ItemOrderContainer/>
      </Route>
      
      
      <Route path="/">
    <ItemListContainer greeting="BIENVENIDO A GOSHOP"/>

      </Route>

    
      

    </Switch>
    </BrowserRouter>
    </CartProvider>

   
  );
}

export default App;

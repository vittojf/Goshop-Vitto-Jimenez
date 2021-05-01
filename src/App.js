import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
    


      <Route path="/item/:id">
        <ItemDetailContainer/>
      </Route>

      <Route path="/category/:categoryId">
        <ItemListContainer />
      </Route>
      
      <Route path="/">
    <ItemListContainer greeting="BIENVENIDO A GOSHOP"/>

      </Route>
      
      

    </Switch>
    </BrowserRouter>
   
  );
}

export default App;

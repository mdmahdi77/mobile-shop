import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home';
import CheckOut from './CheckOut/CheckOut';
import Login from './Login/Login';
import AddProduct from './AddProduct/AddProduct';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './PrivateRout/PrivateRoute';
import Inventory from './Inventory/Inventory';
import Order from './Order/Order';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>
            <PrivateRoute path="/admin">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <Route path="/checkOut">
              <CheckOut></CheckOut>
            </Route>
            <PrivateRoute path="/productCheckOut/:checkOutId">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/productOrder/:orderId">
              <Order></Order>
            </PrivateRoute>
            <Route path="/logIn">
              <Login></Login>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider> 
  );
}

export default App;

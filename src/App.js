import React from "react";
import Topbar from "./Components/Topbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./app.css";
import Home from "./Pages/home/Home";
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/user/User";
import NewUser from "./Pages/newUser/NewUser";
import ProductList from "./Pages/productList/ProductList";
import Product from "./Pages/product/Product";
import NewProduct from "./Pages/newProduct/NewProduct";
//import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          {
            user ? <Redirect to="/"/> : <Login />
          }
          
        </Route>
        {user && (
          <>
        <Topbar />
        <div className="container">
          <Sidebar />

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/users">
            <UserList />
          </Route>

          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/movies">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </div>
        </>
        )}
      </Switch>
    </Router>
  );
}

export default App;

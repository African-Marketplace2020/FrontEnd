import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Login_Register from "./components/login_register/login_register"
import ItemList from "./components/ItemList/ItemList";
import AddItemForm from "./components/AddItemForm/AdditionalForm";
import PrivateRoute from "./components/PrivateRoute";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login_Register} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/item-list" component={ItemList} />
        <PrivateRoute path="/item-form" component={AddItemForm} />
      </Switch>
   
    </div>
  );
}

export default App;

import React,{useState} from 'react'
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Register from "./register/Register";
import Login from "./login/Login";

import Home from "../Home/Home";

import "../App.css"
import Sell from '../Home/Sell/Sell';
import Posts from '../Home/Post/Posts';
import Feed from '../Home/Feed/Feed';


const Routes = () => {

    

    return (
        <div>
             <Router>
    <Switch>

     <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/createpost'>
        <Sell />
      </Route>
      <Route  path='/feed/:category'>
          <Feed />
      </Route>
      <Route path ='/login'>
          <Login />
      </Route>
      <Route path ="/register">
          <Register />
      </Route>


    </Switch>
    </Router>
      
        </div>
    )
}

export default Routes










 

import { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from './Home';
import Integrantes from './Integrantes';
import Shopping from "./Shopping";


class Menu extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/shopping">Shopping</Link> 
                        </li>
                        <li>
                            <Link to="/integrantes">Integrantes</Link>
                        </li>
                    </ul>
                </div>
                <Switch>
                   <Route exact path='/'>
                       <Home></Home>
                   </Route>
                   <Route exact path='/integrantes'>
                       <Integrantes></Integrantes>
                   </Route>
                   <Route exact path='/shopping'>
                       <Shopping></Shopping>
                   </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Menu;
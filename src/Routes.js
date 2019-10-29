import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Favorites from './components/Favorites';
import Join from './components/Join';
import ScrollToTop from 'react-router-scroll-top';
import BeerItem from './components/BeerItem';

export default class Routes extends Component{
    render(){
        return(
            <Router>
               <ScrollToTop>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/favorites" component={Favorites} />
                        <Route exact path="/joinup" component={Join} />
                        <Route exact path="/beeritem" component={BeerItem} />
                    </Switch>
                </ScrollToTop> 
            </Router>
        )}
}

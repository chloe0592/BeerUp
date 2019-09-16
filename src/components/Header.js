import React, {Component} from 'react';
import symbol from '../assets/symbol.svg';
import logo from '../assets/logo.svg';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 fixed-top header-container">
          <div className="my-0 mr-md-auto">
            <img src={symbol} alt="Beer logo"/>
            <img src={logo} alt="Beerup logo"/></div>
          <nav className="my-2 my-md-0 mr-md-3">
            <Link className="p-2 text-light" to="/">Home</Link>
            <Link className="p-2 text-light" >Favourites</Link>
            <Link className="btn btn-outline-primary join" >JOIN</Link>
          </nav>
        </div>
    );
  }
}

export default Header;
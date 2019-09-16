import React, {Component} from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import beers_in_crate from '../assets/illustration.svg';
import card_draft from '../assets/card draft.svg';
import card_wireframe from '../assets/card wireframe.svg';
import beer_crate from '../assets/crate.svg';
import {Link} from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="main-container">
          <div className="black-container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="title-text">
                  <h6>THE BEERSTER PRO 2.0</h6>
                  <h1>JOIN OUR FAMOUS BEERUP</h1>
                  <Link className="btn btn-outline-primary header-link join-beerup-btn" to="/">JOIN BEERUP</Link>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <img src={beers_in_crate} alt="beers in crate" />
              </div>
            </div>
          </div>
          <div className="white-container">
          <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 bolder-font">
              <p>BEER</p>
              <button type="button" class="btn-img" data-toggle="modal" data-target="#exampleModal">
                <img src={card_draft} alt="card draft" />
              </button>
              <img src={card_wireframe} alt="card wireframe" />
              <img src={card_wireframe} alt="card wireframe" />
              <img src={card_wireframe} alt="card wireframe" />
              <img src={card_wireframe} alt="card wireframe" />
              <img src={card_wireframe} alt="card wireframe" />
              <img src={card_wireframe} alt="card wireframe" />
              <img src={card_wireframe} alt="card wireframe" />
            </div>

            <div className="col-12 col-md-4 bolder-font container-crate">
              <p>CRATE</p>
              <nav className="nav">
                <a class="nav-link active nav-crate" href="#">ONE</a>
                <a class="nav-link nav-crate" href="#">TWO</a>
                <a class="nav-link nav-crate" href="#">THREE</a>
              </nav>
              <img src={beer_crate} alt="beer crate" />
              <p class="quote">
                Add a beer to have it appear in the crate.
              </p>
              <p class="quote-author">
                - Captain Obvious
              </p>
            </div>
          </div>
        </div>

          </div>

         
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
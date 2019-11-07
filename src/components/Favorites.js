import React, {Component} from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import FavoriteBeerItem from './FavoriteBeerItem';
import beers_in_crate from '../assets/illustration.svg';
import beer_crate from '../assets/crate.svg';
import {Link} from 'react-router-dom';
import { Row } from 'reactstrap';


class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteBeers: JSON.parse(localStorage.getItem("localStorageBeers"))
    };
    // console.log('favorite', this.state.favoriteBeers);
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="main-container">
          <div className="black-container">
            <div className="row row-1">
              <div className="col-12 col-md-6 title-text">
                <h1>FAVORITES</h1>
              </div>
              <div className="col-12 col-md-6">
                <img src={beers_in_crate} alt="beers in crate" />
              </div>
            </div>
          </div>
          <div className="gray-container">
            <div className="row row-2">
              <div className="col-12 col-md-8">
                <p className="bolder-font">My favorite beers</p>
                <Row>
                  {
                    this.state.favoriteBeers.map((beer, index) => {
                      if (this.state.favoriteBeers[index].favorite === true) {
                        return <FavoriteBeerItem key={index} beer={beer} />;
                        } else {
                        console.log ("You don't have any favorites");
                        }  
                    })
                  }
                </Row>
              </div>
              <div className="col-12 col-md-4 crate-container">
                <p className="bolder-font">Crate</p>
                <div className="crate-img">
                  <nav className="crate-navigation">
                    <Link className="p-2 " to="#">ONE</Link>
                    <Link className="p-2 " to="#">TWO</Link>
                    <Link className="p-2 " to="#">THREE</Link>
                  </nav>
                  <img src={beer_crate} alt="beer crate" />
                </div>
                <p className="quote">
                  Add a beer to have it appear in the crate.
                </p>
                <p className="quote-author">
                  - Captain Obvious
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Favorites;
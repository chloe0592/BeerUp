import React, {Component} from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import BeerItem from './BeerItem';
import beers_in_crate from '../assets/illustration.svg';
import card_wireframe from '../assets/card wireframe.svg';
import beer_crate from '../assets/crate.svg';
import {Link} from 'react-router-dom';
import { Row } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount = async (event) => {
    await fetch("https://api.punkapi.com/v2/beers")
    .then(async (response) => {
      const json = await response.json();
      // console.log(json);
      this.setState({ 
        beers: json
      })
      console.log('state:', this.state.beers);
      
    }).catch(e => {
      console.log(e);
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="main-container">
          <div className="black-container">
            <div className="row row-1">
              <div className="col-12 col-md-6">
                <div className="title-text">
                  <h6>THE BEERSTER PRO 2.0</h6>
                  <h1>JOIN OUR <br></br> FAMOUS <br></br> BEERUP</h1>
                  <Link className="btn btn-outline-primary header-link join-beerup-btn" to="/joinup">
                    JOIN BEERUP
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <img src={beers_in_crate} alt="beers in crate" />
              </div>
            </div>
          </div>
          <div className="gray-container">
            <div className="row row-2">
              <div className="col-12 col-md-8">
                <p className="bolder-font">Beer</p>
                <Row >
                  {this.state.beers.map((beer, index) =>
                    <BeerItem key={index} beer={beer}/>)
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

export default Home;
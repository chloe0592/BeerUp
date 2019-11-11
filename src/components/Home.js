import React, {Component} from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import BeerItem from './BeerItem';
import beers_in_crate from '../assets/illustration.svg';
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

  componentDidMount = async () => {
    // Get beers from local storage if exist
    const cachedBeers = JSON.parse(localStorage.getItem("localStorageBeers"));
    if (cachedBeers) {
      this.setState({ 
        beers: cachedBeers
      });
      console.log('cachedBeers:', cachedBeers);
    } else {
      // If beers from local storage don't exist, make api call
      await fetch("https://api.punkapi.com/v2/beers")
        .then(async (response) => {
        const jsonBeers = await response.json();
        // Add favorite parameter to each new beer from api call
        for(var i=0; i<jsonBeers.length; i++) {
          jsonBeers[i].favorite = false;
        }
        // Store new beers from api call into local storage
        localStorage.setItem("localStorageBeers", JSON.stringify(jsonBeers));
        this.setState({ 
          beers: jsonBeers
        });
        console.log('beers:', this.state.beers);
      }).catch(e => {
        console.log(e);
      });
    }
  }

    // Update state
  updateBeers = (cachedBeers) => {
    this.setState({ 
      beers: cachedBeers
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="main-container">
          <div className="black-container">
            <div className="row row-1">
              <div className="col-12 col-md-6 text-col-container">
                <div className="title-text">
                  <h6>THE BEERSTER PRO 2.0</h6>
                  <h1>JOIN OUR <br></br> FAMOUS <br></br> BEERUP!</h1>
                  <Link className="btn btn-outline-primary header-link join-beerup-btn" to="/joinup">
                    JOIN BEERUP
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6 img-col-container">
                <img className="beers-in-crate-img" src={beers_in_crate} alt="beers in crate" />
              </div>
            </div>
          </div>
          <div className="gray-container">
            <div className="row row-2">
              <div className="col-12 col-md-8 beers-container">
                <p className="bolder-font">Beer</p>
                <Row >
                  {
                    this.state.beers.map((beer, index) => {
                      return <BeerItem key={index} beer={beer} callbackUpdateBeers={this.updateBeers}/>
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

export default Home;
import React, {Component} from 'react';
import symbol from '../../assets/symbol.svg';
import logo from '../../assets/logo.png';
import facebook_logo from '../../assets/facebook.png';
import twitter_logo from '../../assets/twitter.png';
import linkedin_logo from '../../assets/Linked In.png';
import pinterest_logo from '../../assets/pininterest.png';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid text-center text-md-left footer-container">

        <div className="row footer-row">
          <div className="col-md-4 mt-md-0 mt-3">
            <div className="my-0 mr-md-auto">
              <img src={symbol} alt="Beer logo" className="beer-logo-img"/>
              <img src={logo} alt="Beerup logo"/>
            </div>
          </div>

          <div className="col-md-4 mb-md-0 mb-3">
            <nav className="my-2 my-md-0 mr-md-3 text-center">
              <Link className="p-2 text-light footer-text" to="/">HOME</Link>
              <Link className="p-2 text-light footer-text" to="/favorites">FAVORITES</Link>
              <Link className="p-2 text-light footer-text" to="/joinup">JOIN</Link>
            </nav>
          </div>
          <div className="col-md-4 mb-md-0 mb-3 social-icons text-center">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
              <img src={facebook_logo} alt="facebook logo" className="social-media-logo"/>
            </a>
            <a href="https://www.twitter.com" target="_blank"  rel="noopener noreferrer" >
              <img src={twitter_logo} alt="twitter logo" className="social-media-logo"/>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" >
              <img src={linkedin_logo} alt="linkedin logo" className="social-media-logo"/>
            </a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" >
              <img src={pinterest_logo} alt="pinterest logo" className="social-media-logo"/>
            </a>
          </div>
        </div>
        <div className="copyright">
          <div className="text-center py-3 text-light">
            © 2019 All Rights Reserved.
          </div>
        </div>

      </div>
    );
  }
}

export default Footer;
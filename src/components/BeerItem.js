import React, {Component} from 'react';
import unselected_item from '../assets/radio unselected.svg';


class BeerItem extends Component {
  constructor(props) {
    super(props);
    console.log('props', this.props.beer);
  }


  render() {
    return ( 
        <div className="beer-item-container">
          <button className="beer-item-btn">
            <div className="unselected-container">
              <img className="unselected-img" src={unselected_item} alt="unselected" />
            </div>
            <img className="beers-img" src={this.props.beer.image_url} alt="beers" />
            <div className="beer-item-info">
                <p className="beer-item-name">{this.props.beer.name} </p>
                <div className="item-spec-container">
                  <div className="beer-item-spec1"> IBU: <br></br> ABV: </div>
                  <div className="beer-item-spec2">{this.props.beer.ibu} <br></br>{this.props.beer.abv}</div>
                </div>
            </div>
          </button>
        </div>
    );
  }
}

export default BeerItem;
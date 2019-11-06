import React, {Component} from 'react';
import heart_solid from '../assets/heart solid.svg';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class FavoriteBeerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show : false,
      favorite: this.props.beer.favorite
    }
    console.log('is favorite:', this.props.beer.favorite);

  }

  toggleModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  toggleFavorite = () => {
    this.setState({
      favorite: !this.props.beer.favorite
    })}
 

  render() {

    return ( 
        <div className="beer-item-container">
          <button className="beer-item-btn" onClick={this.toggleModal}>
            <div className="selecting-container">
              <img className="heart-selecting" src={heart_solid} alt="heart outline" />
            </div>
            <div className="row-beer-item">
              <div className="column1-beer-item">
                <img className="beers-img" src={this.props.beer.image_url} alt="beers" />
              </div>
              <div className="column2-beer-item">
                <div className="beer-item-info">
                  <p className="beer-item-name">{this.props.beer.name} </p>
                  <div className="item-spec-container">
                    <div className="beer-item-spec1"> IBU: <br></br> ABV: </div>
                    <div className="beer-item-spec2">{this.props.beer.ibu} <br></br>{this.props.beer.abv}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal */}
            <Modal isOpen={this.state.show} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>
                <div>
                  <button className="heart-btn-modal">
                    <img src={heart_solid} onClick={this.toggleFavorite} alt="heart outline" />
                  </button>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="row-modal">

                  <div className="column1-modal">
                    <div className="beer-img-modal">
                      <img className="beers-img-modal" src={this.props.beer.image_url} alt="beers" />
                    </div>
                  </div>
                  
                  <div className="column2-modal">
                    <div className="beer-info-container-modal">
                      <div className="item-name-modal">
                        {this.props.beer.name}
                      </div>
                      <div className="item-spec-container">
                        <div className="beer-item-spec1"> IBU: <br></br> ABV: </div>
                        <div className="beer-item-spec2">{this.props.beer.ibu} <br></br>{this.props.beer.abv}</div>
                      </div>
                      <div className="beer-description-modal">
                        {this.props.beer.description}
                      </div>
                    </div> 
                  </div>  
                </div>
              </ModalBody>

              <ModalFooter>
                <div className="crate-btn-modal">
                  <button className="join-beerup-btn">ADD TO CRATE</button>{' '}
                </div>
              </ModalFooter> 
            </Modal>
            {/* Modal */}

          </button>
        </div>
    );
  }
}

export default FavoriteBeerItem;
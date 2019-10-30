import React, {Component} from 'react';
import unselected_item from '../assets/radio unselected.svg';
import heart_outline from '../assets/heart outline.svg';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class BeerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show : false
    }
    console.log('props', this.props.beer);
  }

  toggleModal = e => {
    this.setState({
      show: !this.state.show
    });
  };


  render() {
    return ( 
        <div className="beer-item-container">
          <button className="beer-item-btn" onClick={this.toggleModal}>
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

                <Modal isOpen={this.state.show} toggle={this.toggleModal}>
                  <ModalHeader toggle={this.toggleModal}>
                    <div>
                      <button className="heart-btn-modal">
                        <img src={heart_outline} alt="heart outline" />
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
                      <button className="join-beerup-btn" >ADD TO CRATE</button>{' '}
                    </div>
                  </ModalFooter>

                  
                </Modal>

            </div>
          </button>
        </div>
    );
  }
}

export default BeerItem;
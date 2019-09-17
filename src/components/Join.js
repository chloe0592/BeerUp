import React, {Component} from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import beers_in_crate from '../assets/illustration.svg';
import {  CustomInput, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Join extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="main-container">
          <div className="black-container">
            <div className="row row-1">
              <div className="col-12 col-md-6 title-text">
                <h1>JOIN UP!</h1>
              </div>
              <div className="col-12 col-md-6">
                <img src={beers_in_crate} alt="beers in crate" />
              </div>
            </div>
          </div>
          <div className="gray-container">
            <div className="form-container">
              <div className="text-join">
                <p>Quick, join up before we<br></br>drink all the beer!</p>
              </div>
              <div className="form">
              <Form>
                <p>PERSONAL INFORMATION</p> 
                <FormGroup>
                  <Input type="name" name="name" id="name" placeholder="Full name" />
                </FormGroup>
                <p>CONTACT INFORMATION</p> 
                <FormGroup>
                  <Input type="email" name="email" id="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                  <Input type="number" name="number" id="number" placeholder="Phone number" />
                </FormGroup>
                <FormGroup className="rsvp-checkboxes">
                  <p>RSVP</p> 
                  <CustomInput type="radio" id="rsvp1" name="radio" label="I'm coming!" />
                  <CustomInput type="radio" id="rsvp2" name="radio" label="Maybe?" />
                  <CustomInput type="radio" id="rsvp3" name="radio" label="Can't make it" />
                </FormGroup>
                <FormGroup>
                  <Input type="textarea" name="text" id="textarea" placeholder="Something you'd like to add?"  />
                </FormGroup>
                
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="checkbox1" />{' '}
                      Let me know about the future beerups!
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="checkbox2"/>{' '}
                      Remind me one day before this beerup
                  </Label>
                </FormGroup>
                <div className="joinup-btn-container">
                  <Button className="joinup-beerup-btn">
                    JOIN UP
                  </Button>
                </div>
              </Form>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Join;
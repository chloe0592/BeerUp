import React, {Component} from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import beers_in_crate from '../assets/illustration.svg';
import {  CustomInput, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';

class Join extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      number: "",
      textarea: "",
      rsvp: "option1",
      futureInfo: false,
      reminder: false,
      redirect: false
    };
  }

  handleChange = event => {
   const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox ? event.target.checked : event.target.value
    });
  }

  handleOptionChange= (changeEvent) => {
    this.setState({
      rsvp: changeEvent.target.value
    });
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.name==="" || this.state.email==="") {
      swal({
        title: "Please, fill out the required fields (your full name and email)",
        icon: "warning",
        timer: 3000
      });
    } else {
      swal({
        title: "Whoohoo! Welcome to the Beerup family!",
        icon: "success",
        button: "Aww yiss!",
        timer: 3000
      });
      return this.setRedirect();
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/favorites' />
    }
  
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
                  <Input 
                    name="name"
                    type="name"
                    id="name"
                    value={this.state.name} 
                    onChange={this.handleChange} 
                    placeholder="Full name" 
                  />
                </FormGroup>

                <p>CONTACT INFORMATION</p> 
                <FormGroup>
                  <Input 
                    name="email"
                    type="email"
                    id="email" 
                    value={this.state.email}
                    onChange={this.handleChange} 
                    placeholder="Email" 
                  />
                </FormGroup>

                <FormGroup>
                  <Input 
                    name="number"
                    type="text"
                    id="number" 
                    value={this.state.number}  
                    onChange={this.handleChange}
                    placeholder="Phone number (optional)" 
                  />
                </FormGroup>

                <FormGroup className="rsvp-checkboxes" >
                  <p>RSVP</p> 
                  <CustomInput 
                    name="rsvp1"
                    type="radio" 
                    id="rsvp1" 
                    value="option1"
                    checked={this.state.rsvp === "option1"} 
                    onChange={this.handleOptionChange}
                    label="I'm coming!" 
                  />
                  <CustomInput 
                    name="rsvp2"
                    type="radio" 
                    id="rsvp2" 
                    value="option2"
                    checked={this.state.rsvp === "option2"}
                    onChange={this.handleOptionChange}
                    label="Maybe?" 
                  />
                  <CustomInput 
                    name="rsvp3" 
                    type="radio" 
                    id="rsvp3" 
                    value="option3"
                    checked={this.state.rsvp === "option3"} 
                    onChange={this.handleOptionChange}
                    label="Can't make it" 
                  />
                </FormGroup>

                <FormGroup>
                  <Input 
                    name="textarea"
                    type="textarea"
                    id="textarea" 
                    value={this.state.textarea}
                    onChange={this.handleChange}  
                    placeholder="Something you'd like to add? (optional)"  
                  />
                </FormGroup>
                
                <FormGroup check>
                  <Label check>
                    <Input 
                      name="futureInfo"
                      type="checkbox" 
                      id="checkbox1"
                      checked={this.state.futureInfo}
                      onChange={this.handleChange} 
                    />{' '}
                    Let me know about the future beerups!
                  </Label>
                </FormGroup>

                <FormGroup check>
                  <Label check>
                    <Input 
                      name="reminder"
                      type="checkbox" 
                      id="checkbox2"
                      checked={this.state.reminder}
                      onChange={this.handleChange}
                    />{' '}
                    Remind me one day before this beerup
                  </Label>
                </FormGroup>

                <div className="joinup-btn-container">
                  <Button 
                    className="joinup-beerup-btn"
                    onClick={this.handleSubmit}
                  >
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
import React, { Component } from 'react'
import Tesla from './Tesla';
import Carloan from './Carloan';


export default class Step1 extends Component {

    
    state ={
        step: 1,
        make: '',
        model: '',
        car_miles: '',
        year: '',
        price: '',
        term_length: '',
        yearly_mile: '',


    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
      }

      nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
      }

      handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      }

  render() {
const { step } = this.state;
const { make, model, car_miles, year, price, term_length, yearly_mile } = this.state;
const values = {make, model, car_miles, year, price, term_length, yearly_mile }



switch (step) {
case 1: 
return(
    <Tesla
    nextStep={this.nextStep}
    />
   
    
)
case 2:
    return (
        <Carloan
        prevStep={this.prevStep}
        />
    )

default: 
     // do nothing
}
 
  }
}

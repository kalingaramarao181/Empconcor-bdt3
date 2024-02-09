import { Component } from "react";
import axios from "axios"
import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import './index.css';


class HRRegister extends Component {

  
  state = {
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    country: "",
    compeny: "",
    userData: {},
  }

  onChangeName = (event) => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }

  onChangePassword = (event) => {
    this.setState({password: event.target.value})
  }

  onChangeNumber = (event) => {
    this.setState({phoneNo: event.target.value})
  }

  onChangeCountry = (event) => {
    this.setState({country: event.target.value})
  }

  onChangeCompeny = (event) => {
    this.setState({compeny: event.target.value})
  }

  submitRegesterFarm = (event) => {
    event.preventDefault()
    const {name, email, password, phoneNo, country, compeny} = this.state
    console.log(name, email, password, phoneNo, country, compeny)
    this.setState({name: "", email: "", password: "", phoneNo: "", country: "", compeny: ""})

    axios.post("http://localhost:5000/admin" , {name, email, password, phoneNo, country, compeny})
    .then(res => {
      console.log(res)
      
    })
    .catch(err => console.log(err))
    console.log("on submit button clicked")

    alert("User Added Successfully")
    
  }

  render(){
    const {name, email, password, phoneNo, country, compeny} = this.state
  return (
    <>
    <div id='register' className='hr-Rt-bg2'>
    <farm className='hr-Rt-bg1' onSubmit={this.submitRegesterFarm}>
        <h1 className='Rt-head1'>HR Regester Farm</h1>
        <div className='Rt-card1'>
          <input className='Rt-input1' value={name} type="text" onChange={this.onChangeName} placeholder='   Enter Your Full Name' /><br/>
          <input className='Rt-input1' value={email} type="text" onChange={this.onChangeEmail} placeholder='   Enter Your Email' /><br/>
          <input className='Rt-input1' value={password} type="password" onChange={this.onChangePassword} placeholder='   Enter Your  Password' /><br/>
          <input className='Rt-input1' value={phoneNo} type="text" onChange={this.onChangeNumber} placeholder='   Enter Your Phone Number' /><br/>
          <input className='Rt-input1' value={country} type="text" onChange={this.onChangeCountry} placeholder='   Enter Your Country Name' /><br/>
          <input className='Rt-input1' value={compeny} type="text" onChange={this.onChangeCompeny} placeholder='   Enter Your Compeny Name' /><br/>
          <button type="submit" onClick={this.submitRegesterFarm} className='Rt-button1'>Submit</button>
          <p className='Rt-para1'>By clicking "Submit" Register your Data In our Website</p>
        </div>
    </farm>
    </div>
  </>
  )
}
}

export default HRRegister
import { Component } from "react";
import axios from "axios"
import React from 'react'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import './index.css';


class HRRegister extends Component {

  
  state = {
    name: "",
    email: "",
    password: "",
    phoneNo: "",
    compeny: "",
    userData: {},
    loginEmail: "",
    loginPassword: "",
    errorMsg: "",
    farmStatus: true,
  }

  onChangeLoginEmail = (event) => {
    this.setState({loginEmail: event.target.value})
  }

  onChangeLoginPassword = (event) => {
    this.setState({loginPassword: event.target.value})
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

  onClickLogin = () => {
    this.setState((prevState) => ({farmStatus: !prevState.farmStatus}))
  }

  submitLoginFarm =async event => {
    const {history} = this.props
    event.preventDefault()
    const {loginEmail, loginPassword} = this.state
    axios.post("http://localhost:5000/hrlogin", {loginEmail, loginPassword})
    .then(res => {
      if (res.data){
        alert("Login Successfully")
        history.replace("/admin")
      }else{
        this.setState({errorMsg: "User Not Found Please Enter valid Credentials"})
        alert("User Not Found Please Enter valid Credentials")
      }
    }).catch(err => this.setState({errorMsg: err}))
    this.setState({loginEmail: "", loginPassword: ""})
  }


  submitRegesterFarm = (event) => {
    event.preventDefault()
    const {name, email, password, phoneNo, compeny} = this.state
    console.log(name, email, password, phoneNo, compeny)
    this.setState({name: "", email: "", password: "", phoneNo: "", compeny: ""})
    console.log("SUBMITTED")

    axios.post("http://localhost:5000/hrdetails" , {name, email, password, phoneNo, compeny})
    .then(res => {
      console.log(res.data)
      alert("HR Regestered Successfully")
    })
    .catch(err => console.log(err))
    console.log("on submit button clicked")
  }

  render(){
    const {name, email, password, phoneNo, compeny, farmStatus, loginEmail, loginPassword} = this.state
  return (
          <>
            <div className='AD-card1 d-flex flex-row'>
            {farmStatus ? 
              <form className='AD-card21' onSubmit={this.submitRegesterFarm}> 
                <h1 className='AD-head1'>HR REGISTRATION</h1> 
                <input type="text" className='AD-inputbox' value={name} onChange={this.onChangeName} placeholder='Enter Your User Name'/>
                <input type="text" className='AD-inputbox' value={email} onChange={this.onChangeEmail} placeholder='Enter Your Email'/>
                <input type="text" className='AD-inputbox' value={phoneNo} onChange={this.onChangeNumber} placeholder='Enter Your Email'/>
                <input type="password" className='AD-inputbox' value={password} onChange={this.onChangePassword} placeholder='Enter Your Password'/>
                <input type="text" className='AD-inputbox' value={compeny} onChange={this.onChangeCompeny} placeholder='Enter Your Company Name'/>
                <button type="submit" className='AD-button1'>SUBMIT</button>
                <button type="button" onClick={this.onClickLogin} className='AD-button-sb'>Login</button>
              </form> : <form className='AD-card21' onSubmit={this.submitLoginFarm}> 
                <h1 className='AD-head1'>HR Login</h1>
                <input type="text" className='AD-inputbox' value={loginEmail} onChange={this.onChangeLoginEmail} placeholder='Enter Your Email'/>
                <input type="password" className='AD-inputbox' value={loginPassword} onChange={this.onChangeLoginPassword} placeholder='Enter Your Password'/>
                <button type="submit" className='AD-button1'>Login</button>
                <button type="button" onClick={this.onClickLogin} className='AD-button-sb'>Signup</button>
              </form>}
              <div className='AD-card17'>
                <h1 className='AD-head12'>DASHBOARD</h1>
                <div className='AD-para16'> 
                <ul>
                  <li>APPLICATIONS</li>
                  <li>INTERVIEW</li>
                  <li>OFFER - ACCEPTED</li>
                  <li>ONBORDING</li>
                </ul>
                <Link to="/admin">
                  <button className='AD-button2'>view more</button>
                </Link>
              </div>
              </div>
            </div> 
          </>
  )
}
}

export default HRRegister
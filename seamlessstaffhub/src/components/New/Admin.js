import React from 'react'
import './Admin.css'
import {Link}  from 'react-router-dom'

const Admin = () => {
  return (
    <>
    <div className='AD-card1 d-flex flex-row'>
      <div className='AD-card21'> 
        <h1 className='AD-head1'>HR REGISTRATION</h1> 
        <input type="text" className='AD-inputbox' placeholder='   Enter Your User Name'/><br/>
        <input type="text" className='AD-inputbox' placeholder='   Enter Your Email'/><br/>
        <input type="text" className='AD-inputbox' placeholder='   Enter Your Password'/><br/>
        <input type="text" className='AD-inputbox' placeholder='   Enter Your Company Name'/><br/>
        <button className='AD-button1'>SUBMIT</button>
      </div>
      <div className='AD-card17'>
        <h1 className='AD-head12'>DASHBOARD</h1>
        <p className='AD-para17'> 
        <ul>
          <li>APPLICATIONS</li>
          <li>INTERVIEW</li>
          <li>OFFER - ACCEPTED</li>
          <li>ONBORDING</li>
        </ul>
        <Link to="/Employe">
          <button className='AD-button2'>view more</button>
        </Link>
      </p>
    </div>
  </div> 
  </>
  )
}

export default Admin
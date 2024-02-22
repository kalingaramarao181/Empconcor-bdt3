import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './index.css'
import {BrowserRouter, Switch, Route} from "react-router-dom"
const EmployeAttendance = () => {
  const [employe,setEmploye] = useState([])
  const [attendanceData,setAttendanceData] = useState([])
  const [everyDayAttendanceData, setEveryDayAttendanceData] = useState([])
  const [btnStatus, setBtnStatus] = useState()
  const [empId, setEmpId] = useState()
  const [empData, setEmpData] = useState()

  useEffect(()=>{
    axios.get('http://localhost:5000/employedata')
    .then(res => setEmploye(res.data))
    .catch(err => console.log(err));
  },[])

  useEffect(()=>{
    axios.get('http://localhost:5000/empattendancetoday')
    .then(res => setAttendanceData(res.data))
    .catch(err=>console.log(err));
  },[])

  useEffect(()=>{
    axios.get('http://localhost:5000/empattendanceeveryday')
    .then(res => setEveryDayAttendanceData(res.data))
    .catch(err=>console.log(err));
  },[])

  useEffect(()=>{
    axios.get("http://localhost:5000/emp-details/"+ empId)
    .then(res => setEmpData(res.data))
    .catch(err=>console.log(err));
  },[])


  const renderEmployeDetails = () => {
      return <>
      {empData.map((each) => {
        return <h1>{each.name}</h1>
      })}
      </>
  }


  console.log(empData)
  const renderEmployeData = () => {
    if (btnStatus === "EMPLOYES"){
      return (
        <>
          <ul>
              {employe.map((eachEmploye) => {
                return(
                  <button onClick={() => setEmpId(eachEmploye.id)} type="button" className='emp-list-item-btn'>
                    <li className="emp-list-item">
                      <h1 className="emp-list-name">{eachEmploye.name}</h1>
                    </li>
                </button>)
              })}
          </ul>
          {empId ? renderEmployeDetails() : null}
          </>
      )
    }
    else if(btnStatus === "PRESENT"){
      return (
          <table>
        <tr className="table">
          <th>CHECK</th>
          <th>NAME</th>
          <th>EMPLOYE ID</th>
          <th>TIME IN</th>
          <th>TIME OUT</th>
        </tr>
      {attendanceData.map((data)=>(
        <tr  className="table">
          <td><button type="button" className="edit-button-check"><input className="checkbox-ele" type="checkbox"/></button></td>
          <td  className="db-item-name">{data.name}</td>
          <td  className="db-item-name">{data.employeid}</td>
          <td  className="db-item-name">{data.timein.slice(0,8)}</td>
          <td  className="db-item-name">{data.timeout.slice(0,8)}</td>
        </tr>
      ))}
      </table>
      )
    }else if(btnStatus === "ABSENTS"){
      return (
          <table>
            <tr className="table">
              <th  className="db-item-name1">Check</th>
              <th  className="db-item-name1">Date</th>
              <th  className="db-item-name1">Name</th>
              <th  className="db-item-name1">Employe Id</th>
              <th  className="db-item-name1">TimeIn</th>
              <th  className="db-item-name1">TimeOut</th>
            </tr>
            {everyDayAttendanceData.map((data)=>(
            <tr  className="table">
              <td><button type="button" className="edit-button-check"><input className="checkbox-ele" type="checkbox"/></button></td>
              <td  className="db-item-name">{data.date.slice(0,10)}</td>
              <td  className="db-item-name">{data.name}</td>
              <td  className="db-item-name">{data.employeid}</td>
              <td  className="db-item-name">{data.timein.slice(0,8)}</td>
              <td  className="db-item-name">{data.timeout.slice(0,8)}</td>
            </tr>
            ))}
          </table>
      )
    }else if(btnStatus === "DETAILS"){
      return(
        <table>
        <tr className="table">
          <th  className="db-item-name1">CHECK</th>
          <th   className="db-item-name1">NAME</th>
          <th  className="db-item-name1">EMPLOYE ID</th>
          <th  className="db-item-name1">JOBPOSITION</th>
          <th  className="db-item-name1">LOCATION</th>
          <th  className="db-item-name1">DATEOFBIRTH</th>
          <th  className="db-item-name1">EMAIL</th>
          <th  className="db-item-name1">NUMBER</th>
          <th  className="db-item-name1">ADDRESS</th>
        </tr>
      {employe.map((data)=>(
        <tr className="table">
          <td  className="db-item-name1"><button type="button" className="edit-button-check"><input className="checkbox-ele" type="checkbox"/></button></td>
          <td  className="db-item-name1">{data.name}</td>
          <td  className="db-item-name1">{data.employeid}</td>
          <td  className="db-item-name1">{data.position}</td>
          <td  className="db-item-name1">{data.location}</td>
          <td  className="db-item-name1">{data.dob.slice(0,10)}</td>
          <td  className="db-item-name1">{data.email}</td>
          <td  className="db-item-name1">{data.phoneno}</td>
          <td  className="db-item-name1">{data.address}</td>
        </tr>
      ))}
      </table>
      )
    }
  }

  return (
   <>
    <div className='attendance-container'>
      <h1 className='Hre-head1'>EMPLOYEE DATA</h1>
      <div className='Hre-card1'>
        <button onClick={() => setBtnStatus("EMPLOYES")} className='Hre-button1'>Employe Attendance<p>{employe.length}</p></button>
        <button onClick={() => setBtnStatus("PRESENT")} className='Hre-button1'>Today Present<p>{attendanceData.length}</p></button>
        <button onClick={() => setBtnStatus("ABSENTS")} className='Hre-button1'>Attandance Data<p>{everyDayAttendanceData.length}</p></button>
        <button onClick={() => setBtnStatus("DETAILS")} className='Hre-button1'>Employe Details<p>{employe.length}</p></button>
      </div>    
          <h1>Employee Data</h1>
          <div className='att-table-container'>
            {renderEmployeData()}
          </div>
    </div>
  </>)
}

export default EmployeAttendance
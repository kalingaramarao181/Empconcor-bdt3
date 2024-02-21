import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './index.css'
const EmployeAttendance = () => {
  const [employe,setEmploye] = useState([])
  const [attendanceData,setAttendanceData] = useState([])
  const [btnStatus, setBtnStatus] = useState()

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
  console.log(employe)


  const renderEmployeData = () => {
    if (btnStatus === "EMPLOYES"){
      return (
        <table>
        <tr>
          <th>NAME</th>
          <th>EMPLOYE ID</th>
          <th>JOBPOSITION</th>
          <th>LOCATION</th>
          <th>DATEOFBIRTH</th>
        </tr>
      {employe.map((data)=>(
        <tr>
          <td>{data.name}</td>
          <td>{data.employeid}</td>
          <td>{data.position}</td>
          <td>{data.location}</td>
        </tr>
      ))}
      </table>
      )
    }
    else if(btnStatus === "PRESENT"){
      return (
        <table>
        <tr>
          <th>NAME</th>
          <th>EMPLOYE ID</th>
          <th>TIME IN</th>
          <th>TIME OUT</th>
        </tr>
      {attendanceData.map((data)=>(
        <tr>
          <td>{data.name}</td>
          <td>{data.employeid}</td>
          <td>{data.timein}</td>
          <td>{data.timeout}</td>
        </tr>
      ))}
      </table>
      )
    }else if(btnStatus === "ABSENTS"){
      return (
        <h1>ABSENTS</h1>
      )
    }else if(btnStatus === "DETAILS"){
      return(
        <table>
        <tr>
          <th>NAME</th>
          <th>EMPLOYE ID</th>
          <th>JOBPOSITION</th>
          <th>LOCATION</th>
          <th>DATEOFBIRTH</th>
          <th>EMAIL</th>
          <th>NUMBER</th>
          <th>ADDRESS</th>
        </tr>
      {employe.map((data)=>(
        <tr>
          <td>{data.name}</td>
          <td>{data.employeid}</td>
          <td>{data.position}</td>
          <td>{data.location}</td>
          <td>{data.dob}</td>
          <td>{data.phoneno}</td>
          <td>{data.address}</td>
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
        <button onClick={() => setBtnStatus("EMPLOYES")} className='Hre-button1'>TOTAL - EMPLOYES<p>0</p></button>
        <button onClick={() => setBtnStatus("PRESENT")} className='Hre-button1'>PRESENT - EMPLOYES<p>{attendanceData.length}</p></button>
        <button onClick={() => setBtnStatus("ABSENTS")} className='Hre-button1'>ABSENT - EMPLOYES<p>0</p></button>
        <button onClick={() => setBtnStatus("DETAILS")} className='Hre-button1'>EMPLOYES - DETAILS <p>{employe.length}</p></button>
      </div>    
          <h1>employee data</h1>
          {renderEmployeData()}
    </div>
  </>)
}

export default EmployeAttendance
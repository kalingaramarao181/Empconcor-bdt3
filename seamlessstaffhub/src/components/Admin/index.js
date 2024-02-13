import "./index.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import Cookies from "js-cookie";

const Admin = () => {
  let displayData = []
  const [btnStatus, setBtnStatus] = useState(0)
  const [userData, setAdminData] = useState([]);
  const [intDataDB, setIntDataDB] = useState([]);
  const [intData, setIntData] = useState([])
  const [offData, setOffData] = useState([])
  const [offAcpData, setOffAcpData] = useState([])
  const [hrData, setHRData] = useState([]);
  const [dataView, setDataView] = useState("APPLICATIONS")
  const token = Cookies.get("jwt_token");

  //GET USER DATA
  useEffect(() => {
    axios.get('http://localhost:5000/user')
      .then(res => setAdminData(res.data))
      .catch(err => {
        console.error(err);
      });
  }, []);

  //GET HR DETAILS
  useEffect(() => {
    axios.get('http://localhost:5000/hrdetails')
      .then(res => setHRData(res.data))
      .catch(err => {
        console.error(err);
      });
  }, []);

  //GET INTERVIEW DATA
  useEffect(() => {
    axios.get('http://localhost:5000/interviewdata')
      .then(res =>{
        let conData = []
        for (let dbData of res.data){
          if (dbData.accesscode === token){
            conData.push(dbData)
            setIntData(conData)
            console.log(intData)
          }
        }
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
 
  //CLICK TO DELETE USER FROM DATABASE
  const onClickDelete = async (id) => {
    try{
      await axios.delete("http://localhost:5000/user/"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  const onClickIntDelete = async (id) => {
    try{
      await axios.delete("http://localhost:5000/interviewdata/"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }


  const onClickAddToInterview = (id) => {
    for (let eachItem of userData){
      if (eachItem.id === id){
        setIntDataDB(eachItem)
        setBtnStatus(eachItem.id)
      }
    }
  }

  const onClickAddToInterviewSub = (id) => {
    const accesscode = token
    const {name, email, password, phone, compeny, country} = intDataDB
    console.log(name, email, password, phone, compeny, country, accesscode)
    axios.post("http://localhost:5000/interviewdata" , {name, email, password, phone, country, compeny, accesscode})
    .then(res => {
      alert("Successfully Added")
      window.location.reload()
    })
    .catch(err => alert(err))
  }
  




  

  let LoginHRIcon = null
  let LoginHRName = null

  for (let data of hrData){
    if (data.email === token){
      LoginHRIcon = data.name[0]
      LoginHRName = data.name
    }
  }
  console.log(LoginHRIcon, LoginHRName)

   if (dataView === "APPLICATIONS"){
      displayData = userData
   }else if (dataView === "INTERVIEW"){
    displayData = intData
   }else if (dataView === "OFFER"){
    displayData = offData
   }else{
    displayData = offAcpData
   }



  return (
    <div className="admindata-container">
      {(
        <>
        <div className="admin-name-button-container">
          <div className="admin-name-container">
            <p className="admin-profile">{LoginHRIcon}</p>
            <h1 className="admin-name">{LoginHRName}</h1>
          </div>
          <div>
          <Link to="/Regester">
              <button className="add-admin-button">Add Employee</button>
           </Link><br/>
           <Link to="/hrr">
              <button className="signup-button" type="button">
                HR Sign Up
              </button>
            </Link>
            </div>
        </div>
          <h1>User Data</h1>
          <div className="data-total-view-container">
          <div className="data-view-container">
            <button onClick={() => setDataView("APPLICATIONS")} className="data-view-btn" type="button">Applications<span className="data-count">{userData.length}</span></button>
            <button onClick={() => setDataView("INTERVIEW")} className="data-view-btn" type="button">Interview<span className="data-count">{intData.length}</span></button>
            <button onClick={() => setDataView("OFFER")} className="data-view-btn" type="button">Offer<span className="data-count">{offData.length}</span></button>
            <button onClick={() => setDataView("ACCEPTED")} className="data-view-btn" type="button">Offer Accepted<span className="data-count">{offAcpData.length}</span></button>
          </div>
          <div className="db-item-container">
            {displayData.map(user => (
              <div className='admin-data' key={user.id}>
                <p className="db-item-name">Name: {user.name}</p><hr/>
                <p className="db-item-name">Email: {user.email}</p><hr/>
                <p className="db-item-name">Compeny Name: {user.compeny}</p><hr/>
                <p className="db-item-name">Country Name: {user.country}</p><hr/>
              <div>
                  {displayData !== "INTERVIEW" ? btnStatus === user.id ? <button type="button" className="edit-button" onClick={e => onClickAddToInterviewSub(user.id)}>Submit</button> : 
                                            <button type="button" className="edit-button" onClick={e => onClickAddToInterview(user.id)}>Select</button>: null}
                  {displayData === "INTERVIEW" ? <button type="button" className="delete-button" onClick={e => onClickDelete(user.id)}>Remove</button> : 
                                                <button type="button" className="delete-button" onClick={e => onClickIntDelete(user.id)}>Remove</button>}
                </div>
              </div>
              
            ))}
          </div>
          </div>
        </>
      )}
    </div>)
    }

export default Admin;
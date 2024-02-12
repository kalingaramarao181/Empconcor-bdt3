import "./index.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import Cookies from "js-cookie";

const Admin = () => {
  let displayData = []
  const [userData, setAdminData] = useState([]);
  const [intData, setIntData] = useState([])
  const [offData, setOffData] = useState([])
  const [offAcpData, setOffAcpData] = useState([])
  const [hrData, setHRData] = useState([]);
  const [dataView, setDataView] = useState("APPLICATIONS")
  const token = Cookies.get("jwt_token");
  console.log(token)
  useEffect(() => {
    axios.get('http://localhost:5000/user')
      .then(res => setAdminData(res.data))
      .catch(err => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/hrdetails')
      .then(res => setHRData(res.data))
      .catch(err => {
        console.error(err);
      });
  }, []);
 
  const onClickDelete = async (id) => {
    try{
      await axios.delete("http://localhost:5000/user/"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
    console.log("clicked")
  }

  const onClickAddToInterview = (id) => {

  useEffect(() => {
    axios.get('http://localhost:5000/user/' + id)
      .then(res => setAdminData(res.data))
      .catch(err => {
        console.error(err);
      });
  }, []);
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
                  <button type="button" className="edit-button" onClick={e => onClickAddToInterview(user.id)}>Send Mail</button>
                  <button type="button" className="delete-button" onClick={e => onClickDelete(user.id)}>Delete User</button>
                </div>
              </div>
              
            ))}
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;
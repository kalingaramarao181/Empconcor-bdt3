import "./index.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"

const Admin = () => {
  const [userData, setAdminData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/user')
      .then(res => setAdminData(res.data))
      .catch(err => {
        console.error(err);
        setError(err);
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

  console.log(userData)
  return (
    <div className="admindata-container">
      {(
        <>
        <div className="admin-name-button-container">
          <div className="admin-name-container">
            <p className="admin-profile">R</p>
            <h1 className="admin-name">Adimin</h1>
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
          <div className="db-item-container">
            {userData.map(user => (
              <div className='admin-data' key={user.id}>
                <p className="db-item-name">Name: {user.name}</p><hr/>
                <p className="db-item-name">Email: {user.email}</p><hr/>
                <p className="db-item-name">Compeny Name: {user.compeny}</p><hr/>
                <p className="db-item-name">Country Name: {user.country}</p><hr/>
              <div>
                  <button type="button" className="edit-button">Send Mail</button>
                  <button type="button" className="delete-button" onClick={e => onClickDelete(user.id)}>Delete User</button>
                </div>
              </div>
              
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;
import "./index.css"
import { useEffect, useState } from "react";
import React from "react";
import Cookies from "js-cookie";
import axios from "axios";

const EmployeDashBoard = () => {
    const employe = Cookies.get("jwt_token")
    const [employeData, setEmployeData] = useState([])
    // const [dbEmploye, setDbEmploye] = useState()
   
    //GET EMPLOYE DATA
    useEffect(() => {
    axios.get('http://localhost:5000/employedata')
      .then(res => setEmployeData(res.data))
      .catch(err => {
        alert(err);
      });
    }, []);

    let dbEmploye = ""
    
    for (let employes of employeData){
        if (employes.email === employe){
            dbEmploye = employes
        }
    }


    return(
        <div>
        <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
                <tr>
                    <td>{dbEmploye.name}</td>
                    <td>{dbEmploye.email}</td>
                    <td>{dbEmploye.role}</td>
                </tr>
        </table>
       </div>
    )
}

export default EmployeDashBoard
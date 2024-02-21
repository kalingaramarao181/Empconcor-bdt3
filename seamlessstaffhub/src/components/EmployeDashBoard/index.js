import "./index.css"
import { useEffect, useState } from "react";
import React from "react";
import Cookies from "js-cookie";
import axios from "axios";

const EmployeDashBoard = () => {
    const employe = Cookies.get("jwt_token")
    const [employeData, setEmployeData] = useState([])
    const [attendStatus, setAttendStatus] = useState("TIMEIN")
    const [employeId, setEmployeId] = useState("")
    const [empName, setEmpName] = useState("")
    const [msg, setMsg] = useState("")
    // const [dbEmploye, setDbEmploye] = useState()
    const date = new Date()
    const h = date.getHours()
    let hoursType = h <= 12 ? "AM" : "PM"
    let day
    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
    const minutes = date.getMinutes()
    
   
    //GET EMPLOYE DATA
    useEffect(() => {
    axios.get('http://localhost:5000/employedata')
      .then(res => setEmployeData(res.data))
      .catch(err => {
        alert(err);
      });
    }, []);

    const employeIdList = []
    let name
    for (let employes of employeData){
        employeIdList.push(employes.employeid)
        if (employeId === employes.employeid){
            name = employes.name
        }
    }

    const onSubmitTimeFarm = () => {
        console.log(name)
        if (employeIdList.includes(employeId)){
            if (attendStatus==="TIMEIN"){
                axios.post("http://localhost:5000/attindance" , {employeId, name})
                .then(res => {
                    alert("Successfully Updated")
                })
                .catch(err => console.log(err))
                setMsg(`${name} Attended SuccessFully`)
            }else if (attendStatus==="TIMEOUT"){
                axios.put("http://localhost:5000/attindance" , {employeId})
                .then(res => {
                   alert("Updated Successfully")
                })
                .catch(err => console.log(err))
            }
        }else{
            alert("Employe Id Not Matched")
        }
    }
    


    
    return(
        <div className="att-container">
            <h2>{`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}  ${day}`}</h2>
            <h1>{`${date.getHours() % 12 || 12} : ${minutes} ${hoursType}`}</h1>
            <form onSubmit={onSubmitTimeFarm}className="att-form">
                <select className="att-selection" onChange={e => setAttendStatus(e.target.value)}>
                    <option value="TIMEIN">Timein</option>
                    <option value="TIMEOUT">Timeout</option>
                </select>
                <input className="time-input" onChange={e => setEmployeId(e.target.value)} placeholder="Enter Employe Id"/>
                <button className="time-submit">Submit</button>
            </form>
            <p className="attend-msg">{msg}</p>
       </div>
    )
}

export default EmployeDashBoard
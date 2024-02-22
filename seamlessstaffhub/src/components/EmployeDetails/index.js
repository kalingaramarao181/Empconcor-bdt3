import "./index.css"
import axios from "axios";
import { useEffect, useState } from "react";

const EmployeDetails = () => {
    const [empData, setEmpData] = useState()
    

    return(
        <ul>
            {empData.map(each => {
                <h1>{each.date}</h1>
            })}
        </ul>
    )
}

export default EmployeDetails
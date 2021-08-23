import React, { useEffect, useState } from "react";
import { GetSensors } from "./api";
 
const Sensor= ()=> {
  const [sensors,setSensors]=useState([])

  useEffect(async()=>{
    let sens = await GetSensors();
    setSensors(sens)
    
  },[]);
  
    return (
      <div>
        <h2>Sensors</h2>
        
        <div className="container">
          {sensors.map((sensor) => <div key = {sensor["room"]}>
            <h3>room: {sensor["room"]}</h3>
            <p>sensor: {sensor["sensor"]}</p>
            </div>)}
        </div>
      </div>
    );
  
}
 
export default Sensor;
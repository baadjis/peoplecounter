import React, { Component ,useState,useEffect} from "react";


import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Home from "./Home";
import Sensor from "./Sensor";
import Occupancy from "./Occupancy";

import {GetSensors,GetMeetings} from "./api"


const App = () =>{
  const [sensors,setSensors]=useState([])
  const [meetings,setMeetings]=useState([])

  useEffect(async()=>{
    let sns =  await GetSensors();
    let meets= await GetMeetings();
    setSensors(sns); 
    setMeetings(meets);
    //setSensor(sns[0]["sensor"])
    
  },[])

        return (
          <Router>
            <div>
              <h1 data-testid ="header" >Meeting rooms monitoring</h1>
              <ul className="header" data-testid ="navbar">
                <li><NavLink data-testid ="home-link" exact to="/">Home</NavLink></li>
                <li><NavLink to="/sensor" data-testid ="sensor-link">Sensor</NavLink></li>
                <li><NavLink to="/occupancy" data-testid ="occupancy-link">Occupancy</NavLink></li>
              </ul>
               <Switch> 
              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/sensor" component={Sensor}/>

                <Route path="/occupancy" render={()=>
                  
                  <Occupancy sensors={sensors} meetings={meetings}/>
                  }/>

              </div>
             </Switch>
            </div>
          </Router>
        );
      }
    
    export default App;


import React, { useState } from "react";
import { GetOccupancy } from "./api"



const Occupancy = (props) => {

  const [sensor, setSensor] = useState("abc");
  const [occupancy, setOccupancy] = useState(null);
  const [display, setDisplay] = useState(false);
  const [thetime, setTheTime] = useState("00:00")
  const [thedate, setTheDate] = useState("")
  const [instant, setInstant] = useState("")

  /// run when the sensor is selected
  const handleSensorSelect = (event) => {

    setSensor(event.target.value)
    setDisplay(false)

  };


  //run when a Date is selected frome datetime-local input
  const handleDateSelect = (event) => {

    setInstant(event.target.value)
    setDisplay(false)



  };


  //for firexfox date input
  const changeInputDate = (e) => {
    e.preventDefault()
    setInstant(e.target.value + "T" + thetime)
    setTheDate(e.target.value)

  };
  

  ///for firefox time input
  const changeInputTime = (e) => {
    e.preventDefault()
    setInstant(thedate + "T" + e.target.value)
    setTheTime(e.target.value)
  }



  const RenderDate = () => {

    //if nivagator is firefox return this (firefox did not support datetime-local input)
    if (navigator.userAgent.indexOf("Firefox") != -1) {

      return (
        <div className="firefox-date">

          <label>choose a date:</label>

          <input type="date"
            onChange={(e) => changeInputDate(e)}

          />
          <input type="time"
            onChange={(e) => changeInputTime(e)} defaultValue="00:00" />
        </div>)


    } else {
      return (
        <div>
          <label>choose a date:</label>
          <input id="time-input" type="datetime-local" name="meetingdate" list="recentmeetingdateslist"
            onChange={(e) => handleDateSelect(e)}
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" />

          <datalist id="recentmeetingdateslist">

            {setDateOptions()}

          </datalist>
        </div>
      )
    }


  };


  // set the options for dataList
  const setDateOptions = () => {
    return props.meetings.map((meeting, i) => {
      return <option key={i} value={toDateTimeLocal(meeting.ts)} label={meeting.reason} data={meeting.ts} />

    });
  };


  const toDateTimeLocal = (instant) => {

    //convert  isostring to  datetimelocal format 
    let utc = new Date(instant)

    let dateTimeLocal = (new Date(utc.getTime() - utc.getTimezoneOffset() * 60000).toISOString()).slice(0, -8);


    return (dateTimeLocal)

  };


  const handleSubmit = (e) => {
    e.preventDefault()
    setDisplay(true)

    GetOccupancy(sensor, instant).then(data => setOccupancy(data["inside"]))

  };

  //final render
  return (

    <div>
      <h2>meeting rooms occupancy</h2>
      <div className="container">


        <form onSubmit={handleSubmit}>
          <label>choose a sensor:</label>


          <select onChange={(e) => handleSensorSelect(e)}
            data-testid="select" onInput={(e) => handleSensorSelect(e)}>

            {props.sensors.map((sens) =>

              <option key={sens.sensor} value={sens.sensor}> sensor {sens.sensor}</option>
            )}

          </select>

          <br></br>
          <br></br>
          <br></br>

          {RenderDate()}

          <br />
          <input id="show-button" type="submit" value="show occupancy" data-testid="show-button" />

        </form>
        <br></br>
        <br></br>
        {display &&
          <h4 className="show-paragraph">

            sensor {sensor} reports room occupancy of {occupancy} people
          </h4>
        }


      </div>


    </div>

  );
}


export default Occupancy;
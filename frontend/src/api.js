

const toIso = (date_time_local) => {
    //convert a datetimelocal to isostring format

    let to_date = new Date(date_time_local)

    return to_date.toISOString();
}



async function GetWebhook() {
    // get webhook from api call
    let data = null;
    let response = await fetch("http://127.0.0.1:5002/api/webhook")
    if (response.ok) {
        data = await response.json();


    }

    else {
        data = response.status;
    }
    return data
}


//get occupancy from api given sensor atInstant parameters
async function GetOccupancy(sensor, at) {
    let data = null;
    if (at) {
        at = toIso(at)
    }

    let response = await fetch(`http://127.0.0.1:5002/api/occupancy?sensor=${sensor}&atInstant=${at}`)
    if (response.ok) {
        data = await response.json();

    } else {
        data = response.status;
    }
    return data


}

//get all sensors from api
async function GetSensors() {


    let data = null;
    let response = await fetch(`http://127.0.0.1:5002/api/sensors`)
    if (response.ok) {
        data = await response.json();

    } else {
        data = response.status;
    }
    return data

}

//get all meetings  from api
async function GetMeetings() {


    let data = null;
    let response = await fetch(`http://127.0.0.1:5002/api/meetings`)
    if (response.ok) {
        data = await response.json();
        console.log(data[0].ts)
    } else {
        data = response.status;
    }

    return data

}




export { GetSensors, GetOccupancy, GetWebhook, GetMeetings };
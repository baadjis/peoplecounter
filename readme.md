# peoplecounter

A web app written in python(for the backend) and React(for the frontend)
to count meetings room occupancy

## Backend 

The backend contains a REST API built with flask and flak_restfull.

The API has 4 endpoints:


 ### /api/sensors

  list of all sensors:

 `GET /api/sensors/`

 curl -i -H 'Accept: application/json' http://localhost:5002/api/sensors

 add a sensor to a room:

  `POST /api/sensors/`

 curl -i - 'Accept: application/json' -d 'sensor=abc&room=1' http://localhost:5002/api/sensors


 ### /api/meetings

 
  list of all meetings:

 `GET /api/meetings/`

 curl -i -H 'Accept: application/json' http://localhost:5002/api/meetings

 add a new meeting in a room at a given date:

  `POST /api/meetings/`

 curl -i - 'Accept: application/json' -d 'ts=abc&reason=dev workshop' http://localhost:5002/api/meetings

### /api/occupancy

get the occupancy reported by a sensor at a given date

 `GET /api/occupancy/`

 curl -i -H 'Accept: application/json' http://localhost:5002/api/occupancy?sensor=XYZatInstant=2018-11-14T14:00:00Z


### /api/webhook

get all reports by sensors

 `GET /api/webhook/`

  curl -i -H 'Accept: application/json' http://localhost:5002/api/webhook



## Frontend 

The frontend is a single page app built with React(react,react-router-dom)
with 3 routes:

/ : the home page with basic instructions

/sensors: containing the list of sensors by rooms

/occupancy: containing the ui for occupancy reporting

## Usage:

### Install 


first clone this repository

go to the backend  directory and install requirement.txt

launch the backend server:

```

$ cd backend
$ pip install -r requirements.txt

```

in a another terminal go to the frontend directory 
install the  node modules and launch the frontend(make sure the backend server is still running)

```
$ cd backend
$ npm install

```

### Run

To run the app first run backend server(in the backend terminal):

```

$ python app.py

```
  and launch the frontend in another terminal

```
$ npm start
```
### Testing

the backend unitary test is built with the unittest package
to run the test run test.py file 
```
$ python test.py
```

The frontend test is built with react testing-library
in the file app.test.js

run this command :

```
$ npm test
```


## Next todos

In the future we wil add:

* a register/login sytem

* a ui for sensor configuration(add and update,delete)

* a ui for adding meetings 
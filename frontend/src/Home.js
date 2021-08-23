import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2 data-testid>Welcome</h2>
        <div className="container">
        <p>go to the occupancy page to see occupancy by sensor</p>
 
        <p>go to sensor page for sensor page to see available sensors</p>
        </div>

      </div>
    );
  }
}
 
export default Home;
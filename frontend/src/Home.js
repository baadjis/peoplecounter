import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2 data-testid>Welcome</h2>
        <div className="container">
        <h4>go to the occupancy page to see occupancy reported by sensor</h4>
 
        <h4>go to sensor page to see available sensors</h4>
        </div>

      </div>
    );
  }
}
 
export default Home;
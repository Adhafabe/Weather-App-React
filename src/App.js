import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  "London, uk",
  "Querétaro, mx",
  "Valencia, es",
  "Yucatan, mx",
  "Ciudad de México, mx"
];

class App extends Component {

  handleSelectionLocation = city =>{
    console.log("handleSelectionLocation");
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <LocationList
            cities={cities}
            onSelectedLocation={this.handleSelectionLocation}>
          </LocationList>
        </header>
      </div>
    );
  }
}

export default App;

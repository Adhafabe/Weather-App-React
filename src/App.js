import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Col, Row} from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationsListContainer';
import ForecastExtended  from './components/ForecastExtended';
import './App.css';

const cities = [
  "London, uk",
  "Querétaro, mx",
  "Celaya, mx",
  "Yucatan, mx",
  "Ciudad de México, mx"
];

class App extends Component {

  constructor(){
    super();
    this.state={city:null};
  }

  render(){
    const {city} = this.state;

    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
                Weather App
            </Toolbar>
          </AppBar>
        </Row>
        <Row className="contentWeather">
          <Col  xs={12} md={5}>
              <LocationListContainer
                cities={cities}
               >
              </LocationListContainer>
          </Col>
          <Col xs={12} md={7}>
              <div className="details">
                {
                  !city ?
                  <h1>No se ha seleccionado Ciudad</h1>:
                  <ForecastExtended city={this.state.cities}></ForecastExtended>
                }
              </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
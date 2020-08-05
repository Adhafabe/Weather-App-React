import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Col, Row} from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationsListContainer';
import ForecastExtendedContainer  from './containers/ForecastExtendedContainer';
import './App.css';

const cities = [
  "London, uk",
  "Querétaro, mx",
  "Celaya, mx",
  "Yucatan, mx",
  "Ciudad de México, mx"
];

class App extends Component {

  render(){
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
              <LocationListContainer cities={cities}></LocationListContainer>
          </Col>
          <Col xs={12} md={7}>
              <div className="details">
                  <ForecastExtendedContainer></ForecastExtendedContainer>
              </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
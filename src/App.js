import React, { Component } from 'react';
import LocationList from './components/LocationList';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Col, Row} from 'react-flexbox-grid';
import ForecastExtended  from './components/ForecastExtended';
import {createStore} from 'redux';
import './App.css';

const cities = [
  "London, uk",
  "Querétaro, mx",
  "Valencia, es",
  "Yucatan, mx",
  "Ciudad de México, mx"
];

const store = createStore(()=>{},
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
class App extends Component {

  constructor(){
    super();
    this.state={city:null};
  }

  handleSelectionLocation = city =>{
    this.setState({city});
    console.log(`handleSelectionLocation ${city}`);
    const action = ({type:'setCity', value:city});
    store.dispatch(action);
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
        <Row>
          <Col  xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectionLocation}>
              </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                  !city ?
                  <h1>No se ha seleccionado Ciudad</h1>:
                  <ForecastExtended city={this.state.city}></ForecastExtended>
                }

              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './style.css';

const days =[
    "lunes",
    "martes",
    "Miercoles",
    "jueves",
    "viernes",
]

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: "normal",
    wind: "normal",
  };

class ForecastExtended extends Component{
    
    renderForecast (){
        return days.map(day=>(<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>));
    }

    render(){

        const {city} = this.props;
        return (
            <div>
                <div className="pronosticoTitle">
                    <h2>Pronóstico extendido de </h2>
                    <h3>{city}</h3>
                    {this.renderForecast()}
                </div>
            </div>
        );
    }
}

ForecastExtended.propTypes={
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;
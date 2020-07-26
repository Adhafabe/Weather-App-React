import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../constans/weathers';

const data = {
    temperature:3,
    weatherState:CLOUDY,
    humidity: 23,
    wind: '10 m/s',
}

const data2 = {
    temperature:33,
    weatherState: SNOW,
    humidity: 2,
    wind: '90 m/s',
}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state=
        {
            city: "Celaya",
            data: data,
        };
    }

    handleUpdateClick = () =>{
        console.log("clic");
        this.setState(
        {
            data: data2,
        });
    }

    render(){
        const {city, data}= this.state;
        return(
            <div className="weatherLocationContent">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;
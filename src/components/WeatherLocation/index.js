import React, {Component} from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather  from './../../services/transformWeather';
import {api_weather} from './../../constans/api_url';
import './style.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../constans/weathers';
import { number } from 'prop-types';

const data = {
    temperature:3,
    weatherState:CLOUDY,
    humidity: 23,
    wind: '10 m/s',
}
class WeatherLocation extends Component {

    constructor(){
        super();
        this.state=
        {
            city: "Celaya",
            data: data,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentWillUndate(nextProps, nextState) {
        console.log("componentDidUpdate");
    }
    
    handleUpdateClick = () =>{
        fetch(api_weather).then(resolve =>{
            return resolve.json();
        }).then(data=>{
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            });
        });
    }

    render(){
        console.log("render");
        const {city, data}= this.state;
        return(
            <div className="weatherLocationContent">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button className="btnUpdate" onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;
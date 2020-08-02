import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast'
import './style.css';
import transformForescast from './../services/transformForecast';

// const days =[
//     "lunes",
//     "martes",
//     "Miercoles",
//     "jueves",
//     "viernes",
// ]

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: "normal",
//     wind: "normal",
//   };

export const api_key = "4d989f9fed1198441bafd08b1ef87c72";
export const url = "https://api.openweathermap.org/data/2.5/forecast";


class ForecastExtended extends Component{
    constructor(){
        super();
        this.state={forecastData : null}
    }

    componentDidMount(){
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        //fech or axios
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data=>(data.json())
        ).then(
            weather_data =>{
                console.log(weather_data);
                const forecastData = transformForescast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        );
    }

    renderForecastItemDay(forecastData){
        return forecastData.map( forecast => (
        <ForecastItem
            key={`${forecast.weekday} ${forecast.hour}`}
            weekDay={forecast.weekday}
            hour={forecast.hour}
            data={forecast.data}>
        </ForecastItem>));
    }

    rederProgress = () =>{
        return <h3>cargando pronostico extendido ...</h3>;
    }

    render(){
        const {city} = this.props;
        const{forecastData} = this.state;

        return (
            <div>
                <div className="pronosticoTitle">
                    <h2>Pronóstico extendido para</h2>
                    <h3>{city}</h3>
                    {forecastData ? this.renderForecastItemDay(forecastData) : this.rederProgress()}
                </div>
            </div>
        );
    }
}

ForecastExtended.propTypes={
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;
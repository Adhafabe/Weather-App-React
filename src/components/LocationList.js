import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';


const LocationList = ({cities, onSelectedLocation}) =>{
    const handleWeatherLocationClick = city =>{
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };

    const srtToComponents = cities => (
        cities.map(city =>
        (
            <WeatherLocation
                key={city}
                city={city}
                onWeatherLocationClick={()=> handleWeatherLocationClick(city)}/>))
    );

    return(
        <div>
            {srtToComponents(cities)};
        </div>
    )
};

LocationList.propTypes ={
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;
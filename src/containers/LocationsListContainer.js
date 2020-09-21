import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from  'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../actions';
import {getWeatherCities, getCity} from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    componentDidMount(){
        const {setWeather, setSelectedCity, cities, city} = this.props;
        this.props.setWeather(cities);
        this.props.setSelectedCity(city);
    }

    handleSelectionLocation = city =>{
        this.props.setSelectedCity(city);
    }

    render(){
        return(
            <LocationList
                cities={this.props.citiesWeather}
                onSelectedLocation={this.handleSelectionLocation}>
            </LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    cities: PropTypes.array,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired
};

/*const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather:cities => dispatch(setWeather(cities))
});*/

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city:getCity(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
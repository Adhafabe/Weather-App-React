import transformForescast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecast = payload=> ({type:SET_FORECAST_DATA,payload});

const api_key = "4d989f9fed1198441bafd08b1ef87c72";
const url = "https://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    return dispatch =>{
        //fech or axios
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        ///activa en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));
        
        return fetch(url_forecast).then(
            data=>(data.json())
        ).then(
            weather_data =>{
                const forecastData = transformForescast(weather_data);
                console.log(forecastData);

                //modificar el estado con el resultado de la promise(fetch)
                dispatch(setForecast({city:payload,forecastData}));
            }
        );
    };
};
const location = "Celaya,mx";
const api_key = "4d989f9fed1198441bafd08b1ef87c72";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
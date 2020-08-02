import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';


const transformForescast = data => (
    data.list.filter(item =>(
        moment.unix(item.dt).hour() === 7 ||
        moment.unix(item.dt).hour() === 13 ||
        moment.unix(item.dt).hour() === 19

    )).map(item =>(
        {
            weekday:moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
    ))
);

export default transformForescast;
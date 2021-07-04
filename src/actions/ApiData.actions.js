import {myTypes} from './MyTypes.js';
import axios from 'axios';

const api = 
{
    baseLink: "http://api.openweathermap.org/data/2.5/",
    appid: "2677aa551e49ce368f3566232b7909af"
}

export const fetchApiData = (city) => async (dispatch) =>
{
    //get async request using axios
    await axios.get(`${api.baseLink}weather?q=${city}&appid=${api.appid}`)
    .then(response =>{
        const { feels_like, humidity, pressure, temp, temp_max, temp_min } = response.data.main;
        const  name = response.data.name;
        const country = response.data.sys.country;
        const { description, icon, id } = response.data.weather[0];
        const weatherData = 
        {
            feels_like,
            humidity,
            pressure,
            temp,
            temp_max,
            temp_min,
            name,
            country,
            description,
            icon,
            id
        };
          
        dispatch(
        {
            type: myTypes.GET_API_DATA,
            payload: weatherData
        });
        console.log(weatherData);
    })
    .catch(error => { console.log(error) })
};
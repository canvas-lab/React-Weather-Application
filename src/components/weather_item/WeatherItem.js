import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WeatherItem.scss';

class WeatherItem extends Component {
    render() {
        const {name, country, description, temp, temp_max, temp_min, icon, pressure, humidity, feels_like} = this.props;

        const getDate = (inDate) => {
            let allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
            let day = allDays[inDate.getDay()];
            let date = inDate.getDate();
            let month = allMonths[inDate.getMonth()];
            let year = inDate.getFullYear();
        
            return (`${day}, ${date} ${month} ${year}`);
          }
          
        if(!name)
        {
            return (
                <div className="weather-item-null-component"></div>
            );
        }

        return (
            <div className="weather-item-component" test-data="weather-item-component">
                <div className="weather-item-wrapper" test-data="weather-item-wrapper">
                    <h2 className="weather-item-location" test-data="weather-item-location">{name}, {country}</h2>
                    <h2 className="weather-item-description" test-data="weather-item-description">{description}</h2>
                    <h2 className="weather-item-temperature" test-data="weather-item-temperature">{temp}&deg;</h2>
                    <h2 className="weather-temp-minmax" test-data="weather-temp-minmax">L:{temp_max}&deg;  H:{temp_min}&deg;</h2>
                    <h2 className="weather-item-icon" test-data="weather-item-icon"> <i class={`fas ${icon}`}></i> </h2>
                    <div className="weather-item-other-container" test-data="weather-item-other-container">
                        <h2 className="weather-item-pressure" test-data="weather-item-pressure">Pressure: {pressure} hPa</h2>
                        <h2 className="weather-item-humidity" test-data="weather-item-humidity">Humidity: {humidity}%</h2>
                        <h2 className="weather-item-feelslike" test-data="weather-item-feelslike">Feels like: {feels_like}&deg;</h2>
                    </div>
                    <div className="weather-item-date" test-data="weather-item-date"> {getDate(new Date())} </div>
                </div>
            </div>
        );
    }
}

WeatherItem.propTypes = 
{
    name: PropTypes.string,
    country: PropTypes.string,
    description: PropTypes.string,
    temp: PropTypes.number,
    temp_max: PropTypes.number,
    temp_min: PropTypes.number,
    pressure: PropTypes.number,
    humidity: PropTypes.number,
    feels_like: PropTypes.number,
    getDate: PropTypes.func
}

export default WeatherItem;
import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/Header.js';
import Headline from './components/headline/Headline.js';
import MyButton from './components/my_button/MyButton.js';
import MySearchBar from './components/my_search_bar/MySearchBar.js';
import {connect} from 'react-redux';
import {fetchApiData} from './actions/ApiData.actions.js';
import WeatherItem from './components/weather_item/WeatherItem.js';

class App extends Component 
{
  constructor(props)
  {
    super(props);
    
    this.state = { inputtedText: '' };
    this.handleChange = this.handleChange.bind(this);

    this.fetch = this.fetch.bind(this);
    
    this.icon = 
    {
      Thunderstorm: "fa-poo-storm",
      Drizzle: "fa-cloud-rain",
      Rain: "fa-cloud-showers-heavy",
      Snow: "fa-snowflake",
      Atmosphere: "fa-smog",
      Clear: "fa-sun",
      Clouds: "fa-cloud"
    };
  }

  handleChange = (event) => 
  {
    this.setState({ inputtedText: event.target.value });
  }

  fetch()
  {
    this.props.fetchApiData(this.state.inputtedText);
  }

  getIcon = (icons, id) => 
  {
    switch (true) 
    {
      case id >= 200 && id < 232:
        return icons.Thunderstorm;
      case id >= 300 && id <= 321:
        return icons.Drizzle;
      case id >= 500 && id <= 521:
        return icons.Rain;
      case id >= 600 && id <= 622:
        return icons.Snow;
      case id >= 701 && id <= 781:
        return icons.Atmosphere;
      case id === 800:
        return icons.Clear;
      case id >= 801 && id <= 804:
        return icons.Clouds;
      default:
        return 0;
    }
  }

  convertTempFromKelvintoCelcius = (kelvin) => 
  {
    let celcius = Math.floor(kelvin - 273.15);
    return celcius;
  }

  render() 
  {
    const { apiData } = this.props;

    const configMyButton = 
    {
      textOfMyButton: 'Search',
      eventOfMyButton: this.fetch
    }

    return (
      <div className="app-component" test-data="app-component">
        <Header/>
        <Headline headerOfHeadline="Weather App" descpOfHeadline="with React, Redux(for application state management), PropTypes(for type checking), Jest and Enzyme(to test my react components' output: unit and integration testing), Axios(for async request), Moxios(for intergration testing to mock the response of an API)"/>
        <section className="app-section">
          <MySearchBar handleChange={this.handleChange}/>
          <MyButton {...configMyButton}/>
          <WeatherItem className="app-weather-item" 
          icon={this.getIcon(this.icon, apiData.id)} 
          name={apiData.name} 
          country={apiData.country} 
          temp={this.convertTempFromKelvintoCelcius(apiData.temp)} 
          description={apiData.description} 
          pressure={apiData.pressure} 
          humidity={apiData.humidity} 
          feels_like={this.convertTempFromKelvintoCelcius(apiData.feels_like)} 
          temp_max={this.convertTempFromKelvintoCelcius(apiData.temp_max)} 
          temp_min={this.convertTempFromKelvintoCelcius(apiData.temp_min)}
          />
        </section>
      </div>
    );
  }
}

const connectStateToProps = state => 
{ 
  return{
    apiData: state.apiData
  } 
}

export default connect(connectStateToProps, {fetchApiData})(App);

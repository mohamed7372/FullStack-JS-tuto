import axios from 'axios'
import { useEffect } from 'react';
import { useState } from "react";
import Weather from "./Weather";

const ViewCountry = ({ country }) => {
    
    const api_key = process.env.REACT_APP_API_KEY;
    const lat = country.capitalInfo.latlng[0];
    const lng = country.capitalInfo.latlng[1];

    const [weather, setWeather] = useState({})
    const [icon, setIcon] = useState({})

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric`

    useEffect(() => { 
        axios.get(url)
            .then(response => {
                setWeather(response.data);
                return response.data;
            })
            .then(data => setIcon(data.weather[0]))
    }, [country])
    
    const temp = Object.keys(weather).length > 0 && weather.main.temp;
    const wind = Object.keys(weather).length > 0 && weather.wind.speed;

    return (
        <div>
            <h1>{country.name.common}</h1>
            <span>capital {country.capital}</span>
            <br />
            <span>area {country.area}</span>
            <h3>languages:</h3>
            <ul>
            {
                Object.keys(country.languages).map(lang => <li key={lang}>{country.languages[lang]}</li>)
            }
            </ul>
            <img src={country.flags.png} alt={country.name.common + 'flag '} />

            <Weather capital={country.capital}
                temp={temp}
                wind={wind}
                icon={icon}
            />
        </div>
    );
}
 
export default ViewCountry;
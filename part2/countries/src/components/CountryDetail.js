
import { useEffect } from 'react'
import axios from 'axios'

const CountryDetail = ({ countries, countriesFiltered, countryWeather, setCountryWeather }) => {

    console.log('CountryDetail has run');
    console.log('CDetail - countryWeather.length = ', Object.keys(countryWeather).length);

    const api_key = process.env.REACT_APP_API_KEY
    const countryLat = countriesFiltered[0].capitalInfo.latlng[0]
    const countryLon = countriesFiltered[0].capitalInfo.latlng[1]
    const countryLanguages = countriesFiltered[0].languages

    let countryTemp = ''
    let countryWeatherIconId = ''
    let countryWeatherIconUrl = ''
    let countryWind = ''

    if (Object.keys(countryWeather).length === 0) {
        countryTemp = ''
        countryWeatherIconId = ''
        countryWeatherIconUrl = ''
        countryWind = ''
    } else {
        countryTemp = countryWeather.main.temp
        countryWeatherIconId = countryWeather.weather[0].icon
        countryWeatherIconUrl = `http://openweathermap.org/img/wn/${countryWeatherIconId}@2x.png`
        countryWind = countryWeather.wind.speed
    }

    console.log('countryTemp', countryTemp);
    console.log('countryWeatherIconId', countryWeatherIconId);
    console.log('countryWeatherIconUrl', countryWeatherIconUrl);

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${countryLat}&lon=${countryLon}&appid=${api_key}&units=metric`)
            .then(response =>
                {setCountryWeather(response.data)})
        console.log('CDetail Effect getWeather has run');
        console.log('CDetail Effect countryWeather.length = ', Object.keys(countryWeather).length);
    }, [])

    return (
        <div>
            <h1>{countriesFiltered[0].name.common}</h1>
            <p>
                capital {countriesFiltered[0].capital}
                <br/>
                area {countriesFiltered[0].area}
            </p>
            <h3>languages:</h3>
            <ul>
                {Object.entries(countryLanguages).map(([key, value]) => <li key={key}>{value}</li>)}
            </ul>
            <img src={countriesFiltered[0].flags['png']} alt='country flag' />
            <h2>Weather in {countriesFiltered[0].capital}</h2>
            <div>
                <p>temperature {countryTemp} Celsius</p>
                <img src={countryWeatherIconUrl} alt='countryWeatherIcon' />
                <p>wind {countryWind} m/s</p>
            </div>
        </div>
    )
}

export default CountryDetail
const Weather = ({ capital, temp, wind, icon}) => {
    
    const icon_img = Object.keys(icon).length > 0 && `http://openweathermap.org/img/wn/${icon.icon}@2x.png`;
    const img = Object.keys(icon).length > 0 ? <img src={icon_img} alt={icon.description + ' icon'} /> : ''

    return (
        <>
            <h2>Weather in {capital}</h2>
            <p>temperature {temp} Celcius</p>
            {img}
            <p>wind {wind} m/s</p>
        </>
    );
}
 
export default Weather;
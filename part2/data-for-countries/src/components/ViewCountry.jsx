const ViewCountry = ({country}) => {
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
        </div>
    );
}
 
export default ViewCountry;
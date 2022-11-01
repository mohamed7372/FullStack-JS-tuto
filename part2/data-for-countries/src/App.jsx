import { useEffect, useState } from "react";
import axios from 'axios'

function App() {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
  }, [])

  const finds = countries
    .filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
  
  const show = finds.length === 1 ?
    (<div>
      <h1>{finds[0].name.common}</h1>
      <span>{finds[0].capital}</span>
      <br />
      <span>{finds[0].area}</span>
      <h3>languages:</h3>
      <ul>
        {
          Object.keys(finds[0].languages).map(lang => <li key={lang}>{finds[0].languages[lang]}</li>)
        }
      </ul>
      <img src={finds[0].flags.png} alt={finds[0].name.common + 'flag '} />
    </div>)
    :
    (finds.length > 10 ? 
      (<span>Too many matches, specify another filter<br /></span>)
      :
      (finds.map(country => <span key={country.name.common}>{country.name.common}<br/></span>))
    )
  
  return (
    <div className="App">
      <label htmlFor="search">find countries </label>
      <input type="text" id="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      <br />
      {show}        
    </div>
  );
}

export default App;

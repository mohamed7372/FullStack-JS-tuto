import { useEffect, useState } from "react";
import axios from 'axios'
import ViewCountry from "./components/ViewCountry";
import ListCountries from "./components/ListCountries";

function App() {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [view, setView] = useState({})
  const[show, setShow] = useState(false)

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
  }, [])

  const finds = countries
    .filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
  
  const handleView = (country) => {
    setView(country);
    setShow(true);
    setSearch('');
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setShow(false);
  }

  const msg = <span>Too many matches, specify another filter<br /></span>
  
  const res = finds.length === 1 ?
    <ViewCountry country = {finds[0]}/>
    :
    finds.length > 10 ? msg : <ListCountries finds={finds} handleView={handleView}/>
  
  return (
    <div className="App">
      <label htmlFor="search">find countries </label>
      <input type="text" id="search" value={search} onChange={handleSearch} />
      <br />
      {show ? <ViewCountry country={view}/> : res}
    </div>
  );
}

export default App;

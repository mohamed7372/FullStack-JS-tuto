const ListCountries = ({finds, handleView}) =>
    finds.map(country =>
        <span key={country.name.common}>
            {country.name.common}
            <button onClick={() => handleView(country)}>show</button>
            <br />
        </span>
    );
 
export default ListCountries;
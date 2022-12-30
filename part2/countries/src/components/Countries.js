
const Countries = ({ countries, searchCountry }) => {

    function checkName(country) {
        const nameMatches = country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
        return nameMatches
      }
    
    const countriesFiltered = searchCountry === '' ? countries : countries.filter(checkName)

    function renderCountries() {
        console.log('renderCountries started');
        switch(true) {
            case (countriesFiltered.length === 0):
                console.log(' - renderCountries case 0');
                return <p>Too many matches, specify another filter.</p>
            case (countriesFiltered.length === 1):
                console.log(' - renderCountries case 1');
                const countryLanguages = countriesFiltered[0].languages
                console.log(countriesFiltered[0]);
                console.log(countryLanguages);
                return (
                    <>
                        <h2>{countriesFiltered[0].name.common}</h2>
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
                    </>
                )
            case (countriesFiltered.length < 11):
                console.log(' - renderCountries case <11');
                return countriesFiltered.map(countries =>
                    <p key={countries.cca3}>{countries.name.common}</p>
                )
            default:
                console.log(' - renderCountries case default');
                return <p>Too many matches, specify another filter.</p>
        }
    }
      

    return (
        <div>
            <div>
                {renderCountries()}
            </div>
        </div>
    )
}

export default Countries
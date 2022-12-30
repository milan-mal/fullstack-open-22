import CountryDetail from "./CountryDetail"

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
                return <CountryDetail countriesFiltered={countriesFiltered} />
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
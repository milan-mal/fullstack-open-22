const CountryDetail = ({ countriesFiltered }) => {
    const countryLanguages = countriesFiltered[0].languages

    return (
        <div>
            <h2>{countriesFiltered[0].name.common}</h2>
            <p>
                capital {countriesFiltered[0].capital}
                <br/>
                area {countriesFiltered[0].area}
            </p>
            <h3>languages:</h3>
            <ul>
                {console.log(countryLanguages)}
                {Object.entries(countryLanguages).map(([key, value]) => <li key={key}>{value}</li>)}
            </ul>
            <img src={countriesFiltered[0].flags['png']} alt='country flag' />
        </div>
    )
}

export default CountryDetail
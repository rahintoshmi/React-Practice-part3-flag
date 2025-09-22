import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;
    const [visitedCountries,setVisitiedCountries] = useState([]);
    const handleVisitedCountries =(country)=>{
       const newVisitiedCountries = [...visitedCountries,country];
       setVisitiedCountries(newVisitiedCountries);
    }
    const [visitedFlags,setVisitedFlags] = useState([]);
    const handleFlags=(flag)=>{
        const newFlags = [...visitedFlags,flag];
        setVisitedFlags(newFlags);
    }
    return (
        <div>
            <h2>In the countries: {countries.length}</h2>
            <h2>Total visited countries:{visitedCountries.length}</h2>
            <h2>Total visited flags:{visitedFlags.length}</h2>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}> {country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags'>
                {
                    visitedFlags.map((flag,index)=><img key={index} src={flag}></img>)
                }
            </div>
            <div className='countries'>
            {
                countries.map(country=><Country  key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleFlags={handleFlags}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;
import React from 'react';
import './Country.css';
const Country = ({country}) => {
    console.log(country);
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
            <h5>Name:{country.name.common}</h5>
            <h5>Population:{country.population.population}</h5>
            
        </div>
    );
};

export default Country;
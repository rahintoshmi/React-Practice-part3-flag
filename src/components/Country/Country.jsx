import React, { useState } from 'react';
import './Country.css';
const Country = ({country,handleVisitedCountries,handleFlags}) => {
    const [visited,setVisited] = useState(false)

    const handleVisited = () =>{
        //1st
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }
        //2nd
        // setVisited(!visited)
        //3rd
        setVisited(visited ? false : true);
        handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
            <h5>Name:{country.name.common}</h5>
            <h5>Population:{country.population.population}</h5>
            <h5>Area:{country.area.area} {country.area.area >30000 ? 'Big Country' : 'Small Country'}</h5>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'not visited'}</button>
            <button onClick={()=>{handleFlags(country.flags.flags.png)}}>Add visited country flags</button>
        </div>
    );
};

export default Country;
import React from 'react';

import WeatherCard from '../weatherCard/weatherCard.component'

import './cardList.styles.scss'

const CardList=({cities}) =>{
    return(
        cities.map((users,i) =>{
            return (    

                <WeatherCard className="container"
                    key={cities[i].countryCode} 
                    name={cities[i].name} 
                    countryCode={cities[i].countryCode}
                    /> 

            );      
        })
    );
}

export default CardList;
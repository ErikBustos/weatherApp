import React from 'react';

import Header from './components/header/header.component'
import CardList from './components/cardList/cardList.component';
import CitySelector from './components/citySelector/citySelector.component';
import CardGroup from 'react-bootstrap/CardGroup'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import cities from './citiesArray';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      cities: cities
    }
  }

    handleBClickCallback =(cityInput, countryCodeInput) => {
     this.state.cities.push({
              name: cityInput,
              countryCode: countryCodeInput
          })
    console.log(cityInput, countryCodeInput);
    this.forceUpdate()
  }

  render() {
    return (
      <div className= "App">
        <Header/>
        <CitySelector handleBClick={this.handleBClickCallback}/>
        <CardGroup className="cards">
        <CardList cities= {this.state.cities} />
        </CardGroup>
        
      </div>
    );
  }
}
export default App;

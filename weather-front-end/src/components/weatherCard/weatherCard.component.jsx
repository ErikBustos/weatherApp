import React from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './weatherCard.styles.scss'

class WeatherCard extends React.Component{
    constructor (props){
        super(props);

        let {name,countryCode} = this.props;

        this.state= {
            name: name,
            countryCode: countryCode,
            main: '',
            description: '',
            iconURL: '',
            temp: '',
            wind: ''
        }

        this.getWeather()
    }

    getWeather(){
        let weatherURL= `http://localhost:3000/weather?cityID=${this.state.name},${this.state.countryCode}`;
        fetch(weatherURL, {
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(json => {
          console.log(json)
          this.setState({
            main: json.main,
            description: json.description,
            iconURL: json.iconURL,
            feels_like: json.feels_like,
            temp: json.temp,
            wind: json.wind
          })
        })
        .catch(err => console.log(err))
      }

    render (){
        return(

                <Card className = " collection-weather ">
                <Card.Img variant="top" src={this.state.iconURL} className ='image' />
                <Card.Body>
                <Card.Title>{this.state.name + ', ' + this.state.countryCode}</Card.Title>
                    <Card.Text> {this.state.main}</Card.Text>
                    <Card.Text> {this.state.description}</Card.Text>
                    <Button variant="primary">Temperature : {this.state.temp}</Button>                    
                    <Card.Text className = "feelslike"> But Feels like: {this.state.feels_like}</Card.Text>
                </Card.Body>
                <Card.Text> WIND: {this.state.wind}</Card.Text>
                </Card>

        );
       
    }
}

export default WeatherCard;

import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import './citySelector.styles.scss'

class CitySelector extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            cityInput: '',
            countryCodeInput: ''
        };

    }

    handleChange = event => {
        const{name,value}= event.target;
        this.setState({[name]:  value});

        console.log(this.state);
    }

    sendData = () => {
        this.props.handleBClick(this.state.cityInput, this.state.countryCodeInput);
    }

    render(){
        const {cityInput, countryCodeInput} = this.state;
        
        return(
            
            <div>
                <Jumbotron className ="jumbo">
                    <h1>Check out today's weather!</h1>
                    <p>
                        Add any cities you want!
                </p>
        
                <form className="c">
                        <div className="form-row">
                            <div className="col-7">
                                <input type="text" className="form-control" placeholder="City"
                                value = {cityInput}
                                name = 'cityInput'
                                onChange= {this.handleChange}
                                />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Country Code"
                                value= {countryCodeInput}
                                name = 'countryCodeInput'
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <Button variant="primary"
                                onClick={this.sendData}
                                >Add City</Button>
                    </form>
                </Jumbotron>   
            </div>
        )
    }
}


export default CitySelector;

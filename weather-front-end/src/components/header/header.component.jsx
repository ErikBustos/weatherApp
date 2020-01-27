import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import './header.styles.scss'


const Header = () => (
    <div>
        <Navbar bg="dark" variant="dark" className= "header">
            <Navbar.Brand className= "center">WEATHERAPP
                <img
                    src='https://cdn1.iconfinder.com/data/icons/weather-429/64/weather_icons_color-06-512.png'
                    width="30"
                    height="30"
                    className="d-inline-block align-top" 
                    alt=""
                />
            </Navbar.Brand>
    </Navbar>
  </div>
);

export default Header;

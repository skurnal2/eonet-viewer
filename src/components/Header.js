import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/weather-thunder-rainy';
import locationIcon2 from '@iconify/icons-mdi/weather-tornado';

function Header() {
    return (
        <header className="header">
            <div>
                <Icon className="weather-icon" icon={locationIcon}></Icon> 
                <h1>EONET Natural Events Map</h1>
                <Icon className="weather-icon" icon={locationIcon2}></Icon> 
            </div>
        </header>
    )
}

export default Header;

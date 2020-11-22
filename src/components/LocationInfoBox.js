import { useState, useEffect } from 'react';

const LocationInfoBox = ( {info, infoBoxColor} ) => {

    return (
        <div className="location-info" style={{ backgroundColor: infoBoxColor }}>
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>Event: <strong>{ info.event }</strong></li>                
                <li>Title: <strong>{ info.title }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox;

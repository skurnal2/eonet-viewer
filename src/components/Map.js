import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import Header from './Header';

const Map = ({ eventData, center, zoom }) => {

    const [locationInfo, setLocationInfo] = useState(null);   
    const [infoBoxColor, setInfoBoxColor] = useState(''); 

    const markers = eventData.map(ev => {
        if((ev.categories[0].id === 8 || ev.categories[0].id === 10 || ev.categories[0].id === 12 || ev.categories[0].id === 15) &&
            ev.geometries[0].type != 'Polygon') {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
            onClick={() => onClickFunctions({ id: ev.id, title: ev.title, event: ev.categories[0] })} eventId={ev.categories[0].id} />
        }
        return null;
    });

    function onClickFunctions(object) {
        setLocationInfo({ id: object.id, title: object.title, event: object.event.title });
        changeBoxColorState(object.event.id);
    }

    function changeBoxColorState(id) {        
        switch(id) {
            case 8:
                setInfoBoxColor('#fc030370');                            
                break;
            case 10:
                setInfoBoxColor('#04800670');                                
                break;
            case 12:
                setInfoBoxColor('#52200970');
                break;
            case 15:
                setInfoBoxColor('#1b00c970');
                break;
            default:
                setInfoBoxColor('#4a4a4a70');                
        }
    }
    

    return (
        <div className="map">
        <Header className="header" />
            <GoogleMapReact
                bootstrapURLKeys={{ 
                    key: ''}}
                    defaultCenter={center}
                    defaultZoom={zoom}
                    
                >
                {markers}
            </GoogleMapReact>                        
            { locationInfo && <LocationInfoBox info={locationInfo} infoBoxColor={infoBoxColor} /> } 
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 3
}

export default Map;

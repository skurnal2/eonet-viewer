import { Icon } from '@iconify/react';
import locationIconFire from '@iconify/icons-mdi/fire-alert';
import locationIconStorm from '@iconify/icons-mdi/storm-advisory-outline';
import locationIconVolcano from '@iconify/icons-mdi/triangle';
import locationIconSea from '@iconify/icons-mdi/wave';
import locationIconUnknown from '@iconify/icons-mdi/question-mark';

const LocationMarker = ( { lat, long, onClick, eventId } ) => {
    return (
        <div className="location-marker" onClick={onClick} >
            { 
                eventId === 8 ? <Icon icon={locationIconFire} className="location-icon fire"></Icon> :
                eventId === 10 ? <Icon icon={locationIconStorm} className="location-icon storm"></Icon> :
                eventId === 12 ? <Icon icon={locationIconVolcano} className="location-icon volcano"></Icon> :
                eventId === 15 ? <Icon icon={locationIconSea} className="location-icon sea"></Icon> :
                <Icon icon={locationIconUnknown} className="location-icon unknown"></Icon>
            }
        </div>
    )
}

export default LocationMarker

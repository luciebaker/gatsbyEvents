import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Segment, Icon } from 'semantic-ui-react';

const Marker = () => <Icon name='marker' size='big' color='violet' />;

const EventDetailedMap = ({lat, lng}) => {
    const zoom = 14
    return (
        <Segment attached='bottom' >
        <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCShCGoJ5T-XSLcfTPGAk32a9BHk1SV4_A' }}
            defaultCenter={{lat, lng}}
            defaultZoom={zoom}
        >
        <Marker
            lat={lat}
            lng={lng}
        />
        </GoogleMapReact>
        </div>
        </Segment>
    )
}

export default EventDetailedMap
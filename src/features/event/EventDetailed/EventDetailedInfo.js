import React, {useState} from 'react'
import { Segment, Grid, Icon, Button } from 'semantic-ui-react'
import EventDetailedMap from './EventDetailedMap'
import { format, parseISO } from 'date-fns'

const EventDetailedInfo = ({event}) => {
    const [isMapOpen, showMapToggle] = useState(false)
    return (
        <Segment.Group>
            <Segment attached="top">
                <Grid>
                <Grid.Column width={1}>
                    <Icon size="large" color="violet" name="info" />
                </Grid.Column>
                <Grid.Column width={15}>
                    <p>{event.description}</p>
                </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                <Grid.Column width={1}>
                    <Icon name="calendar" size="large" color="violet" />
                </Grid.Column>
                <Grid.Column width={15}>
                    <span>{event.date && format(parseISO(event.date), 'EEEE do LLLL')} at {event.date && format(parseISO(event.date), 'h:mm a')}</span>
                </Grid.Column>
                </Grid>
            </Segment>
            <Segment attached>
                <Grid verticalAlign="middle">
                <Grid.Column width={1}>
                    <Icon name="marker" size="large" color="violet" />
                </Grid.Column>
                <Grid.Column width={11}>
                    <span>{event.venue}</span>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Button onClick={ () => showMapToggle(!isMapOpen)}
                    color="violet" size="tiny" content={isMapOpen ? "Hide map" : "Show map"} />
                </Grid.Column>
                </Grid>
            </Segment>
            {isMapOpen &&
            <EventDetailedMap lat={event.venueLatLng.lat} lng={event.venueLatLng.lng}/>}
            </Segment.Group>
    )
}
export default EventDetailedInfo
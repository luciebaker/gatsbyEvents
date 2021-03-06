import React, { Fragment } from 'react'
import { Segment, Label, Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const EventDetailedSidebar = ({attendees}) => {
    return (
        <Fragment>
            <Segment
                textAlign='center'
                style={{ border: 'none' }}
                attached='top'
                inverted
                color='black'
            >
                {attendees && attendees.length} {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
            </Segment>
            <Segment attached>
                <Item.Group divided>
                {attendees && attendees.map((attendee) => (
                    <Item key={attendee.id} style={{ position: 'relative' }}>
                    {attendee.host && 
                    <Label
                        style={{ position: 'absolute' }}
                        color='teal'
                        ribbon='right'
                    >
                    Host
                    </Label>}
                    <Item.Image size='tiny' src={attendee.photoURL} />
                    <Item.Content verticalAlign='middle'>
                        <Item.Header as='h4'>
                        <Link to={`/profile/${attendee.id}`} style={{color: 'black'}} >
                        {attendee.displayName}
                        </Link> 
                        </Item.Header>
                    </Item.Content>
                    </Item>
                ))}
                </Item.Group>
            </Segment>
        </Fragment>
    )
}

export default EventDetailedSidebar
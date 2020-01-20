import React, { Fragment } from 'react'
import { Header, Segment } from 'semantic-ui-react'

const EventActivity = () => {
    return (
        <Fragment>
            <Segment
                textAlign="center"
                attached="top"
                inverted
                color="violet"
                style={{ border: 'none' }}
            >
            <Header>Recent Activity</Header>
            </Segment>
            <Segment attached>
                <p>Recent activity will be added here.</p>
            </Segment>
        </Fragment>
    )
}

export default EventActivity
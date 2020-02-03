import React from 'react';
import { Segment, Button, Header, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const NotFound = ({ history }) => {
    return (
        <Segment placeholder>
        <Header icon>
            <Icon name='search' />
            Oops - we've looked everywhere but couldn't find the page you requested.
        </Header>
        <Segment.Inline>
            <Button onClick={() => history.push('/events')} color='violet'>
            Return to Events page
            </Button>
        </Segment.Inline>
        </Segment>
    );
};

export default withRouter(NotFound);

import React from 'react';
import { Segment, Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserDetailedSidebar = ({isCurrentUser}) => {
    return (
        <Grid.Column width={4}>
        <Segment>
        {isCurrentUser ? (
            <Button
                as={Link}
                to='/settings'
                color='teal'
                fluid
                content='Edit Profile'
                />
            ) : (
                <Button color='teal' fluid content='Follow User' />
            )}
        </Segment>
        </Grid.Column>
    );
};

export default UserDetailedSidebar;
import React from 'react';
import { Segment, Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserDetailedSidebar = ({isCurrentUser, followUser, unfollowUser, profile, isFollowing}) => {
    return (
        <Grid.Column width={4}>
        <Segment>
        {isCurrentUser && (
            <Button as={Link} to='/settings' color='teal' fluid content='Edit Profile'/>
        )}
        
        {!isCurrentUser && !isFollowing && 
            <Button onClick={() => followUser(profile)} color='teal' fluid content='Follow User'/>
        }
        {!isCurrentUser && isFollowing && 
            <Button onClick={() => unfollowUser(profile)} color='teal' fluid content='Unfollow User'/>
        }
        </Segment>
        </Grid.Column>
    );
};

export default UserDetailedSidebar;
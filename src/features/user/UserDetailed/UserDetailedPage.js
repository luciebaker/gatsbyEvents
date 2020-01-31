import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { Grid } from "semantic-ui-react";
import UserDetailedHeader from './UserDetailedHeader';
import UserDetailedSidebar from './UserDetailedSidebar';
import UserDetailedPhotos from './UserDetailedPhotos';
import UserDetailedEvents from './UserDetailedEvents';
import UserDetailedDescription from './UserDetailedDescription';

const query = ({ auth }) => {
    return [
        {
            collection: 'users',
            doc: auth.uid,
            subcollections: [{ collection: 'photos' }],
            storeAs: 'photos'
        }
    ];
};

const mapState = state => ({
    profile: state.firebase.profile,
    auth: state.firebase.auth,
    photos: state.firestore.ordered.photos
});

class UserDetailedPage extends Component {
    render() {
        const { profile, photos } = this.props;
        
    return (
        <Grid>
            <UserDetailedHeader profile={profile} />
            <UserDetailedDescription profile={profile} />
            <UserDetailedSidebar />
            {photos && photos.length > 0 &&
            <UserDetailedPhotos photos={photos} />}
            <UserDetailedEvents />
        </Grid>
    );
    }
}    

export default connect(mapState)(
    firestoreConnect(auth => query(auth))(UserDetailedPage)
);
import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from 'react-router-dom'
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { openModal } from '../../modals/modalActions';


const actions = {
    openModal
}

const mapState = (state) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile
})

class NavBar extends Component {
    handleSignIn = () => {
        this.props.openModal('LoginModal')
    }

    handleSignOut = () => {
        this.props.firebase.logout()
        this.props.history.push('/')
    }

    handleRegister = () => {
        this.props.openModal('RegisterModal')
    }

    render() {
        const { auth, profile } = this.props
        const authenticated = auth.isLoaded && !auth.isEmpty
        return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src='/assets/GatStackLgWhite.png' alt='logo'/>
                </Menu.Item>
                <Menu.Item as={NavLink} exact to='/events' name='Events' />
                {authenticated &&
                    <Fragment>
                        <Menu.Item as={NavLink} to='/people' name='People' />
                        <Menu.Item as={NavLink} to='/test' name='Test' />
                        <Menu.Item>
                        <Button as={Link} to='/createEvent' floated='right' color='teal' content='Create Event' />
                        </Menu.Item>
                    </Fragment>
                }

                {authenticated ? (             
                    <SignedInMenu auth={auth} profile={profile} signOut={this.handleSignOut} />
                ) : (
                    <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />
                )}
            </Container>
        </Menu>
        );
    }
}

export default withRouter(withFirebase(connect(mapState, actions)(NavBar)))

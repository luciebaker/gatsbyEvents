import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";

class NavBar extends Component {
    render() {
        return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo' />
                     Gatsby Events
                </Menu.Item>
                <Menu.Item name='Events' />
                <Menu.Item>
                    <Button floated='right' color='teal' content='Create Event' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button standard inverted content='Login' />
                    <Button standard inverted content='Sign Out' style={{ marginLeft: "0.5em" }} />
                </Menu.Item>
            </Container>
        </Menu>
        );
    }
}

export default NavBar;

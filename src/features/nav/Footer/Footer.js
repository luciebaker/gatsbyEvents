import React from 'react'
import { Container } from 'semantic-ui-react'

const Footer = () => {
    return (
        
        <Container fluid textAlign='center' className='footer'>
        <p> &copy; {new Date().getFullYear().toString()} | GatStack Events | A concept Web App by <a href="https://lbmedia.netlify.com" target="_blank" rel="noopener noreferrer">LB Media</a></p>
        </Container>
            
        
    )
}

export default Footer 
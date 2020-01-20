import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const SignedOutMenu = ({signIn, register}) => {
    return (
        
        <Menu.Item position='right'>
            <Button onClick={signIn} standard inverted content='Login' />
            <Button onClick={register} standard inverted content='Register' style={{ marginLeft: "0.5em" }} />
        </Menu.Item>
    )
}

export default SignedOutMenu
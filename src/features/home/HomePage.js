import React from 'react'
import { Segment, Image, Button, Icon, Grid } from 'semantic-ui-react'

const HomePage = ({history}) => {
    return (
        <div>
            <Segment vertical inverted className="masthead">
                <Grid className="masthead-content">
                <Grid.Column verticalAlign='middle' textAlign='center'>
                <Image centered className="homepage-logo" 
                src='/assets/GatStackLgWhite.png'
                alt='Gatstack logo'
                />
                <br />
                    <Button centered
                    onClick={() => history.push('/events')}
                    size='big' inverted>
                        Get started
                    <Icon name='right arrow' inverted />
                    </Button>
                </Grid.Column>
                </Grid>
                
            </Segment> 
        </div>
    )
}

export default HomePage
import React, { Component } from 'react'
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { reduxForm, Field} from 'redux-form'
import { createEvent, updateEvent} from '../eventActions'
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate'
import cuid from 'cuid'
import TextInput from '../../../app/common/form/TextInput'
import TextArea from '../../../app/common/form/TextArea'
import SelectInput from '../../../app/common/form/SelectInput'
import DateInput from '../../../app/common/form/DateInput'

const mapState = (state, ownProps) => {
    const eventId = ownProps.match.params.id

    let event = {}

    if (eventId && state.events.length > 0) {
        event = state.events.filter(event => event.id === eventId)[0]
    }

    return {
        initialValues: event
    }
}

const actions = {
    createEvent, 
    updateEvent
}

const validate = combineValidators({
    title: isRequired({message: 'The event title is required'}),
    category: isRequired({message: 'You must pick a category for your event'}),
    description: composeValidators(
        isRequired({message: 'Please enter a description of your event'}),
        hasLengthGreaterThan(9)({message: 'Description needs to be at least 10 characters'})
    )(),
    city: isRequired('city'),
    venue: isRequired('venue'),
    date: isRequired('date')
    
})

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];


class EventForm extends Component {

    onFormSubmit = values => {
        if (this.props.initialValues.id) {
            this.props.updateEvent(values);
            this.props.history.push(`/events/${this.props.initialValues.id}`)
        } else {
            const newEvent = {
                ...values,
                id: cuid(),
                hostPhotoURL: "/assets/user.png",
                hostedBy: 'Bob'
            }
            this.props.createEvent(newEvent);
            this.props.history.push(`/events/${newEvent.id}`)
        }
    }

    render() {
        const {history, initialValues, invalid, submitting, pristine} = this.props
        return (
            <Grid>
            <Grid.Column width={10}>
            <Segment>
                <Header sub color='violet' content='Event Details' />
                <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)} autoComplete='off'>
                    <Field 
                    name='title' 
                    component={TextInput} 
                    placeholder='Give your event a title'/>
                    <Field 
                    name='category' 
                    component={SelectInput} 
                    options={category}
                    placeholder='Select your event category'/>
                    <Field 
                    name='description' 
                    component={TextArea} 
                    rows={3} 
                    placeholder='Describe your event'/> 
                    <Header sub color='violet' content='Event Location Details' /> 
                    <Field name='city' component={TextInput} placeholder='In which city is your event taking place?'/>
                    <Field name='venue' component={TextInput} placeholder='Event Venue'/>
                    <Field 
                    name='date' 
                    component={DateInput} 
                    showTimeSelect
                    timeFormat='HH:mm'
                    dateFormat='LLLL dd, yyyy h:mm a'
                    placeholder='When is your event taking place?'/>
                    <Button disabled={invalid || submitting || pristine} color="teal" type="submit">
                        Submit
                    </Button>
                <Button 
                onClick={initialValues.id 
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push('/events')
                } 
                type="button">
                Cancel</Button>
                </Form>
            </Segment>
            </Grid.Column>
            </Grid>
            
        )
    }
}
export default connect(mapState, actions)(reduxForm({form: 'eventForm', validate})(EventForm))
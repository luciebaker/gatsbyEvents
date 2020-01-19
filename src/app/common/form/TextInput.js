import React from 'react'
import { Form, Label, Input } from 'semantic-ui-react'

const TextInput = ({
    input, 
    width, 
    type, 
    placeholder, 
    meta: {touched, error} 
}) => {
    return (
        <Form.Field error={touched && !!error}>
        <Input {...input} placeholder={placeholder} type={type} />
        {touched && error && <Label basic color='red'>{error}</Label>}
        </Form.Field>
    )
}

export default TextInput
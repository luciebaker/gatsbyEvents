import React from 'react'
import { Form, Label, Select } from 'semantic-ui-react'

//see module 79 @ 7:00 for categories and multiple options
//actual categories are specified in EventForm.js

const SelectInput = ({
    input,
    type,
    placeholder,
    multiple,
    options,
    meta: {touched, error} 
}) => {
    return (
        <Form.Field error={touched && !!error} >
            <Select 
            value={input.value || null}
            onChange={(e, data) => input.onChange(data.value)}
            placeholder={placeholder} 
            options={options}
            multiple={multiple}
            />
            {touched && error && <Label basic color='red'>{error}</Label>}
        </Form.Field>
    )
}
export default SelectInput
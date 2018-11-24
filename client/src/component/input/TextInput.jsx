import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core'
import {FormattedMessage} from "react-intl";

class TextInput
    extends PureComponent {

    render() {
        const {label, input, meta, type, className, required, autoComplete} = this.props

        return (
            <FormControl>
                <InputLabel htmlFor="adornment-password"><FormattedMessage id={`form.${label}`} /> {required ? '*': ''}</InputLabel>
                <Input
                    id={label}
                    autoComplete={autoComplete || 'off'}
                    error={meta.error && meta.touched}
                    className={className}
                    type={type ? type : 'text'}
                    {...input}
                />
                {meta && meta.error && meta.touched && meta.dirty &&
                <FormHelperText
                    className={className}
                    id={meta.error}>
                    <FormattedMessage id={meta.error}/>
                </FormHelperText>}
            </FormControl>
        )
    }
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired
}

export default TextInput

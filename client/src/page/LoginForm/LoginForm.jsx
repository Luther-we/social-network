import React, {PureComponent} from 'react'
import {FormattedMessage} from 'react-intl'
import {Field, reduxForm} from 'redux-form'
import {compose} from 'redux'

import {Button, withStyles, Paper} from '@material-ui/core'

import PasswordPut from '../../component/input/PasswordPut'
import TextInput from '../../component/input/TextInput'
import Title from '../../component/typography/Title'
import appConst from '../../utilities/appConst'

const validate = (values) => {
    const errors = {}

    if (!appConst.regExPassword.test(values.password)) {
        errors.password= 'error.passwordElement'
    }

    if (!appConst.regExEmail.test(values.email)) {
        errors.email= 'error.email'
    }

    console.log('Les erreurs sont = ', errors)
    return errors
}

const styles = theme => ({
    field: {
        width: 250
    },
    paperStyle: {
        width: 300,
        margin: 'auto',
        marginTop: theme.spacing.unit
    },
    appBar: {
        height: 40,
        top: 0,
        width: '100%'
    }
})

class LoginForm
    extends PureComponent {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit = (values) => {
        console.log('On Submit', values)
    }

    render() {
        const {classes} = this.props

        return (
            <Paper
                className={classes.paperStyle}
            >
                <Title idMessage ='title.connectTo'/>
                <form
                    className={classes.form}
                    onSubmit={this.props.handleSubmit((values) => this.submit(values))}>
                    <Field
                        label='email'
                        name='email'
                        component={TextInput}
                        className={classes.field}
                    />
                    <br/>
                    < Field
                        label='password'
                        name='password'
                        component={PasswordPut}
                        className={classes.field}
                        control={true}
                    />
                    <br/>
                    < Button
                        type="submit"
                    > <FormattedMessage id='form.toConnect'/> </Button>
                </form>
            </Paper>
        )
    }
}

export default compose(
    reduxForm({
        form: 'connect',
        validate
    }), withStyles(styles))(LoginForm)

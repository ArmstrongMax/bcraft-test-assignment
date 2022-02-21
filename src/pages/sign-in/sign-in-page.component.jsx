import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {createStructuredSelector} from "reselect";
import {selectSignInEmail, selectSignInPassword} from "../../redux/selectors";
import {connect} from "react-redux";
import {handleChange, signIn} from "../../redux/actions";
import {withAuthRedirect} from "../../HOCs/withAuthRedirect.component";
import {compose} from "redux";
import {signInSchema} from '../../validation/validationShemas'
import PageTitle from "../../components/page-title/page-title.component";
import ValidationError from "../../components/validation-error/validation-error.component";

class SignInPage extends React.Component {

    constructor() {
        super();
        this.state = {
            validationError: null
        }
    }
    onSubmit = async event => {
        event.preventDefault()
        const {email, password, signIn} = this.props
        try {
            await signInSchema.validate({email, password})
            signIn({email, password})
        } catch (error) {
            this.setState({validationError: error.message})
        }
    }
    onChange = event => {
        const {handleChange} = this.props
        const {name, value} = event.target;
        handleChange({[name]: value})
    }

    render() {
        const {email, password} = this.props
        const {validationError} = this.state
        return <div>
            <PageTitle title={'Вход'}/>
            <form onSubmit={this.onSubmit}>
                <FormInput
                    name='signInEmail'
                    value={email}
                    onChange={this.onChange}
                    label='Почтовый адрес'
                />
                <FormInput
                    type='password'
                    name='signInPassword'
                    value={password}
                    onChange={this.onChange}
                    label='Пароль'
                />
                {validationError && <ValidationError message={validationError}/>}
                <CustomButton type='submit'>Войти</CustomButton>
            </form>
        </div>
    }
}

const mapStateToProps = createStructuredSelector({
    email: selectSignInEmail,
    password: selectSignInPassword
})
const mapDispatchToProps = dispatch => ({
    signIn: (email, password) => dispatch(signIn(email, password)),
    handleChange: value => dispatch(handleChange(value))
})

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(SignInPage)
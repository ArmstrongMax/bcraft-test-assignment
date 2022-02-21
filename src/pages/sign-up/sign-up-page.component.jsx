import React from "react";
import {createStructuredSelector} from "reselect";
import {
    selectSignUpEmail,
    selectSignUpPassword,
    selectSignUpPasswordConfirm
} from "../../redux/selectors";
import {connect} from "react-redux";
import {handleChange, signUp} from "../../redux/actions";
import {withAuthRedirect} from "../../HOCs/withAuthRedirect.component";
import {compose} from "redux";
import {signUpSchema} from "../../validation/validationShemas";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import PageTitle from "../../components/page-title/page-title.component";
import ValidationError from "../../components/validation-error/validation-error.component";

class SignUpPage extends React.Component {
    constructor() {
        super();
        this.state = {
            validationError: null
        }
    }
    onSubmit = async event => {
        event.preventDefault()
        const {email, password, passwordConfirm, signUp} = this.props
        try {
            await signUpSchema.validate({email, password, passwordConfirm})
            if (password !== passwordConfirm) throw new Error('Пароли не совпадают')
            signUp({email, password})
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
        const {email, password, passwordConfirm} = this.props
        const {validationError} = this.state
        return <div>
            <PageTitle title={'Регистрация'}/>
            <form onSubmit={this.onSubmit}>
                <FormInput
                    name='signUpEmail'
                    value={email}
                    onChange={this.onChange}
                    label='Почтовый адрес'
                />
                <FormInput
                    type='password'
                    name='signUpPassword'
                    value={password}
                    onChange={this.onChange}
                    label='Пароль'
                />
                <FormInput
                    type='password'
                    name='signUpPasswordConfirm'
                    value={passwordConfirm}
                    onChange={this.onChange}
                    label='Подтвердите пароль'
                />
                {validationError && <ValidationError message={validationError}/>}
                <CustomButton type='submit'>Войти</CustomButton>
            </form>
        </div>
    }
}

const mapStateToProps = createStructuredSelector({
    email: selectSignUpEmail,
    password: selectSignUpPassword,
    passwordConfirm: selectSignUpPasswordConfirm
})
const mapDispatchToProps = dispatch => ({
    signUp: (email, password) => dispatch(signUp(email, password)),
    handleChange: value => dispatch(handleChange(value))
})

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(SignUpPage)
import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {createStructuredSelector} from "reselect";
import {
    selectChangePasswordNewPassword, selectChangePasswordNewPasswordConfirm,
    selectChangePasswordOldPassword, selectCurrentUserEmail,
} from "../../redux/selectors";
import {connect} from "react-redux";
import {changePassword, handleChange} from "../../redux/actions";
import {compose} from "redux";
import {withNoAuthRedirect} from "../../HOCs/withNoAuthRedirect.component";
import {changePasswordSchema} from "../../validation/validationShemas";
import ValidationError from "../../components/validation-error/validation-error.component";
import PageTitle from "../../components/page-title/page-title.component";

class ChangePasswordPage extends React.Component {
    constructor() {
        super();
        this.state = {
            validationError: null
        }
    }

    onSubmit = async event => {
        event.preventDefault()
        const {currentUser, oldPassword, newPassword, newPasswordConfirm, changePassword} = this.props
        try {
            await changePasswordSchema.validate({oldPassword, newPassword, newPasswordConfirm})
            if (newPassword !== newPasswordConfirm) throw new Error('Новые пароли не совпадают')
            changePassword({currentUser, oldPassword, newPassword})
        } catch (error) {
            this.setState({validationError: error.message})
        }
    }
    onChange = event => {
        console.log(this.props)
        const {handleChange} = this.props
        const {name, value} = event.target
        handleChange({[name]: value})
    }

    render() {
        const {oldPassword, newPassword, newPasswordConfirm} = this.props
        const {validationError} = this.state
        return <div>
            <PageTitle title={'Изменить пароль'}/>
            <form onSubmit={this.onSubmit}>
                <FormInput
                    type='password'
                    name='changePasswordOldPassword'
                    value={oldPassword}
                    onChange={this.onChange}
                    label='Пароль'
                />
                <FormInput
                    type='password'
                    name='changePasswordNewPassword'
                    value={newPassword}
                    onChange={this.onChange}
                    label='Пароль'
                />
                <FormInput
                    type='password'
                    name='changePasswordNewPasswordConfirm'
                    value={newPasswordConfirm}
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
    currentUser: selectCurrentUserEmail,
    oldPassword: selectChangePasswordOldPassword,
    newPassword: selectChangePasswordNewPassword,
    newPasswordConfirm: selectChangePasswordNewPasswordConfirm
})
const mapDispatchToProps = dispatch => ({
    changePassword: (email, oldPassword, newPassword) => dispatch(changePassword(email, oldPassword, newPassword)),
    handleChange: value => dispatch(handleChange(value))
})

export default compose(connect(mapStateToProps, mapDispatchToProps), withNoAuthRedirect)(ChangePasswordPage)
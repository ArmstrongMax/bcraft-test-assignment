import React from "react";
import {createStructuredSelector} from "reselect";
import {selectCurrentUserEmail} from "../../redux/selectors";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {logOut} from "../../redux/actions";
import {MenuDropdownContainer, SpanContainer} from "./menu-dropdown.styles";

class MenuDropdown extends React.Component {
    render() {
        const {currentUserEmail, logOut} = this.props
        return <MenuDropdownContainer>
            {currentUserEmail
                ? <>
                    <SpanContainer onClick={() => logOut()}>Выйти</SpanContainer>
                    <Link to='/change-password'>Сменить пароль</Link>
                </>
                : <>
                    <Link to='/sign-in'>Вход</Link>
                    <Link to='/sign-up'>Регистрация</Link>
                </>
            }
        </MenuDropdownContainer>
    }
}

const mapStateToProps = createStructuredSelector({
    currentUserEmail: selectCurrentUserEmail
})

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuDropdown)


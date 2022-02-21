import React from "react"
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectCurrentUserEmail} from "../redux/selectors";

const mapStateToProps = createStructuredSelector({
    currentUserEmail: selectCurrentUserEmail
})

export const withNoAuthRedirect = WrappedComponent => {
    const RedirectComponent = ({currentUserEmail, ...otherProps}) => {
        if (currentUserEmail) return <WrappedComponent {...otherProps}/>
        return <Redirect to='/sign-in'/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}
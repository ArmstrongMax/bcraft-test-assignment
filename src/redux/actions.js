import ActionTypes from "./types";

export const signIn = userCredentials => ({
    type: ActionTypes.SIGN_IN,
    payload: userCredentials
})
export const signUp = userCredentials => ({
    type: ActionTypes.SIGN_UP,
    payload: userCredentials
})
export const changePassword = userCredentials => ({
    type: ActionTypes.PASSWORD_CHANGE,
    payload: userCredentials
})
export const setServerMessage = message => ({
    type: ActionTypes.SET_SERVER_MESSAGE,
    payload: message
})
export const clearServerMessage = () => ({type: ActionTypes.CLEAR_SERVER_MESSAGE})
export const handleChange = value => ({
    type: ActionTypes.HANDLE_CHANGE,
    payload: value
})
export const setCurrentUser = email => ({
    type: ActionTypes.SET_CURRENT_USER,
    payload: email
})
export const logOut = () => ({type: ActionTypes.LOG_OUT})
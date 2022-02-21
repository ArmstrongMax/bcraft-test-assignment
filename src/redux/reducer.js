import ActionTypes from "./types";

const INITIAL_STATE = {
    currentUserEmail: null,
    serverMessage:null,
    signInEmail: '',
    signInPassword: '',
    signUpEmail: '',
    signUpPassword: '',
    signUpPasswordConfirm: '',
    changePasswordOldPassword: '',
    changePasswordNewPassword: '',
    changePasswordNewPasswordConfirm: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SET_SERVER_MESSAGE: return {...state, serverMessage: action.payload }
        case ActionTypes.CLEAR_SERVER_MESSAGE: return {...state, serverMessage: null }
        case ActionTypes.HANDLE_CHANGE: return {...state, ...action.payload }
        case ActionTypes.SET_CURRENT_USER: return {...state, currentUserEmail: action.payload }
        case ActionTypes.LOG_OUT: return {...state, currentUserEmail: null }
        default:
            return state
    }
}

export default reducer
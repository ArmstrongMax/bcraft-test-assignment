import {all, call, takeLatest, put, delay} from 'redux-saga/effects'
import {api} from "../api/api";
import ActionTypes from "./types";
import {clearServerMessage, setCurrentUser, setServerMessage} from "./actions";

export function* signIn({payload: {email, password}}) {
    const response = yield api.signIn(email, password)
    if (response.status === 'success') {
        yield put(setCurrentUser(response.user.email))
        yield put(setServerMessage('Вход выполнен успешно'))
    } else yield put(setServerMessage(response.message))
}
export function* signUp({payload: {email, password}}) {
    const response = yield api.signUp(email, password)
    if (response.status === 'success') {
        yield put(setCurrentUser(response.user.email))
        yield put(setServerMessage('Регистрация выполнена успешно'))
    } else yield put(setServerMessage(response.message))
}
export function* changePassword({payload: {currentUser, oldPassword, newPassword}}) {
    const response = yield api.changePassword(currentUser, oldPassword, newPassword)
    if (response.status === 'success') {
        yield put(setServerMessage('Пароль изменен успешно'))
    } else yield put(setServerMessage(response.message))
}
export function* setSystemLogoutMessage() {yield put(setServerMessage('Выход из ситемы успешно выполнен'))}
export function* clearServerMessageWithDelay() {
    yield delay(5000)
    yield put(clearServerMessage())
}

export function* onSignUp() {
    yield takeLatest(ActionTypes.SIGN_UP, signUp)
}
export function* onSignIn() {
    yield takeLatest(ActionTypes.SIGN_IN, signIn)
}
export function* onChangePassword() {
    yield takeLatest(ActionTypes.PASSWORD_CHANGE, changePassword)
}
export function* onSetServerMessage() {
    yield takeLatest(ActionTypes.SET_SERVER_MESSAGE, clearServerMessageWithDelay)
}
export function* onLogOut() {
    yield takeLatest(ActionTypes.LOG_OUT, setSystemLogoutMessage)
}
export default function* rootSaga() {
    yield all(
        [
            call(onSignUp),
            call(onSignIn),
            call(onSetServerMessage),
            call(onChangePassword),
            call(onLogOut)
        ]
    )
}
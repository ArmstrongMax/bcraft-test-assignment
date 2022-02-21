import {createSelector} from "reselect";

const selectState = state => state

export const selectCurrentUserEmail = createSelector(selectState, state => state.currentUserEmail)
export const selectServerMessage = createSelector(selectState, state => state.serverMessage)
export const selectSignInEmail = createSelector(selectState, state => state.signInEmail)
export const selectSignInPassword = createSelector(selectState, state => state.signInPassword)
export const selectSignUpEmail = createSelector(selectState, state => state.signUpEmail)
export const selectSignUpPassword = createSelector(selectState, state => state.signUpPassword)
export const selectSignUpPasswordConfirm = createSelector(selectState, state => state.signUpPasswordConfirm)
export const selectChangePasswordOldPassword = createSelector(selectState, state => state.changePasswordOldPassword)
export const selectChangePasswordNewPassword = createSelector(selectState, state => state.changePasswordNewPassword)
export const selectChangePasswordNewPasswordConfirm = createSelector(selectState, state => state.changePasswordNewPasswordConfirm)


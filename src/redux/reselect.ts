import {createSelector} from 'reselect'
import { RootReducerType } from './redux'
const authEmail = (state: RootReducerType) => {
  return state.userAuthMail
}
const authUpEmail = (state: RootReducerType) => {
  return state.userUpEmail.getInspired
}

const profile = (state: RootReducerType) => {
  return state.profile
}
export const resProfile = createSelector( profile, (profile) => {
  return profile
})

export const resAuthUpEmail = createSelector( authUpEmail, (authUpEmail) => {
  return authUpEmail
})
export const authUsersEmail = createSelector( authEmail, (authEmail) => {
  return authEmail
})
export const idToken = createSelector( authEmail, (idToken) => {
  return idToken.dataUser?.idToken
})

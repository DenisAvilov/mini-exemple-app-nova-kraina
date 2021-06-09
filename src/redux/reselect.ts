import {createSelector} from 'reselect'
import { RootReducerType } from './redux'
const init = (state: RootReducerType) => {
  return state.init
}

const authEmail = (state: RootReducerType) => {
  return state.general
}

const general = (state: RootReducerType) => {
  return state.general
}
const authProfile = (state: RootReducerType) => {
  return state.general
}

export const initRes = createSelector(
    init, (saccess) => {
      return saccess
    })


export const profile = createSelector( authProfile, (profile) => {
  return profile
})
export const photo = createSelector( general, (general) => {
  return general
})
export const authUsersEmail = createSelector( authEmail, (authEmail) => {
  return authEmail
})


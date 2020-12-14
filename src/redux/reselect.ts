import {createSelector} from 'reselect'
import { RootReducerType } from './redux'
const authEmail = (state: RootReducerType) => {
  return state.userAuthMail
}

export const authUsersEmail = createSelector( authEmail, (authEmail) => {
  return authEmail
})

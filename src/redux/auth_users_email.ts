
import authMail from '../API/authMail'
import { interLiteralString } from '../fanction_helps/literalFromString'
import { ActionTypes, BaseActionType } from './redux'
// const AUTH_USERS_EMAIL_UP = 'NOVA-KRAINA/AUTH-USERS-EMAIL-UP'
const AUTH_USERS_EMAIL_IN = 'NOVA-KRAINA/AUTH-USERS-EMAIL-IN'
const SET_SUBMITTING = 'SET_SUBMITTING'

type InitialValuesTsIn = {
  email?: string | null,
  password?: string | null,
  controlLabel?: boolean,
}

let initialState:InitialValuesTsIn = {
  email: 'Avilovd@Denis',
  password: null,
  controlLabel: false,
}
const userEmail =
 (state = initialState, action: ActionType): InitialValuesTsIn => {
   switch (action.type) {
     case AUTH_USERS_EMAIL_IN: {
       debugger
       return {
         ...state,
         email: action.email,
       }
     }
     default:
       return state
   }
 }
const actions = {
  authMailIn: (
      email?: string | null,
      password?: string | null,
      controlLabel?: boolean) => (
        { type: interLiteralString(AUTH_USERS_EMAIL_IN),
          email, password, controlLabel } as const),
}
export const sanAuthMailIn = (
    email?: string | null,
    password?: string | null,
    controlLabel?: boolean) :ThunkType => async (distpath) => {

  let result = await authMail.addUserAuthMail(email, password, controlLabel)
  console.log(result)
}


export default userEmail
export type InitialStateType = typeof initialState
export type ActionType = ActionTypes<typeof actions>
// Передаем в наш тип дополнительный тип: stopSubmit
type ThunkType = BaseActionType<ActionType>

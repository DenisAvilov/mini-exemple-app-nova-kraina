
import {authMail} from '../API/authMail'
import { interLiteralString } from '../fanction_helps/literalFromString'
import { ActionTypes, BaseActionType } from './redux'
const AUTH_UP_USERS_EMAIL = 'NOVA-KRAINA/AUTH-UP-USERS-EMAIL'


type InitialValuesTsUp = {
  name?: string | null,
  lastName?: string | null,
  email: string,
  password: string,
  getInspired?: boolean
}

let initialState: InitialValuesTsUp = {
  name: null,
  lastName: null,
  email: '',
  password: '',
  getInspired: false,
}
const authUpEmail =
 (state = initialState, action: ActionType): InitialValuesTsUp => {
   switch (action.type) {
     case AUTH_UP_USERS_EMAIL: {
       return {
         ...state,
         email: action.email,
         password: action.password,
         name: action.name,
         lastName: action.lastName,
         getInspired: action.getInspired,
       }
     }
     default:
       return state
   }
 }
const actions = {
  authUpEmail: (email: string, password: string,
      name?: string | null, lastName?: string | null,
      getInspired?: boolean) => (
        { type: interLiteralString(AUTH_UP_USERS_EMAIL),
          name, lastName, email, password, getInspired } as const),
}
export const sanAuthUpEmail =
    ( userData: InitialValuesTsUp) :ThunkType => async (distpath) => {
      let result = await authMail.authUpMail(userData)
      result
      ? distpath(actions.authUpEmail( 'test email', 'test password', null, null, true,))
      : alert('По приколу, но что то пошло не так! )')
    }


export default authUpEmail
export type InitialStateType = typeof initialState
export type ActionType = ActionTypes<typeof actions>
type ThunkType = BaseActionType<ActionType>

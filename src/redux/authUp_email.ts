
import authMail from '../API/authMail'
import { interLiteralString } from '../fanction_helps/literalFromString'
import { ActionTypes, BaseActionType } from './redux'
const AUTH_UP_USERS_EMAIL = 'NOVA-KRAINA/AUTH-UP-USERS-EMAIL'


type InitialValuesTsUp = {
  name?: string | null,
  lastName?: string | null,
  email?: string | null,
  password?: string | null,
  getInspired?: boolean
}

let initialState: InitialValuesTsUp = {
  name: null,
  lastName: null,
  email: null,
  password: null,
  getInspired: false,
}
const authUpEmail =
 (state = initialState, action: ActionType): InitialValuesTsUp => {
   switch (action.type) {
     case AUTH_UP_USERS_EMAIL: {
       debugger
       return {
         ...state,
         name: action.userData.name,
         lastName: action.userData.lastName,
         email: action.userData.email,
         password: action.userData.password,
         getInspired: action.userData.getInspired,
       }
     }
     default:
       return state
   }
 }
const actions = {
  authUpEmail: ( userData: InitialValuesTsUp) => (
        { type: interLiteralString(AUTH_UP_USERS_EMAIL),
          userData } as const),
}
export const sanAuthUpEmail =
    ( userData: InitialValuesTsUp) :ThunkType => async (distpath) => {
      let result = await authMail.authUpMail(userData)
      console.log(result)
    }


export default authUpEmail
export type InitialStateType = typeof initialState
export type ActionType = ActionTypes<typeof actions>
type ThunkType = BaseActionType<ActionType>

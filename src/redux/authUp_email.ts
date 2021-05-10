

import {authMail, db} from '../API/authMail'
import { interLiteralString } from '../fanction_helps/literalFromString'
import { ActionTypes, BaseActionType } from './redux'
const AUTH_UP_USERS_EMAIL = 'NOVA-KRAINA/AUTH-UP-USERS-EMAIL'


type InitialValuesTsUp = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  getInspired?: boolean
}

let initialState: InitialValuesTsUp = {
  firstName: '',
  lastName: '',
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
         firstName: action.name,
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
      name: string, lastName: string,
      getInspired?: boolean) => (
        { type: interLiteralString(AUTH_UP_USERS_EMAIL),
          name, lastName, email, password, getInspired } as const),
} 
export const sanAuthUpEmail =
    ( userData: InitialValuesTsUp) :ThunkType => async (distpath) => {
      let { email, password} = userData
      let result = await authMail.authUpMail( email, password )
      result
       ? writeUserData(result.user?.uid, userData.firstName, userData.lastName)
       : alert('По приколу, но что то пошло не так! )')
      result
      ? distpath(actions.authUpEmail( 'test email', 'test password', 'first name', 'second name', true,))
      : alert('По приколу, но что то пошло не так! )')
    }


export default authUpEmail

function writeUserData(userId: string | undefined, name: string, lastName: string) {
  db.ref('users/' + userId).set({
    username: name + ' ' + lastName,
    status: 'Заполните статус',
  });
}


export type InitialStateType = typeof initialState
export type ActionType = ActionTypes<typeof actions>
type ThunkType = BaseActionType<ActionType>

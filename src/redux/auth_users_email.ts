
import {authMail} from '../API/authMail'
import { interLiteralString } from '../fanction_helps/literalFromString'
import { ActionTypes, BaseActionType } from './redux'

// const AUTH_USERS_EMAIL_UP = 'NOVA-KRAINA/AUTH-USERS-EMAIL-UP'
const AUTH_USERS_EMAIL_IN = 'NOVA-KRAINA/AUTH-USERS-EMAIL-IN'
const ERROR_EMAIL_IN = 'NOVA-KRAINA/ERROR-EMAIL-IN'
const TAKE_ID_TOKEN = 'NOVA-KRAINA/TAKE_ID_TOKEN'
const IS_OPEN = 'NOVA-KRAINA/IS_OPEN'
const UID = 'NOVA-KRAINA/UID'
const FULL_NAME = 'NOVA-KRAINA/FULL_NAME'

type InitialValuesTsIn = {
  email: string,
  password: string,
  controlLabel?: boolean,
  error?: string | null,
  errorState?: boolean,
  dataUser: ResponseDataUser | null,
  isOpen: boolean
  uid: string
  fullName: string
}

let initialState:InitialValuesTsIn = {
  email: 'Nova Kraina @ mail.com',
  password: '',
  controlLabel: false,
  error: null,
  errorState: false,
  dataUser: null,
  isOpen: false,
  uid: '',
  fullName: '',
}
const userEmail =
 (state = initialState, action: ActionType): InitialValuesTsIn => {
   switch (action.type) {
     case AUTH_USERS_EMAIL_IN: {
       return {
         ...state,
         email: action.email,
       }
     }
     case ERROR_EMAIL_IN: {
       return {
         ...state,
         error: action.error,
       }
     }
     case TAKE_ID_TOKEN: {
       return {
         ...state,
         email: action.dataUser.email,
         dataUser: action.dataUser,
       }
     }
     case IS_OPEN: {
       return {
         ...state,
         isOpen: action.isOpen,
       }
     }
     case UID: {
       return {
         ...state,
         uid: action.uid,
       }
     }
     case FULL_NAME: {
       return {
         ...state,
         fullName: action.fullName,
       }
     }
     default:
       return state
   }
 }
const actions = {
  authMailIn: (
      email: string,
      password: string,
      controlLabel?: boolean,) => (
        { type: interLiteralString(AUTH_USERS_EMAIL_IN),
          email, password, controlLabel} as const),
  takeIdToken: (
      dataUser: ResponseDataUser) => (
        { type: interLiteralString(TAKE_ID_TOKEN), dataUser } as const),
  error: (
      error?:string | null, errorState?: boolean ) => (
     { type: interLiteralString(ERROR_EMAIL_IN), error, errorState } as const),
  isOpen: (
      isOpen: boolean ) => (
     { type: interLiteralString(IS_OPEN), isOpen } as const),
  uid: (
      uid: string ) => (
      {type: interLiteralString(UID), uid } as const),
  fullName: (
      fullName: string ) => (
      {type: interLiteralString(FULL_NAME), fullName} as const),
}
// end actions

export const sanAuthMailIn = (
    email: string, password: string, controlLabel?: boolean)
    :ThunkType => async (distpath) => {
  let user = await authMail.addUserAuthMail(email, password,)

  if (user.code == 'auth/user-not-found' || user.code == 'auth/wrong-password') {
    distpath(actions.error('Логин или пароль не верен повторите ввод данных', true))
  } else if (user.code == `auth/too-many-requests`) {
    distpath(actions.error(`Доступ до цього облікового запису тимчасово вимкнено через багато невдалих спроб входу.
     Ви можете негайно відновити його, скинувши пароль, або спробувати пізніше.`, true))
  } else if ( user == 'USER_DISABLED') {
    distpath(actions.error('Акаунт удален', true))
  } else if ( user == 'There is no user record corresponding to this identifier. The user may have been deleted.') {
    distpath(actions.error('Тут немає жодного запису користувача, що відповідає цьому ідентифікатору. Можливо, користувача видалено. Спробуйте ще', true))
  } else if ( user.email ) {
    distpath(actions.isOpen(true))
  }
}

export const sanIsOpen = (isOpen: boolean, uid: string)
    :ThunkType => async (distpath) => {
  distpath(actions.isOpen(isOpen))
  distpath(actions.uid(uid))
}

export const sanFullName = (fullName: string)
    :ThunkType => async (distpath) => {
  distpath(actions.fullName(fullName))
}
export const sanLogout = ()
    :ThunkType => async (distpath) => {
  authMail.logout()
  distpath(actions.isOpen(false))
}


export default userEmail
export type InitialStateType = typeof initialState
export type ActionType = ActionTypes<typeof actions>
// Передаем в наш тип дополнительный тип: stopSubmit
type ThunkType = BaseActionType<ActionType>
type ResponseDataUser = {
  displayName: string
  email: string
  expiresIn: string
  idToken: string
  kind: string
  localId: string
  refreshToken: string
  registered: boolean
}

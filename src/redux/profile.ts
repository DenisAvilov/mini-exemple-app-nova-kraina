

import { interLiteralString } from '../fanction_helps/literalFromString'
import { ActionTypes, BaseActionType } from './redux'
import { TSdefaultProfile } from './typesTs'
const AUTH_UP_USERS_EMAIL = 'NOVA-KRAINA/AUTH-UP-USERS-EMAIL'

let initialState: TSdefaultProfile = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  status: '',
  isOpen: false,
  getInspired: false,
  teflon: {
    vodafon: null,
    kievstar: null,
    life: null,
  },
  photo: {
    avatar: null,
    avatarBgLarge: null,
    avatarBgMini: null,
  },
  contact: {
    facebook: null,
    viber: null,
    telegram: null,
    tiktok: null,
    tviter: null,
  },
  placeOfResidence: {
    country: null,
    city: null,
    village: null,
  },
}

export const profile =
 (state = initialState, action: ActionType): TSdefaultProfile => {
   switch (action.type) {
     case AUTH_UP_USERS_EMAIL: {
       return {
         ...state,
       }
     }
     default:
       return state
   }
 }
const actions = {
  authUpEmail: () => (
        { type: interLiteralString(AUTH_UP_USERS_EMAIL)} as const),
}
export const sledProfile =
    ( userData: TSdefaultProfile) :ThunkType => async (distpath) => {
    }

export type ActionType = ActionTypes<typeof actions>
type ThunkType = BaseActionType<ActionType>

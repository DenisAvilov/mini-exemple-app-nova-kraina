import { auth } from '../API/authMail';
import { interLiteralString } from '../fanction_helps/literalFromString';
import { sanIsOpen } from './general'
import { ActionTypes } from './redux';

const INITIALIZATION_SUCCESS = 'NOVA-KRAINA/INITIALIZATION-SUCCESS'
let initialSuccess = {
  success: false,
}


export const initialization = (
    state = initialSuccess, action: ActionType ): SuccessType => {
  switch (action.type) {
    case INITIALIZATION_SUCCESS: {
      return {
        ...state,
        success: true,
      }
    }
    default:
      return state;
  }
}

const action = {
  initializationSuccess: () => (
    {type: interLiteralString(INITIALIZATION_SUCCESS)} as const),
}

export const initSuccess = () => (distpath: any) => {
  auth.onAuthStateChanged( (user) => {
    const uid = user?.uid
    if (uid) {
      initHelp(uid, true, distpath)
    } else {
      initHelp('', false, distpath)
    }
  })
}

const initHelp = (uid: string, flag: boolean, distpath: any) => {
  distpath(sanIsOpen(uid, flag))
  distpath(action.initializationSuccess())
}

type SuccessType = typeof initialSuccess
type ActionType = ActionTypes<typeof action>


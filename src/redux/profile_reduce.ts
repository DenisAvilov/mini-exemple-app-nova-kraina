import { profileApi } from '../API/profileApi'
import { interLiteralString } from '../fanction_helps/literalFromString'
import { ActionTypes, BaseActionType } from './redux'

const SET_USER = 'NOVA-KRAINA/PROFILE-REDUCE/SET-USER'
const STATUS = 'NOVA-KRAINA/PROFILE-REDUCE/STATUS'

let initialState = {
  profile: {} as UserProfileTs,
  status: 'Статус Тест',
}
const profile = (state = initialState, action: ActionType ): InitialState => {
  switch (action.type) {
    case STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    default:
      return state
  }
}
export default profile;
const actions = {
  status: (status: string) => (
    {type: interLiteralString(STATUS), status }as const),
}

export const setStatus = (uid: string): ThunkType => async (distpath) => {
  let status = await profileApi.status(uid)
  status.on('value', (snapshot: any) => {
    const data = snapshot.val()
    distpath(actions.status(data))
  })
}

type InitialState = typeof initialState
type ActionType = ActionTypes<typeof actions>
type ThunkType = BaseActionType<ActionType>


type UserProfileTs = {
    fullName: string
}

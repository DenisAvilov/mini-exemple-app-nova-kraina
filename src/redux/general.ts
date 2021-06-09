import {authMail, db} from '../API/authMail'
import { interLiteralString } from '../fanction_helps/literalFromString'
import { ActionTypes, BaseActionType } from './redux'
import firebase from 'firebase'
import { TSdefaultProfile } from './typesTs'
import { profileRialData } from '../API/profileAPI'
import foto from './../img/logo.svg'

const REGISTER_NEW_PROFILE = 'NOVA-KRAINA/PROFILE-REDUCE/REGISTER-NEW-PROFILE'
const ERROR_EMAIL_IN = 'NOVA-KRAINA/ERROR-EMAIL-IN'
const IS_OPEN = 'NOVA-KRAINA/IS_OPEN'
const PROFILE_AVATAR = 'NOVA-KRAINA/PROFILE-AVATAR'
const storageRef = firebase.storage().ref();

let initialState = {
  profile: {} as TSdefaultProfile,
  error: '',
  uid: '',
}

export const general =
 (state = initialState, action: ActionType): InitialValuesTsIn => {
   switch (action.type) {
     case ERROR_EMAIL_IN: {
       return {
         ...state,
         error: action.error,
       }
     }
     case IS_OPEN: {
       return {
         ...state,
         uid: action.uid,
         profile: {
           ...state.profile,
           isOpen: action.isOpen,
           photo: {
             ...state.profile.photo,
             avatar: null,
           },
         },
       }
     }
     case REGISTER_NEW_PROFILE: {
       return {
         ...state,
         profile: {
           ...state.profile,
           firstName: action.profile.firstName,
           lastName: action.profile.lastName,
           status: action.profile.status,
           teflon: action.profile.teflon,
           getInspired: action.profile.getInspired,
         },
       }
     }
     case PROFILE_AVATAR: {
       return {
         ...state,
         profile: {
           ...state.profile,
           photo: {
             ...state.profile.photo,
             avatar: action.avatar,
           },
         },
       }
     }
     default:
       return state
   }
 }

const actions = {
  // Used in the same file
  error: (
      error:string) => (
      { type: interLiteralString(ERROR_EMAIL_IN), error} as const),
  isOpen: (
      isOpen: boolean, uid: string ) => (
      { type: interLiteralString(IS_OPEN), isOpen, uid } as const),

  profile: (profile: TSdefaultProfile ) => (
    {type: interLiteralString(REGISTER_NEW_PROFILE), profile}as const),

  avatar: (avatar: any) => (
    {type: interLiteralString(PROFILE_AVATAR), avatar} as const),

}

export const profileStoreSun = (
    fileUse?: null | string | File | undefined ):ThunkType => async (distpath) => { 
}
export const avatarChangeSun = (
    file: File, uid: string):ThunkType => async (distpath) => {
  // Craete ref in FireBase store
  let refInNewGreateAvatarImg = storageRef.child(`profile/avatar/${file.name}`)
  refInNewGreateAvatarImg
      .put(file)
      .then(() => {
        let refPullNewAvatar = storageRef
        refPullNewAvatar.child('profile/avatar')
            .list()
            .then((url) => {
              url
                  .items
                  .forEach((itemRef) => {
                    if (itemRef.name === file.name) {
                      itemRef
                          .getDownloadURL()
                          .then((res) => {
                            distpath(actions.avatar(res))
                            db.ref('users/' + uid + '/photo')
                                .set({
                                  avatar: file.name,
                                })
                          })
                    }
                  })
            })
      })
}

export const sanAuthMailIn = (
    email: string, password: string, controlLabel?: boolean)
    :ThunkType => async (distpath) => {
  let user = await authMail.addUserAuthMail(email, password,)

  if (user.code === 'auth/user-not-found' ||
    user.code === 'auth/wrong-password') {
    distpath(actions.error(
        'Логин или пароль не верен повторите ввод данных'))
  } else if (user.code === `auth/too-many-requests`) {
    distpath(actions.error(
        `Доступ до цього облікового запису тимчасово
        вимкнено через багато невдалих спроб входу.
        Ви можете негайно відновити його,
        скинувши пароль, або спробувати пізніше.`))
  } else if ( user === 'USER_DISABLED') {
    distpath(actions.error('Акаунт удален'))
  } else if (
    user === `There is no user record corresponding to this identifier.
    The user may have been deleted.`) {
    distpath(actions.error(
        `Тут немає жодного запису користувача,
        що відповідає цьому ідентифікатору. Можливо,
        користувача видалено. Спробуйте ще`))
  } else if ( user.email ) {
    distpath(actions.isOpen(true, user.uid))
  }
}

export const sanIsOpen = (uid: string, isOpen: boolean)
    :ThunkType => async (distpath) => {
  if (isOpen) {
    distpath(actions.isOpen(true, uid))
    // Send request
    const profileData = await profileRialData(uid)
    // Save store profile from Firebase Realtime Database
    if (typeof profileData.photo !== 'undefined') {
      let refPullNewAvatar = storageRef
      refPullNewAvatar.child('profile/avatar')
          .list()
          .then((url) => {
            url
                .items
                .forEach((itemRef) => {
                  if (itemRef.name === profileData.photo.avatar) {
                    itemRef
                        .getDownloadURL()
                        .then((res) => {
                          distpath(actions.avatar(res))
                        })
                  }
                })
          })
    } else {
      distpath(actions.avatar(foto))
    }
    distpath(actions.profile(profileData))
  } else {
    distpath(actions.isOpen(false, ''))
  }
}

export const sanLogout = ()
    :ThunkType => async (distpath) => {
  authMail.logout()
  distpath(actions.isOpen(false, ''))
}

export const registrNewProfile =
    ( userData: TSdefaultProfile) :ThunkType => async (distpath) => {
      let { email, password,
        firstName, lastName, getInspired} = userData

      let result = await authMail.authUpMail( email, password )
      result
      ? (writeUserData(result.user?.uid, firstName, lastName, getInspired))
      : alert('Щось пішло не так! Перезавантажте сайт.')
    }
// Иницыализируем запрос на сервер
function writeUserData(
    userId: string | undefined,
    firstName: string, lastName: string,
    getInspired: boolean) {
  db.ref('users/' + userId)
      .set({
        firstName: firstName,
        lastName: lastName,
        status: 'Заповніть статус',
        getInspired: getInspired,
        teflon: {
          vodafon: '0506195452',
          kievstar: null,
          life: null,
        },
        photo: {
          avatar: null,
          avatarBgLarge: null,
          avatarBgMini: null,
        },
        contact: {
          facebook: 'facebook',
          viber: null,
          telegram: null,
          tiktok: null,
          tviter: null,
        },
        placeOfResidence: {
          country: 'З якої ви країни?',
          city: null,
          village: null,
        },
      })
      .then((res) => console.log('Відповідь з РіалДата, після реєстрації нового користувача первинного завантаження res', res));
}


export type InitialStateType = typeof initialState
export type ActionType = ActionTypes<typeof actions>
type ThunkType = BaseActionType<ActionType>
type InitialValuesTsIn = typeof initialState

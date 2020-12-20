import axios from 'axios'
const API_KEY = 'AIzaSyBaErRBkUh5q1lbTgTP9fvPBlI3ZrQlnAE'
const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
const urlSingIn = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const instans = axios.create({
  // withCredentials: true,
  baseURL: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
})


type AuthUpEmailTS = {
  firstName?: string | null,
  lastName?: string| null,
  email?: string| null,
  password?: string| null,
  getInspired?: boolean
}
export enum ErrorEnumSingIn {
  emailNotFound = 'EMAIL_NOT_FOUND',
  invalidPassword = 'INVALID_PASSWORD',
  userDisabled = 'INVALID_PASSWORD',
 }

export type SignInError = {
   response: {
     data: {
       error: {
         message: string
       }
     }
   }
}

export type DataSingIn = {
  localId: string,
  email: string,
  displayName: string,
  idToken: string,
  registered: boolean,
  refreshToken: string,
  expiresIn: string,
  kind: string,
}
export type MainResponseSingIn = {
  config: any,
  resultCode: SignInError,
  data: DataSingIn,
  headers: any,
  request: any,
  status: number,
  statusText: string,
}
const authMail = {
  addUserAuthMail: (email?: string| null, password?: string| null, controlLabel?: boolean) => {
    let user = {
      email, password, returnSecureToken: true,
    }
    return axios.post<MainResponseSingIn>(urlSingIn, user, config).then(
        (value)=> {
          return value
        }
    ).catch((value) => value.response.data.error.message)
  },
  authUpMail: (dataUser: AuthUpEmailTS) => {
    let { email, password } = dataUser

    return axios.post(url, {email, password, returnSecureToken: true}, config).then(
        (value) => {
          console.log('value auth UP ', value)
          console.log('data User ', dataUser)
        }
    )
  },
}
export default authMail


/* .catch( (error) => {
  return error.response.data.error.message
  /*  return error.response.data.error.message  */
/* }
)*/

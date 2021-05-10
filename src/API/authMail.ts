
import axios from 'axios'
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyBaErRBkUh5q1lbTgTP9fvPBlI3ZrQlnAE',
  authDomain: 'nova-kraina-social-net.firebaseapp.com',
  databaseURL: 'https://nova-kraina-social-net-default-rtdb.firebaseio.com',
  projectId: 'nova-kraina-social-net',
  storageBucket: 'nova-kraina-social-net.appspot.com',
  messagingSenderId: '602098551380',
  appId: '1:602098551380:web:29ee8626fb6ff3f3cf7bc1',
  measurementId: 'G-TVE63Q61KX',
}
firebase.initializeApp(firebaseConfig)

export const db = firebase.database()
export const auth = firebase.auth()

// firebase.auth().currentUser.uid
const API_KEY = 'AIzaSyBaErRBkUh5q1lbTgTP9fvPBlI3ZrQlnAE'
const urlCustomToken = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${API_KEY}`


const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const authMail = {

  addUserAuthMail: (email: string, password: string) => {
    // sign In
    return auth.signInWithEmailAndPassword(email, password)
        .then(
            (response) => {
              return response.user
            } )
        .catch((value) => {
          return value
        })
  },
  authUpMail: (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword( email, password )
        .then((value) => {
          return value
        } )
        .catch((error) => {
          let errorCode = error.code
          let errorMessage = error.message
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.')
          } else {
            alert( errorMessage)
          }
          console.log('errorMessage signUp', error)
        })
  },
  signInWithCustomToken: (token: string) => {
    return axios.post<CustomToken>(urlCustomToken, {token, returnSecureToken: true}, config)
        .then(
            (value) => {
              console.log('Response urlCustomToken ', value)
            }
        )
  },
  // logout
  logout: () => {
    auth.signOut().then( (el) => console.log('loqnOut ', el))
  },
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
type CustomToken = {
  idToken: string
  refreshToken: string
  expiresIn: string
}


/* .catch( (error) => {
  return error.response.data.error.message
  /*  return error.response.data.error.message  */
/* }
)*/


//  return axios.post(url, {email, password, returnSecureToken: true}, config).then(
//   (value) => {
//     console.log('value auth UP ', value)
//     console.log('data User ', dataUser)
//   }
// )

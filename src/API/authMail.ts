import axios from 'axios'
const API_KEY = 'AIzaSyBaErRBkUh5q1lbTgTP9fvPBlI3ZrQlnAE'
const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const instans = axios.create({
  // withCredentials: true,
  baseURL: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[${API_KEY}]`,
})


const authMail = {
  addUserAuthMail: (email?: string| null, password?: string| null, controlLabel?: boolean) => {
    let user = {
      email, password, returnSecureToken: true,
    }
    return axios.post(url, user, config).then(
        (value)=> {
          console.log('reqwest fiaerbase ', value)
        }
    ).catch( (error) => {
      console.log('error ', error)
    })
  },
}
export default authMail



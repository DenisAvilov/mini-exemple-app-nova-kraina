import { auth, db } from './authMail';

export const profileApi = {
  status: ( uid: string) => {
    let statusRef = db.ref('/users/' + uid + '/status' );
    return statusRef
  },
}



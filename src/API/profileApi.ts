import {db} from './authMail'
export const profileRialData = async (uid: string) => {
  const snapshot = await db
      .ref()
      .child('users')
      .child(uid)
      .get()
  if (snapshot.exists()) {
    return snapshot.val()
  }
  return snapshot
}


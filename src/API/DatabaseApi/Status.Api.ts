import firebase from 'firebase'

export const databaseApi = () => {
  let userId = firebase.auth().currentUser?.uid
  const status = () => {
    return firebase.database()
        .ref('/users/' + userId)
        .once('value')
        .then((snapshot) => {
          if (snapshot.val().status != null) {
            return snapshot.val()
          }
        }).catch((error) => console.warn('Статус не отоброзился потому что:', error) )
  }
  return {
    status,
  }
}



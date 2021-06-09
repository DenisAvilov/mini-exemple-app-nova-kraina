import firebase from 'firebase'


export const storage = () => {
  let storage = firebase.storage()
 const avatar = async (
    parents: string,
    fileName: null | string) => {
    const test = await storage
        .ref()
        .child(parents)
        .list()
        .then((url) => {
          url
              .items
              .forEach((itemRef) => {
                if (itemRef.name === fileName) {
                  itemRef
                      .getDownloadURL()
                      .then((res) => res)
                }
              })
        })
    return test
  }
  return {
    avatar,
  }
}

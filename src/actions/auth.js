import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types'

export const loginManager = (email, password) => {

    return (dispatch) => {

        setTimeout(() => {
            
            dispatch( login(123, 'Juan') )
        }, 3500);
    }
}

export const googleLoginManager = () => {
    
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( ({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}

export const login = (uid, displayName) => {

    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}
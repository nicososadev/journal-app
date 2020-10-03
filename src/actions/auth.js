import Swal from 'sweetalert2'
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types'
import { notesLogout } from './notes';
import { finishLoading, startLoading } from './ui';

export const loginManager = (email, password) => {

    return (dispatch) => {

        dispatch( startLoading() )

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({ user }) => {
                
                dispatch(
                    login(user.uid, user.displayName)
                )
                
                dispatch( finishLoading() )
                
            })            
            .catch(error => {
                dispatch( finishLoading() )
                Swal.fire('Authentication Error', error.message, 'error')
        })
    }
}

export const registerManager = ( email, password, name) => {

    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async({ user }) => {
                await user.updateProfile({
                    displayName: name
                })

                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(error => {
                Swal.fire('User already exists', error.message, 'error')
            })
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

export const logoutManager = () => {

    return async(dispatch) => {

        await firebase.auth().signOut()

        dispatch( logout() )

        dispatch( notesLogout() )
    }
}

export const logout = () => {

    return {
        type: types.logout
    }
}
import Swal from "sweetalert2"
import { db } from "../firebase/firebase-config"
import { fileUpload } from "../helpers/fileUpload"
import { loadNotes } from "../helpers/loadNotes"
import { types } from "../types/types"

export const createNote = () => {

    return async(dispatch, getState) => {

        const state = getState()

        const { uid } = state.auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const document = await db.collection(`${uid}/journal/notes`).add(newNote)

        dispatch( activeNote(document.id, newNote) )

        dispatch( createNewNote(document.id, newNote) )

    }
}

export const activeNote = (id, note) => {

    return {
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    }
}

export const createNewNote = (id, note) => {

    return {
        type: types.notesCreateNote,
        payload: {
            id,
            ...note
        }
    }
}

export const LoadNotesManager = (uid) => {

    return async (dispatch) => {
        
        const notes = await loadNotes( uid )

        dispatch( setNotes(notes) )
    }
}

export const setNotes = (notes) => {

    return {
        type: types.notesLoad,
        payload: notes
    }
}

export const saveNoteManager = ( note ) => {

    return async (dispatch, getState) => {
        
        const state = getState()

        const { uid } = state.auth

        if( !note.url ){
            delete note.url
        }

        const noteToFireStore = { ...note }

        delete noteToFireStore.id

        await db.doc(`${uid}/journal/notes/${note.id}`).update( noteToFireStore )

        dispatch( noteRefresh( note.id, noteToFireStore ) )

        Swal.fire('Saved', note.title, 'success')
    }
}

export const noteRefresh = ( id, note ) => {

    return {
        type: types.notesUpdateNote,
        payload: {
            id, 
            note: {
                id,
                ...note
            }
        }
    }
}

export const uploadManager = ( file ) => {

    return async (dispatch, getState) => {

        const { active:activeNote } = getState().notes

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            willOpen: () => {
                Swal.showLoading()
            }
        })
        

        const fileUrl = await fileUpload( file )

        activeNote.url = fileUrl

        dispatch( saveNoteManager( activeNote ) )

        Swal.close()
    }
}

export const deleteManager = ( id ) => {

    return async (dispatch, getState) => {

        const state = getState()

        const { uid } = state.auth

        await db.doc(`${uid}/journal/notes/${id}`).delete()

        dispatch( deleteNote( id ) )
    }
}

export const deleteNote = ( id ) => {
    return {
        type: types.notesDeleteNote,
        payload: id
    }
}

export const notesLogout = () => {
    return{
        type: types.notesLogoutCleaning
    }
}
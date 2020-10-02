import { db } from "../firebase/firebase-config"
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
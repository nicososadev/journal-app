import { types } from "../types/types"

const initialState = {

    notes: [],
    active: null
}

export const notesReducer = ( state = initialState, action) => {
    
    switch (action.type) {
        
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.notesCreateNote:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }

        case types.notesLoad:
            return {
                ...state,
                notes: [ ...action.payload ]
            }

        case types.notesUpdateNote:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                        ? action.payload.note
                        : note
                )
            }

        case types.notesDeleteNote:
            return {
                ...state,
                active: null,
                notes: state.notes.filter( note => note.id !== action.payload)
            }

        case types.notesLogoutCleaning:
            return {
                ...state,
                active: null,
                notes: []
            }
    
        default:
            return state
    }
}

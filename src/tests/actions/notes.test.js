import '@testing-library/jest-dom'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { createNote } from '../../actions/notes'
import { types } from '../../types/types'
import { db } from '../../firebase/firebase-config'
 
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({
    auth: {
        uid: 123456,
    }
})

describe('Pruebas en las acciones de notes', () => {
    
    test('Debe crear una nueva nota', async() => {
        
        await store.dispatch( createNote() )

        const actions = store.getActions()
        
        const testNote = {
            id: expect.any(String),
            title: '',
            body: '',
            date: expect.any(Number)
        }

        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: testNote
        })

        expect( actions[1] ).toEqual({
            type: types.notesCreateNote,
            payload: testNote
        })

        const documentId = actions[0].payload.id

        const state = store.getState()

        const { uid } = state.auth

        await db.doc(`${uid}/journal/notes/${documentId}`).delete()
    })
    
})

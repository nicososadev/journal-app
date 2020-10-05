import '@testing-library/jest-dom'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { createNote, LoadNotesManager, saveNoteManager, uploadManager } from '../../actions/notes'
import { types } from '../../types/types'
import { db } from '../../firebase/firebase-config'
import fileUpload from '../../helpers/fileUpload'

jest.mock('../../helpers/fileUpload', () => ({
    fileUpload: jest.fn( () => {
        return 'https://url.com/img.jpg'
    })
}))
 
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = {
    auth: {
       uid: 123456,
    },
    notes : {
        active: {
            id: 'AMhD7xMUmSPrjjX0izMT',

        }
    }
}

let store = mockStore(initialState)

describe('Pruebas en las acciones de notes', () => {
    
    beforeEach( () => {

        store = mockStore(initialState)
    })

    const state = store.getState()

    const { uid } = state.auth

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

        await db.doc(`${uid}/journal/notes/${documentId}`).delete()
    })
    
    test('LoadNotesManager debe cargar las notas correctamente', async() => {

        await store.dispatch( LoadNotesManager( uid ) )

        const actions = store.getActions()

        expect( actions[0] ).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        })
    })

    test('saveNoteManager debe actualizar las notas', async() => {

        const note = {
            id: 'SJsdNUUnzuS8T4JxCnre',
            title: 'Nota actualizada',
            body: 'Nota destinada para pruebas de actualizacin'
        }

        await store.dispatch( saveNoteManager( note ) )

        const actions = store.getActions()

        expect( actions[0].type ).toBe( types.notesUpdateNote )

        const document = await db.doc(`${uid}/journal/notes/${note.id}`).get()

        expect( document.data().title ).toBe( note.title )

        // Renicio la nota
        const cleanNote = {
            id: 'SJsdNUUnzuS8T4JxCnre',
            title: '',
            body: ''
        }

    
        await store.dispatch( saveNoteManager( cleanNote ) )
    })
    
    test('uploadManager debe actualizar el URL de la nota', async() => {
        
        const file = new File([],'img.jpg')

        await store.dispatch( uploadManager( file ) )

        const document = await db.doc('123456/journal/notes/AMhD7xMUmSPrjjX0izMT').get()

        expect( document.data().url ).toBe( 'https://url.com/img.jpg' )

    })
    
    
})

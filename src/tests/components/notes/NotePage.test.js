import '@testing-library/jest-dom'
import React from 'react'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { NotePage } from '../../../components/notes/NotePage'
import { activeNote } from '../../../actions/notes'

jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn()
}))

// jest.mock('../../../actions/notes', () => ({
//    createNote: jest.fn()
// }))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = {
    auth: {
        uid: '12345',
        displayName: 'Nicolas'
    },
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        notes: [],
        active: {
            id: 1234,
            title: 'Prueba',
            body: 'Nota de Prueba'
        }
    }
}

let store = mockStore(initialState)

store.dispatch = jest.fn()

describe('Pruebas en el componente NotePage', () => {
    
    const wrapper = mount(
        <Provider store={store}>
            <NotePage/>
        </Provider>
    )

    test('Debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })
    
    test('Debe lanzar la accion activeNote', () => {
        
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'Modificando titulo'
            }
        })

        expect( activeNote ).toHaveBeenLastCalledWith(
            1234,
            {
                body: 'Nota de Prueba',
                title: 'Modificando titulo',
                id: 1234,
            }
        )
    }) 
})

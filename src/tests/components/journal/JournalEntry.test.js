import '@testing-library/jest-dom'
import React from 'react'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { JournalEntry } from '../../../components/journal/JournalEntry'
import { activeNote } from '../../../actions/notes'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = {}

let store = mockStore(initialState)

store.dispatch = jest.fn()

describe('Pruebas en el componente JournalEntry', () => {
    
    const note = {
        id: 1234,
        body: 'Nota de Prueba',
        title: 'Prueba',
        date:0,
        url: 'https://url.com/img.jpg'
    }

    const wrapper = mount(
        <Provider store={store}>
            <JournalEntry {...note} />
        </Provider>
    )

    test('Debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe llamar a la accion activeNote', () => {
        
        wrapper.find('.journal__entry').simulate('click')

        expect( store.dispatch ).toHaveBeenCalledWith(
            activeNote( note.id, {...note})
        )
    })
})

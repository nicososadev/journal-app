import '@testing-library/jest-dom'
import React from 'react'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { SideBar } from '../../../components/journal/SideBar'
import { Provider } from 'react-redux'
import { logoutManager } from '../../../actions/auth'
import { createNote } from '../../../actions/notes'

jest.mock('../../../actions/auth', () => ({
    logoutManager: jest.fn()
}))

jest.mock('../../../actions/notes', () => ({
   createNote: jest.fn()
}))

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
        active: null
    }
}

let store = mockStore(initialState)

store.dispatch = jest.fn()

describe('Pruebas en el componente SideBar', () => {
    
    const wrapper = mount(
        <Provider store={store}>
            <SideBar/>
        </Provider>
    )

    test('Debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe llamar a la accion logoutManager', () => {
        
        wrapper.find('button').simulate('click')

        expect( logoutManager ).toHaveBeenCalled()
    })

    test('Debe llamar a al accion createNote', () => {
        
        wrapper.find('.journal__new-entry').simulate('click')

        expect( createNote ).toHaveBeenCalled()
    })
    
    
})

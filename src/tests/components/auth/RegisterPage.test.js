import '@testing-library/jest-dom'
import React from 'react'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { RegisterPage } from '../../../components/auth/RegisterPage'
import { MemoryRouter } from 'react-router-dom'
import { types } from '../../../types/types'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = {
    auth: {},
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

describe('Pruebas en el componente RegisterPage', () => {
    
    const wrapper = mount(
        <MemoryRouter>
            <Provider store={store}>
                <RegisterPage/>
            </Provider>
        </MemoryRouter>
    )

    test('Debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe hacer el dispach de la accion respectiva', () => {

        const emailField = wrapper.find('input[name="email"]')

        emailField.simulate('change', {
            target: {
                value: '',
                name: 'email'
            }
        })

        wrapper.find('form').simulate('submit')

        const actions = store.getActions()

        expect( actions[0] ).toEqual({
            type: types.uiSetError,
            payload: 'Email is not correct'
        })
        
    })

    test('Debe mostrar correctamente la caja de alerta con el mensaje de error', () => {
        
        const initialState = {
            auth: {},
            ui: {
                loading: false,
                msgError: 'Email is not correct'
            },
            notes: {
                notes: [],
                active: null
            }
            
        }
        
        let store = mockStore(initialState)
            
        const wrapper = mount(
            <MemoryRouter>
                <Provider store={store}>
                    <RegisterPage/>
                </Provider>
            </MemoryRouter>
        )

        const alertBox = wrapper.find('.auth__alert-error')

        expect( alertBox.exists() ).toBe( true )
        expect( alertBox.text().trim() ).toBe( initialState.ui.msgError )

    })
    
    
    
})

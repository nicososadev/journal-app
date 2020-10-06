import '@testing-library/jest-dom'
import React from 'react'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { firebase } from '../../firebase/firebase-config'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { login } from '../../actions/auth'
import { AppRouter } from '../../routers/AppRouter'
import { act } from 'react-dom/test-utils'

jest.mock('../../actions/auth', () => ({
    login: jest.fn(),
}))

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
        active: {
            id: 'abc',
        }
    }
}

let store = mockStore(initialState)
store.dispatch = jest.fn()

describe('Pruebas en el componente AppRouter', () => {
    
    test('Debe llamar al login si el usuario esta autenticado ', async() => {
        
        let user

        await act( async() => {

            const userCredentials = await firebase.auth().signInWithEmailAndPassword('test@test.com','123456')

            user = userCredentials.user

            const wrapper = mount(
    
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter/>
                    </MemoryRouter>
                </Provider>
            )

        })

        expect( login ).toHaveBeenCalledWith('4djt4RLqcieTa2Yje9iWcftocRt2', null)

    })
    
})

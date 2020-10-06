import '@testing-library/jest-dom'
import React from 'react'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { LoginPage } from '../../../components/auth/LoginPage'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { googleLoginManager, loginManager } from '../../../actions/auth'

jest.mock('../../../actions/auth', () => ({
    googleLoginManager: jest.fn(),
    loginManager: jest.fn()

}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
}

let store = mockStore(initialState)

store.dispatch = jest.fn()

const wrapper = mount(

    <Provider store={store}>
        <MemoryRouter>
            <LoginPage/>
        </MemoryRouter>
    </Provider>
)

describe('Pruebas en el componente LoginPage', () => {
    
    beforeEach( () => {
        store = mockStore({})
        jest.clearAllMocks()
    })

    test('El componente debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe disparar la accion googleLoginManager', () => {
        
        wrapper.find('.google-btn').simulate('click')

        expect( googleLoginManager ).toHaveBeenCalled()

    })
    
    test('Debe disparar la accion handleLogin', () => {

        const email = 'nicososa@gmail.com'
        const password = '123456'

        wrapper.find('form').simulate('submit')

        expect( loginManager ).toHaveBeenCalledWith( email, password )
        
    })
    
    
})

import '@testing-library/jest-dom'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { login, loginManager, logout, logoutManager } from '../../actions/auth'
import { types } from '../../types/types'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

let store = mockStore({})

describe('Pruebas en las acciones de auth', () => {
    
    beforeEach( () => {
        store = mockStore({})
    })

    test('Accion login debe funcionar correctamente', () => {
        
        const userData = {
            uid: 12345,
            displayName: 'Nicolas'
        }

        const loginAction = login( userData.uid, userData.displayName )

        expect( loginAction ).toEqual({
            type: types.login,
            payload: {
                uid: 12345,
                displayName: 'Nicolas'
            }
        })
    })

    test('Accion logout debe funcionar correctamente', () => {
        
        const logoutAction = logout()

        expect( logoutAction ).toEqual({
            type: types.logout
        })
    })

    test('Debe realizar el logoutManager', async() => {

        await store.dispatch( logoutManager() )

        const actions = store.getActions()

        expect( actions[0] ).toEqual( { type: types.logout } )
        expect( actions[1] ).toEqual( { type: types.notesLogoutCleaning } )

    })
    
    test('Debe realizar el loginManager', async() => {
        
        const email = 'test@test.com'
        const password = '123456'

        await store.dispatch( loginManager(email, password) )

        const actions = store.getActions()

        expect( actions[1] ).toEqual({
            type: types.login,
            payload: {
                uid: '4djt4RLqcieTa2Yje9iWcftocRt2',
                displayName: null
            }
        })
    })
    
    
})

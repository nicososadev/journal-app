import '@testing-library/jest-dom'
import { authReducer } from '../../reducers/authReducer'
import { types } from '../../types/types'

describe('Pruebas en authReducer', () => {
    
    test('Debe retornar el state por defecto', () => {
        
        const state = authReducer( {}, {} )

        expect( state ).toEqual( {} )
    })

    test('Debe logear al usuario', () => {
        
        const userData = {
            uid: 12345,
            displayName: 'Nicolas'
        }

        const action = {
            type: types.login,
            payload: userData
        }

        const state = authReducer( {}, action )

        expect( state ).toEqual({ uid: 12345, name: 'Nicolas' })
    })

    test('Debe deslogear al usuario', () => {
        
        const action = {
            type: types.logout
        }

        const state = authReducer( { uid: 12345, name: 'Nicolas' }, action )

        expect( state ).toEqual( {} )

    })
    
    
    
})

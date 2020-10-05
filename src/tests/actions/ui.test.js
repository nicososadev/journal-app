import '@testing-library/jest-dom'
import { finishLoading, removeError, setError, startLoading } from '../../actions/ui'
import { types } from '../../types/types'


describe('Pruebas en las acciones de ui', () => {
    
    test('Las funciones deben funcionar correctamente', () => {
        
        const errorMsg = 'Error'

        const setErrorAction = setError(errorMsg)

        expect( setErrorAction ).toEqual( { type: types.uiSetError, payload: errorMsg } )

        const removeErrorAction = removeError()

        expect( removeErrorAction ).toEqual( { type: types.uiRemoveError } )

        const startLoadingAction = startLoading()

        expect( startLoadingAction ).toEqual( { type: types.uiStartLoading } )

        const finishLoadingAction = finishLoading()

        expect( finishLoadingAction ).toEqual( { type: types.uiFinishLoading } )
    })
    
})

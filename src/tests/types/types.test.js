import { types } from '../../types/types'
import '@testing-library/jest-dom'

describe('Pruebas en el fixture types', () => {
    
    test('Debe estar correctamente definido', () => {
        
        const defaultTypes = {

            login: '[Auth] Login',
            logout: '[Auth] Logout',
        
            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
        
            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',
        
            notesCreateNote: '[Notes] Create Note',
            notesUpdateNote: '[Notes] Update Note',
            notesDeleteNote: '[Notes] Delete Note',
            notesActive: '[Notes] Set Active Note',
            notesLoad: '[Notes] Load Notes',
            notesImgUrl: '[Notes] Note Image Url',
            notesLogoutCleaning: '[Notes] Logout Cleaning',
        
        }

        const currentTypes = types

        expect( currentTypes ).toEqual( defaultTypes )
    })
    
})

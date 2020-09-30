import { types } from "../types/types"

export const setError = ( error ) => {
   
    return {
        type: types.uiSetError,
        payload: error
    }
}

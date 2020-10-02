import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveNoteManager } from '../../actions/notes'

export const NotesAppBar = () => {

    const dispatch = useDispatch()

    const { active } = useSelector(state => state.notes)

    const handleSaveNote = () => {

        dispatch( saveNoteManager( active ) )
    }

    return (

        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
            <div>
                <button className="btn">Picture</button>
                <button onClick={handleSaveNote} className="btn">Save</button>
            </div>
        </div>
    )
}

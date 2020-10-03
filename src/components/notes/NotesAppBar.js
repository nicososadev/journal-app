import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveNoteManager, uploadManager } from '../../actions/notes'

export const NotesAppBar = () => {

    const dispatch = useDispatch()

    const { active } = useSelector(state => state.notes)

    const handleSaveNote = () => {

        dispatch( saveNoteManager( active ) )
    }

    const handlePictureUpload = () => {

        document.querySelector('#fileSelector').click()
    }

    const handleFileChange = (e) => {

        const file = e.target.files[0]

        if( file ){
            dispatch( uploadManager( file ) )
        }
    }

    return (

        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
            <input id="fileSelector" type="file" name="file" onChange={handleFileChange} style={{display: 'none'}} />
            <div>
                <button onClick={handlePictureUpload} className="btn">Picture</button>
                <button onClick={handleSaveNote} className="btn">Save</button>
            </div>
        </div>
    )
}

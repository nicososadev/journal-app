import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, deleteManager } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NotePage = () => {

    const dispatch = useDispatch()

    const { active:note } = useSelector(state => state.notes)

    const [ formValues, handleInputChange, reset ] = useForm( note )

    const { title, body } = formValues

    const activeId = useRef( note.id )

    useEffect(() => {

        if( note.id !== activeId.current ){
            reset( note )
            activeId.current = note.id
        }

    }, [note, reset])

    useEffect(() => {
        
        dispatch( activeNote( formValues.id, { ...formValues } ) )

    }, [formValues, dispatch])

    const handleDelete = () => {

        dispatch( deleteManager( activeId.current ) )
    }

    return (

        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">
                <input type="text" className="notes__title-input" value={title} name="title" onChange={handleInputChange} placeholder="Some awesome title" />
                <hr className="mb-5" />
                <textarea className="notes__textarea" value={body} name="body" onChange={handleInputChange} placeholder="An awesome text">

                </textarea>
                
                {
                    (note.url) &&
                    <div className="notes__image">
                        <img src={note.url} alt="imagen"/>
                    </div>
                }
            </div>

            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>

    )
}

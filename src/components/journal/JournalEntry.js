import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { activeNote } from '../../actions/notes'

export const JournalEntry = ({id, title, body, date, url}) => {
    
    const noteDate = moment(date)

    const dispatch = useDispatch()

    const handleEntryClick = () => {
        dispatch( activeNote(id, {title, body, date, url} ) )
    }

    return (
        <div onClick={handleEntryClick} className="journal__entry pointer animate__animated animate__fadeIn animate__faster">

            {
                url &&
                <div 
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}
                >
                </div>
            }
            
            <div className="journal__entry-body">
                <p className="jounral__entry-title">{title}</p>
                <p className="jounral__entry-content">{body}</p>
            </div>
            
            <div className="journal__entry-date">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    )
}

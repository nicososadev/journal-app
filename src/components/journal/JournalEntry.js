import React from 'react'

export const JournalEntry = () => {
    
    return (
        <div className="journal__entry pointer">

            <div className="journal__entry-picture">
            </div>
            
            <div className="journal__entry-body">
                <p className="jounral__entry-title">Titulo</p>
                <p className="jounral__entry-content">Contenido del Entry</p>
            </div>
            
            <div className="journal__entry-date">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}

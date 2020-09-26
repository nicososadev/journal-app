import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotePage = () => {

    return (

        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">
                <input type="text" className="notes__title-input" placeholder="Some awesome title" />
                <textarea className="notes__textarea" placeholder="An awesome text">

                </textarea>
                <div className="notes__image">
                    <img src="https://this.deakin.edu.au/wp-content/uploads/2019/06/coding-on-a-computer.jpg" alt="imagen"/>
                </div>
            </div>
        </div>

    )
}

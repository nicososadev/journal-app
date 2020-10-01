import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutManager } from '../../actions/auth'
import { JournalEntries } from './JournalEntries'

export const SideBar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {

        dispatch( logoutManager() )
    }

    return (

        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon" />
                    <span> Nicolas</span>
                </h3>

                <button onClick={handleLogout} className="btn">Logout</button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x" />
                <p className="mt-5">New Entry</p>
            </div>

            <JournalEntries />
        </aside>
    )
}

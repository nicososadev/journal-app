import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { firebase } from '../firebase/firebase-config'
import { JournalPage } from '../components/journal/JournalPage'
import { AuthRouter } from './AuthRouter'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

    const dispatch = useDispatch()

    const [checking, setChecking] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) => {

            if( user?.uid ){
                dispatch( login( user.uid, user.displayName ) )
                setIsAuthenticated(true)
            } else {
                setIsAuthenticated(false)
            }

            setChecking(false)
        })
    }, [dispatch, setChecking])

    if( checking ) {
        return (

            <h1>Wait...</h1>
        )
    }

    return (

        <Router>
            <div>
                <Switch>
                    <PublicRoute path='/auth' isAuthenticated={ isAuthenticated } component={ AuthRouter } />
                    <PrivateRoute exact path='/' isAuthenticated={ isAuthenticated } component={ JournalPage } />

                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    )
}

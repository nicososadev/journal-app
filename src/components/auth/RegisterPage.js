import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { registerManager } from '../../actions/auth'
import { removeError, setError } from '../../actions/ui'
import { useForm } from '../../hooks/useForm'

export const RegisterPage = () => {

    const dispatch = useDispatch()

    const { msgError } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        name: 'Nicolas',
        email: 'nicososa@gmail.com',
        password: '123456',
        password2: '123456'
    })

    const { name, email, password, password2 } = formValues

    const handleRegister = (e) => {
        e.preventDefault()
        
        if( isFormValid() ){
            dispatch( registerManager(email, password, name))
        }
    }

    const isFormValid = () => {

        if( name.trim().length === 0 ){
            dispatch( setError( 'Name is required' ))
            return false
        } else if( !validator.isEmail(email) ) {
            dispatch( setError( 'Email is not correct' ))
            return false
        } else if( password !== password2 || password.length < 5 ){
            dispatch( setError( 'Passwords missmatch' ))
            return false
        }

        dispatch( removeError() )

        return true
    }

    return (

        <Fragment>
            <h3 className="auth__title">Register</h3>

            <form className="animate__animated animate__fadeIn animate__faster" onSubmit={handleRegister}>
                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            <p>{msgError}</p>
                        </div>  

                    )
                }

                <input className="auth__input" type="text" name="name" value={name} onChange={handleInputChange} placeholder="Name" />
                <input className="auth__input" type="text" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
                <input className="auth__input" type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
                <input className="auth__input" type="password2" name="password2" value={password2} onChange={handleInputChange} placeholder="Confirm Password" />

                <button
                    className="btn btn-primary btn-block mt-1"
                    type="submit"
                >
                    Register
                </button>

                <Link className="link mt-1" to="/auth/login">Already have an Account</Link>
        

            </form>
        </Fragment>
    )
}

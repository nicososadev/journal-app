import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { googleLoginManager, loginManager } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginPage = () => {

    const dispatch = useDispatch()

    const { loading } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        email: 'nicososa@gmail.com',
        password: '123456'
    })

    const { email, password } = formValues

    const handleLogin = (e) =>{
        e.preventDefault()
        
        dispatch( loginManager(email, password) )
    }

    const googleLogin = () => {
        
        dispatch( googleLoginManager() )
    }



    return (

        <Fragment>
            <h3 className="auth__title">Login</h3>

            <form className="animate__animated animate__fadeIn animate__faster" onSubmit={ handleLogin } >
                <input className="auth__input" type="text" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
                <input className="auth__input" type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />

                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={loading}
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Login with Social Network</p>
                    <div onClick={googleLogin} className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                    <Link className="link mt-1" to="/auth/register">Create new Account</Link>
                </div>

            </form>
        </Fragment>
    )
}

import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
    return (
        <Fragment>
            <h3 className="auth__title">Login</h3>

            <form>
                <input className="auth__input" type="text" name="email" placeholder="Email" />
                <input className="auth__input" type="password" name="password" placeholder="Password" />

                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Login with Social Network</p>
                    <div className="google-btn">
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

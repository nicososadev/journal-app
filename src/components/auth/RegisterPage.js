import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
    return (
        <Fragment>
            <h3 className="auth__title">Register</h3>

            <form>
                <input className="auth__input" type="text" name="name" placeholder="Name" />
                <input className="auth__input" type="text" name="email" placeholder="Email" />
                <input className="auth__input" type="password" name="password" placeholder="Password" />
                <input className="auth__input" type="password2" name="password2" placeholder="Confirm Password" />

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

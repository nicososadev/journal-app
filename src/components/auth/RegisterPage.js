import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { useForm } from '../../hooks/useForm'

export const RegisterPage = () => {

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
            console.log('Formulario correcto!')
        }
    }

    const isFormValid = () => {

        if( name.trim().length === 0 ){
            console.log('nombre requerido')
            return false
        } else if( !validator.isEmail(email) ) {
            console.log('email incorrecto')
            return false
        } else if( password !== password2 || password.length < 5 ){
            console.log('las contraseñas deben ser iguales')
            return false
        }

        return true
    }

    return (

        <Fragment>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>
                <div className="auth__alert-error">

                </div>

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

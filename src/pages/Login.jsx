import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {

        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = { email, password }

        dispatch(login(userData))

    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
        <div className='row'>
            <div className='col-md-4 offset-md-4'>
                <section className='heading'>
                    <h4>
                        <FaSignInAlt /> Login
                    </h4>
                    <p className='text-success'>Por favor teclea tus credenciales</p>
                </section>
                <section className="form">
                    <form onSubmit={onSubmit}>
                        <div className="input-group mb-2">
                            <input
                                className='form-control'
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                placeholder='Teclea tu email'
                                onChange={onChange} />
                        </div>
                        <div className="input-group mb-2">
                            <input
                                className='form-control'
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                placeholder='Teclea tu password'
                                onChange={onChange} />
                        </div>
                        <div className="input-group mb-3">
                            <button type="submit" className='btn btn-success'>Submit</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
        </>
    )
}

export default Login
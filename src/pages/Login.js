import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/login.scss';

function Login() {
    const { register, handleSubmit, setError, formState: { errors, isSubmitSuccessful } } = useForm();
    const { toggleUser } = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        if (data.username !== 'Caleb' || data.password !== '1234') {
            setError('password', {
                type: 'password/username error',
                message: 'Username ou mot de passe invalide'
            })
        }
        if (isSubmitSuccessful) {
            toggleUser(data.username);
            navigate('/');
        }

    }

    return (
        <div className="loginBody">
            <div className="center">
                <h1>Connexion</h1>
                <form action="" method="POST" onSubmit={handleSubmit(onSubmit)} name='form'>
                    <div className="txt_field">
                        <input type="text" id='username' name="username" {...register("username", { required: true })} />
                        {errors.username && <span className='text-danger'>Ce champ est obligatoire</span>}
                        <span></span>
                        <label htmlFor='username'>Username</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" id='password' name="password"{...register("password", { required: 'Ce champ est obligatoire' })} />
                        {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                        <span></span>
                        <label htmlFor='password'>Password</label>
                    </div>
                    <div className="pass">Forgot password?</div>
                    <input type="submit" name="submit" value="Login" />
                    <div className="signup_link">
                        Pas de compte? <a href="/signIn">Signup</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;
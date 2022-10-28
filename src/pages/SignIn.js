import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/login.scss';

function SignIn() {
    const { register, handleSubmit, setError, formState: { errors, isSubmitSuccessful } } = useForm();
    const { toggleUser } = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        if (data.password !== data.passwordConfirm) {
            setError('passwordConfirm', {
                type: 'password confirmation error',
                message: 'Le mot de passe ne correspond pas'
            })
        }
        if (isSubmitSuccessful) {
            toggleUser(data.username);
            console.log(data);
            navigate('/');
        }

    }

    return (
        <div className="loginBody">
            <div className="center">
                <h1>Création de compte</h1>
                <form action="" method="POST" onSubmit={handleSubmit(onSubmit)} name='form'>
                    <div className="txt_field">
                        <input type="email" id='email' name="email" {...register("email", { required: true })} />
                        {errors.username && <span className='text-danger'>Ce champ est obligatoire</span>}
                        <span></span>
                        <label htmlFor='email'>Email</label>
                    </div>
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
                    <div className="txt_field">
                        <input type="password" id='passwordConfirm' name="passwordConfirm"{...register("passwordConfirm", { required: 'Ce champ est obligatoire' })} />
                        {errors.passwordConfirm && <span className='text-danger'>{errors.passwordConfirm.message}</span>}
                        <span></span>
                        <label htmlFor='passwordConfirm'>Password confirmation</label>
                    </div>
                    <input type="submit" name="submit" value="Créer" />
                    <div className="signup_link">
                        Have an account? <a href="/login">Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SignIn;
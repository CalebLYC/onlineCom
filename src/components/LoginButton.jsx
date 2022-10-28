import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

function LoginButton() {
    const { user, toggleUser } = useContext(UserContext);
    const handleDeconnect = () => {
        toggleUser();
    }

    return (
        !user ?
            <Link to='/login' className='login'>Connexion</Link> :
            <Link className='login' onClick={() => handleDeconnect()}>Déconnexion</Link>
    );
}

export default LoginButton;
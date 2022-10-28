import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import LoginButton from './LoginButton';

function FooterLoginButton() {
    const { user } = useContext(UserContext);

    return (
        <>
            {user && <p>Connecté sous le pseudonyme <span className="text-logo">{user}</span></p>}
            <button className='but'><LoginButton /></button>
        </>
    );
}

export default FooterLoginButton;
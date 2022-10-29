import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginButton from '../LoginButton';

function Header(props) {
    return (
        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <span className="logo">OnlineCom</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <h4 className="navbar-toggler-icon">'</h4>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul>
                        <li >
                            <NavLink aria-current="page" to="/" className={(nav) => nav.isActive ? "active nav-link" : "nav-link"} >Home</NavLink>
                        </li>
                        <li >
                            <NavLink to="/#products" className={(nav) => nav.isActive ? "active nav-link" : "nav-link"} >Produits</NavLink>
                        </li>
                        <li >
                            <NavLink to="/panier" className={(nav) => nav.isActive ? "active nav-link" : "nav-link"} >Panier</NavLink>
                        </li>
                        <li >
                            <NavLink to="/about#contacts" className={(nav) => nav.isActive ? "active nav-link" : "nav-link"} >Contacts</NavLink>
                        </li>
                        <li >
                            <NavLink to="/about" className={(nav) => nav.isActive ? "active nav-link" : "nav-link"}>A propos</NavLink>
                        </li>
                        <li>
                            <LoginButton />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
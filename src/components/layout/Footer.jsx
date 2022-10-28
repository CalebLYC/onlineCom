import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import facebookIcon from "../../assets/img/icons/facebook.png";
import whatsAppIcon from "../../assets/img/icons/whatsapp.png";
import instagramIcon from "../../assets/img/icons/instagram.png";
import linkedinIcon from "../../assets/img/icons/linkedin.png";
import telephoneIcon from "../../assets/img/icons/telephone.png";
import gmailIcon from "../../assets/img/icons/gmail.png";
import subscribeIcon from "../../assets/img/icons/subscribe .png";
import FooterLoginButton from '../FooterLoginButton';

function Footer() {
    return (
        <footer>
            <div className='footer-navigation'>
                <ul>
                    <li className="nav-item">
                        <NavLink aria-current="page" to="/" className={(nav) => nav.isActive ? "active nav-link" : "nav-link"} >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/#products" className={(nav) => nav.isActive ? "active nav-link" : "nav-link"} >Produits</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/panier" className={(nav) => nav.isActive ? "active nav-link" : "nav-link"} >Panier</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/#contacts" className={(nav) => nav.isActive ? "active nav-link" : "nav-link"} >Contacts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className={(nav) => nav.isActive ? "active nav-link" : "nav-link"}>A propos</NavLink>
                    </li>
                    <li>
                        <FooterLoginButton />
                    </li>
                </ul>
            </div>
            <div className="social-network">
                <h3>Nos réseaux sociaux</h3>
                <ul>
                    <li><img src={facebookIcon} width="30" height="30" alt=" faceboook icon" /><a href="https://www.facebook.com/caleb.lyc.7">  facebook</a></li>
                    <li><img src={whatsAppIcon} width="30" height="30" alt="whatsApp icon" /><a href="https://wa.me/+22891982996">  whastapp</a></li>
                    <li><a href="https://">  Ali baba</a></li>
                    <li><img src={instagramIcon} width="30" height="30" alt=" instagram icon" /><a href="https://www.instagram.com/lyc_caleb/">  instagram</a></li>
                    <li><img src={linkedinIcon} width="30" height="30" alt="linkedin icon" /><a href="https://">  linkedin</a></li>
                </ul>
            </div>
            <div className="usProducts">
                <h3><a href="#products">Nos produits</a></h3>
                <ul>
                    <li><Link to="/#products">Sacs</Link></li>
                    <li><Link to="/#products">Vêtements</Link></li>
                    <li><Link to="/#products">Chaussures</Link></li>
                    <li><Link to="/#products">Accessoires</Link></li>
                </ul>
            </div>
            <div className="contacts">
                <h3 id="contacts">Contacts</h3>
                <ul>
                    <li><img src={telephoneIcon} width="30" height="30" alt=" phone icon" />  tel: +228 91982996</li>
                    <li><img src={gmailIcon} width="30" height="30" alt="gmail icon" />  email <a href="mailto:caleblyc@gamail.com">caleblyc@gmail.com</a></li>
                    <h3>S'abonner à la newsletter</h3>
                    <form action="" method="POST" id="newsletter">
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="" />
                        </div>
                        <button type="submit" name="submit"><img src={subscribeIcon} alt="Subscribe" width="60" height="60" className='subscribe' /></button>
                    </form>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
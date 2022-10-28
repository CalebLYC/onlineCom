import React from 'react';
import '../styles/pages/about.scss';
import WhoWeAre from '../components/WhoWeAre';
import WhyUs from '../components/WhyUs';
import Contacts from '../components/Contacts';

function About(props) {
    return (
        <div className='container'>
            <WhoWeAre />
            <WhyUs />
            <Contacts />
        </div>
    );
}

export default About;
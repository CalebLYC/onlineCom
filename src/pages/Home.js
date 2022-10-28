import React from 'react';
import HomeBack from '../components/HomeBack';
import HomeButton from '../components/HomeButton';
import Products from '../components/Products';
import '../styles/pages/home.scss';

function Home(props) {
    return (
        <main className='container'>
            <HomeBack />
            <HomeButton />
            <Products />
        </main>
    );
}

export default Home;
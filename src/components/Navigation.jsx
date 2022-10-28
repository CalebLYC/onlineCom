import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Panier from '../pages/Panier';
import NotFoundPage from '../pages/NotFoundPage';
import Login from '../pages/Login';
import ProductPageConsummer from './ProductPageConsummer';
import Layout from './layout/Layout';
import SignIn from '../pages/SignIn';

function Navigation() {

    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/panier' element={<Panier />} />
                <Route path='/product' element={<ProductPageConsummer />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signIn' element={<SignIn />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Layout>
    );
}

export default Navigation;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Container } from 'postcss';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='bg-slate-300'>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
import React from 'react';
import Footer from '../../shered/Footer';
import CustomerMessage from './CustomerMessage';
import HandleScreen from './HandleScreen';
import LandingPage from './LandingPage';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <LandingPage />
            <Services />
            <HandleScreen />
            <Testimonial />
            <CustomerMessage />
            <Footer />
        </div>
    );
};

export default Home;
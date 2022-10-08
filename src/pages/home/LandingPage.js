import React from 'react';
import landingImage from '../../assets/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const LandingPage = () => {
    return (
        <>
            <div class="hero bg-accent lg:h-[70vh]">
                <div class="hero-content flex-col lg:flex-row px-10 gap-6">
                    <div className='mb-16'>
                        <h1 class="text-5xl font-bold max-w-lg">BEAUTY SALON FOR EVERY WOMEN</h1>
                        <p class="py-6 max-w-md">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get an Appointment</button>
                    </div>
                    <div className='h-[57vh] shrink-0 lg:block sm:hidden'>
                        <img src={landingImage} class=" h-full " />
                    </div>
                </div>
            </div>

        </>


    );
};

export default LandingPage;
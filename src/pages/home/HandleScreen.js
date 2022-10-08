import React from 'react';
import screenCare from "../../assets/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png"

const HandleScreen = () => {
    return (
        <div class="hero   bg-accent lg:h-[70vh] mt-12 mb-12">
            <div class="hero-content flex-col lg:flex-row px-10 gap-16">
                <div className='h-[45vh] shrink-0 lg:block sm:hidden'>
                    <img src={screenCare} class=" h-full " />
                </div>
                <div className=''>
                    <div className='lg:mb-16'>
                        <h1 class="text-4xl font-medium max-w-sm">Let Us Handle Your Screen <span className='text-primary'>Professionally</span>.</h1>
                        <p class="py-6 max-w-md">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className=' flex justify-between'>
                        <div>
                            <h1 className='text-5xl text-primary font-bold mb-5'>500+ </h1>
                            <p className='text-xl'>Happy Customer</p>
                        </div>
                        <div>
                            <h1 className='text-5xl text-primary font-bold mb-5'>16+ </h1>
                            <p className='text-xl'>Total Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HandleScreen; 
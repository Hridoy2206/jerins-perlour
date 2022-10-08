import React from 'react';
import group1 from "../../assets/Icon/Group 1373.png"
import group2 from "../../assets/Icon/Group 1374.png"
import group3 from "../../assets/Icon/Group 1372.png"

const Services = () => {
    return (
        <div className=' mt-24 bg-white text-center'>
            <h1 className='text-[#111430] text-3xl text-center font-bold mb-8'>Our Awesome <span className='text-primary'>Services</span></h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 mx-auto lg:px-12 sm:px-3'>
                <div class="card  bg-base-100 ">
                    <figure class="px-10 pt-10">
                        <img src={group1} alt="Shoes" class="rounded-xl w-24" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Anti Age Face Treatment</h2>
                        <span className='text-primary text-xl font-bold'>$99</span>
                        <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={group2} alt="Shoes" class="rounded-xl  w-24" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Anti Age Face Treatment</h2>
                        <span className='text-primary text-xl font-bold'>$99</span>
                        <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </div>
                </div>
                <div class="card  bg-base-100">
                    <figure class="px-10 pt-10">
                        <img src={group3} alt="Shoes" class="rounded-xl  w-24" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Anti Age Face Treatment</h2>
                        <span className='text-primary text-xl font-bold'>$99</span>
                        <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </div>
                </div>
            </div>

            <button className='btn btn-primary mt-12 px-10'>Explore more</button>
        </div>
    );
};

export default Services;
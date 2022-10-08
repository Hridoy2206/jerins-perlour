import React from 'react';
import customer1 from "../../assets/Image/Ellipse 90.png"
import customer2 from "../../assets/Image/Ellipse 91.png"
import customer3 from "../../assets/Image/Ellipse 92.png"
import icon from "../../assets/Icon/Group 33040.png"
const Testimonial = () => {
    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-center m-16 '>Testimonial</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:px-12 gap-6'>
                <div class="card bg-base-100">
                    <div class="card-body">
                        <h2 class="card-title">
                            <div className='flex gap-5 justify-center'>
                                <div class="avatar">
                                    <div class="w-16">
                                        <img src={customer1} className="rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold '>Nash Petrik</p>
                                    <p className='font-medium'>CEO, Manpol</p>
                                </div>
                            </div>
                        </h2>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eveniet dolor molestias distinctio voluptatem corrupti
                            </p>
                            <p className='flex w-6 mt-5'>
                                <img src={icon} alt="" />
                                <img src={icon} alt="" />
                                <img src={icon} alt="" />
                                <img src={icon} alt="" />
                                <img src={icon} alt="" />
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card  bg-base-100 ">
                    <div class="card-body">
                        <h2 class="card-title">
                            <div className='flex gap-5 justify-center'>
                                <div class="avatar">
                                    <div class="w-16">
                                        <img src={customer2} className="rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold '>Nash Petrik</p>
                                    <p className='font-medium'>CEO, Manpol</p>
                                </div>
                            </div>
                        </h2>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eveniet dolor molestias distinctio voluptatem corrupti
                            </p>
                            <p className='flex w-6 mt-5'>
                                <img src={icon} alt="" />
                                <img src={icon} alt="" />
                                <img src={icon} alt="" />
                                <img src={icon} alt="" />
                                <img src={icon} alt="" />
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card  bg-base-100">
                    <div class="card-body">
                        <h2 class="card-title">
                            <div className='flex gap-5 justify-center'>
                                <div class="avatar">
                                    <div class="w-16">
                                        <img src={customer3} className="rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold '>Nash Petrik</p>
                                    <p className='font-medium'>CEO, Manpol</p>
                                </div>
                            </div>
                        </h2>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eveniet dolor molestias distinctio voluptatem corrupti
                            </p>
                            <p className='flex w-6 mt-5'>
                                <img src={icon} alt="" />
                                <img src={icon} alt="" />
                                <img src={icon} alt="" />
                                <img src={icon} alt="" />
                                <img src={icon} alt="" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex justify-center mt-8 gap-4 cursor-pointer '>
                <div>
                    <p className='w-4 h-4 rounded-full border-black bg-black'></p>
                </div>
                <div>
                    <p className='w-4 h-4 rounded-full border-black bg-gray-400 hover:bg-black transition delay-150'></p>
                </div>
                <div>
                    <p className='w-4 h-4 rounded-full border-black bg-gray-400 hover:bg-black transition delay-150 ease-in-out'></p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
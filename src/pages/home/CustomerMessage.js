import React from 'react';

const CustomerMessage = () => {
    return (
        <div className=' bg-yellow-50 lg:p-16 p-4 mx-auto w-full'>
            <h1 className='text-3xl font-bold max-w-sm text-center mx-auto'>Let Us Handle Your Project, Professionally.</h1>
            <div className='mt-12'>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-6 lg:w-2/3 w-full mx-auto mb-6'>
                    <input type="text" placeholder='Full Name' className='py-4 px-3 outline-none' />
                    <input type="text" placeholder='Last Name' className='py-4 px-3 outline-none' />
                    <input type="email" placeholder='Email Address' className='py-4 px-3 outline-none' />
                    <input type="number" placeholder='Phone Number' className='py-4 px-3 outline-none ' />
                </div>
            </div>
            <div className=''>
                <textarea name="" id="" cols="" rows="6" className=' lg:w-2/3 w-full  mx-auto p-3 lg:ml-48 mb-6 outline-none' placeholder='Your message'></textarea>
            </div>
            <div className=' lg:w-1/6 w-3/6  mx-auto'>
                <button className='btn btn-primary px-8 mx-auto'>Send Message</button>
            </div>
        </div>
    );
};

export default CustomerMessage;
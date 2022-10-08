import React from 'react';
import mapIcon from "../assets/Icon/map-pin-2-fill.png"
import victor from "../assets/Icon/Vector-1.png"
import victor1 from "../assets/Icon/Vector-1.png"
import victor2 from "../assets/Icon/Vector-2.png"
import victor3 from "../assets/Icon/Vector-3.png"

const Footer = () => {

    return (
        <footer class="footer p-10 bg-primary lg:p-20 p-10  text-white">
            <div>
                <p className='max-w-sm text-xl mt-6 flex'>
                    <img src={mapIcon} className="w-6 h-6 mr-4 mt-2 hidden lg:block" alt="" />
                    H#000 (0th Floor), Road #00,
                    New DOHS, Mohakhali, Dhaka, Bangladesh
                </p>
            </div>
            <div>
                <span class=" text-2xl font-medium text-white ">Company</span>
                <a class="link link-hover">About</a>
                <a class="link link-hover">Project</a>
                <a class="link link-hover">Out Team</a>
                <a class="link link-hover">Terms Condition</a>
                <a class="link link-hover">Submit listing</a>
            </div>
            <div>
                <span class=" text-2xl font-medium text-white ">Quick Link</span>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
                <a class="link link-hover">Press kit</a>
            </div>
            <div>
                <span class=" text-2xl font-medium text-white ">About Us</span>
                <div class="">
                    <p className='max-w-xs'>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Purus commodo ipsum
                        duis laoreet maecenas. Feugiat
                    </p>
                    <p className='flex mt-4 cursor-pointer'>
                        <img src={victor} alt="" className="w-6 h-6 mr-10 " />
                        <img src={victor1} alt="" className="w-6 h-6 mr-10 " />
                        <img src={victor2} alt="" className="w-6 h-6 mr-10 " />
                        <img src={victor3} alt="" className="w-6 h-6 mr-10 " />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
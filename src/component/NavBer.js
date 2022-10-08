import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import titleImage from "../assets/Group 33092.png"

const NavBer = ({ children }) => {
    return (
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div class="w-full navbar bg-accent lg:px-12">
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-1 px-2 mx-2"><img className='h-12 hidden lg:block' src={titleImage} alt="" /></div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            <li><NavLink className="rounded-md mr-4" to="/home">Home</NavLink></li>
                            <li><NavLink className="rounded-md mr-4" to="/contact">Contact us</NavLink></li>
                            <li><NavLink className="rounded-md mr-4" to="/portfolio">Portfolio</NavLink></li>
                            <li><NavLink className="rounded-md mr-4" to="/team">Our Team</NavLink></li>
                            <li><NavLink className='btn btn-primary rounded-md text-white px-12' to="/login">Login</NavLink></li>
                        </ul>
                    </div>
                </div>
                {/* Page content here  */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/contact">Contact us</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/team">Our Team</NavLink></li>
                    <li><NavLink className='btn btn-primary rounded-sm text-white px-12' to="/team">Login</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBer;
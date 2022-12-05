import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='relative z-10'>
            <div className='absolute top-5 right-5 text-5xl text-white lg:hidden z-20'>
                {
                    open ? <HiX onClick={() => setOpen(!open)} /> : <HiMenuAlt3 onClick={() => setOpen(!open)} />
                }
            </div>
            <div className={`flex flex-col absolute pt-40 bg-[#0E1828] h-screen nav-container lg:left-0 ${open ? 'left-0' : '-left-96'}`}>
                <Link className='text-4xl font-semibold text-start pl-20 w-80 py-5 text-white' to="/">Home</Link>
                <Link className='text-4xl font-semibold text-start pl-20 w-80 py-5 text-white' to="/skills">Skills</Link>
                <Link className='text-4xl font-semibold text-start pl-20 w-80 py-5 text-white' to="/projects">Projects</Link>
                <Link className='text-4xl font-semibold text-start pl-20 w-80 py-5 text-white' to="/about">About</Link>
                <Link className='text-4xl font-semibold text-start pl-20 w-80 py-5 text-white' to="/contact">Hire Me</Link>

                <div className=' flex justify-center absolute bottom-5 left-0 right-0'>
                    <a target="_blank" href="https://github.com/mahin-wd">
                        <FaGithub className='mx-5 text-3xl' />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/wd-mahin/">
                        <FaLinkedin className='mx-5 text-3xl' />
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
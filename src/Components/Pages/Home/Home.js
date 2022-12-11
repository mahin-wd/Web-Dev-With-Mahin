import React from 'react';
import lgImg from '../../../images/photo-01-01.png'
import Typewriter from 'typewriter-effect';
import './Home.css'
import img1 from '../../../images/comfortLife.jpg'
import img2 from '../../../images/zidansHomeKitchen.jpg'
import img3 from '../../../images/codeEasy.jpg'
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        {/* Large devices */}
        <div className='relative flex flex-col justify-center items-center pt-20'>
            <div className=' text-center 2xl:ml-[500px] xl:ml-[300px] lg:ml-[200px]'>
                <h3 className='text-xl tracking-widest'>Hi There,</h3>
                <h2 className='text-2xl mt-5 mb-1'>I am</h2>
                <h1 className='name-text 2xl:text-6xl md:text-6xl text-4xl font-bold text-[#5bc5f4]'>
                    <Typewriter
                        options={{
                            strings: ['MD. Mahin Islam Mahi', 'Frontend Web Developer'],
                            autoStart: true,
                            loop: true,
                        }} />
                </h1>
                <p className=' text-gray-300 w-2/3 mx-auto'>I am a front end web developer. I develop the user interface of a website using React Js. </p>

                <img className='max-w-[500px] w-[300px] md:w-[500px] mx-auto z-10 image' src={lgImg} alt="" />

                <button className='bg-[#5bc5f4] px-5 py-2 mt-5 rounded-lg text-2xl text-[#070D14] font-bold btn-hover'>
                    <a target="_blank" href="https://drive.google.com/file/d/1jpki0hJYEvFFJnkei6dfKgnVhfdO6Aaf/view">
                        RESUME
                    </a>
                </button>
            </div>
        </div>

        {/* Basic Projects */}
            <h2 className="text-3xl lg:ml-80 mt-40">Projects I have Build</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:ml-80 mt-20 mb-10'>
            <div>
                <img className='w-[350px] mx-auto project-image' src={img1} alt="" />
                <h3 className="text-xl">Comfort Life</h3>
                <p>Comfort Life is a website where people can buy and sell Second Hand products.</p>
            </div>
            <div>
                <img className='w-[350px] mx-auto project-image' src={img2} alt="" />
                <h3 className="text-xl">Zidans Home Kitchen</h3>
                <p>Zidans Home Kitchen is a personal business website</p>
            </div>
            <div>
                <img className='w-[350px] mx-auto project-image' src={img3} alt="" />
                <h3 className="text-xl">Code Easy</h3>
                <p>Code Ease is a online learning platform</p>
            </div>
        </div>

        <Link className='bg-transparent border border-[#5bc5f4] text-[#5bc5f4] px-5 py-3 ml-80 text-xl rounded-lg' to="/projects">See More</Link>

    </div>
);

export default Home;
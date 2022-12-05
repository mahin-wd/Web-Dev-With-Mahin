import React from 'react';
import lgImg from '../../../images/photo-01-01.png'
import './Home.css'

const Home = () => {
    return (
        <div>
            {/* Large devices */}
            <div className='relative hidden xl:flex'>
                <img className='max-w-[500px] absolute left-96 xl:top-60 z-10' src={lgImg} alt="" />
                <div className='bg-[#0E1828] 2xl:w-[1200px] xl:w-[700px] md:w-[500px] absolute right-0 h-screen'>
                    <div className='pt-96 text-start 2xl:ml-[500px] xl:ml-[300px] lg:ml-[200px]'>
                        <h3 className='text-xl tracking-widest'>Hi There,</h3>
                        <h2 className='text-4xl mt-5 mb-1'>This is</h2>
                        <h1 className='2xl:text-9xl xl:text-8xl font-bold text-[#5bc5f4]'>Mahin</h1>
                        <p className='text-gray-300'>I am a front end web developer. I develop the user interface of a website using React Js. </p>
                        <button className='bg-[#5bc5f4] px-5 py-2 mt-5 rounded-lg text-2xl text-[#070D14] font-bold btn-hover'>
                            <a target="_blank" href="https://drive.google.com/file/d/1bgHsIfV6WKSPliBVCROx5m9fhhg_rwdT/view?usp=sharing">
                                RESUME
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            {/* small device */}
            <div className='px-5'>
                <div className='relative xl:flex-col-reverse 2xl:hidden lg:ml-60'>
                    <div className='xl:hidden'>
                        <div className='pt-40 text-center w-3/4 mx-auto'>
                            <h3 className='text-xl tracking-widest'>Hi There,</h3>
                            <h2 className='text-3xl mt-5 mb-1'>This is</h2>
                            <h1 className='2xl:text-9xl xl:text-8xl text-5xl font-bold text-[#5bc5f4]'>Mahin</h1>
                            <p className='text-gray-300'>I am a front end web developer. I develop the user interface of a website using React Js. </p>
                        </div>
                        <img className='max-w-[500px] w-[250px] lg:w-[400px] xl:top-60 z-10 xl:hidden mx-auto pt-10' src={lgImg} alt="" />
                        <button className='bg-[#5bc5f4] px-5 py-2 mt-5 rounded-lg text-xl text-[#070D14] font-bold btn-hover'>
                            <a target="_blank" href="https://drive.google.com/file/d/1bgHsIfV6WKSPliBVCROx5m9fhhg_rwdT/view?usp=sharing">
                                RESUME
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
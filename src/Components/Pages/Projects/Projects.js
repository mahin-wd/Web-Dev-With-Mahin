import React from 'react';
import { Link } from 'react-router-dom';
import page1 from '../../../images/comfort-life/page1.jpg'
import page4 from '../../../images/zidans-home-kitchen/page4.jpg'
import page7 from '../../../images/code easy/page7.jpg'

const Projects = () => {
    return (
        <div className='pt-20 font-semibold pb-20'>
            <h3 className='text-4xl text-[#5bc5f4] lg:ml-80 mb-40'>My Projects</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:ml-80'>
                <div className='mt-5'>
                    <img className='w-[350px] mx-auto project-image' src={page1} alt="" />
                    <h3 className='text-xl mt-3'>Comfort Life</h3>
                    <Link to="/comfortLife">
                        <p className='text-xl text-blue-400'>Detail</p>
                    </Link>
                </div>
                <div className='mt-5'>
                    <img className='w-[350px] mx-auto project-image' src={page4} alt="" />
                    <h3 className='text-xl mt-3'>Zidans Home Kitchen</h3>
                    <Link to="/zidansHomeKitchen">
                        <p className='text-xl text-blue-400'>Detail</p>
                    </Link>
                </div>
                <div className='mt-5'>
                    <img className='w-[350px] mx-auto project-image' src={page7} alt="" />
                    <h3 className='text-xl mt-3'>Code Easy</h3>
                    <Link to="/codeEasy">
                        <p className='text-xl text-blue-400'>Detail</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;
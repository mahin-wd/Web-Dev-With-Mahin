import React from 'react';
import page7 from '../../../../../images/code easy/page7.jpg'
import page8 from '../../../../../images/code easy/page8.jpg'
import page9 from '../../../../../images/code easy/page9.jpg'

const CodeEasy = () => {
    return (
        <div>
            <div className='pt-40 pb-10'>
                <h3 className="text-3xl text-[#5bc5f4] font-semibold">Comfort Life</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:ml-80 mt-20'>
                    <img className='w-[350px] mx-auto project-image' src={page7} alt="" />
                    <img className='w-[350px] mx-auto project-image' src={page8} alt="" />
                    <img className='w-[350px] mx-auto project-image' src={page9} alt="" />
                </div>
                <div className='lg:w-1/2 px-3 mx-auto'>
                    <h3 className='text-start lg:text-3xl mt-5'>Detail:</h3>
                    <p className='text-start ml-3'>
                        1) Code Easy is a online learning platform website <br />
                        2) This website is build using React.js on the front end. <br />
                        3) Users signup, login and signout was added using Firebase Authentication. <br />
                        4) Users can buy online courses from this website. <br />
                        5) When a user will try to purchase a course, he will have to login first. <br />
                    </p>
                    <div className='flex justify-center mt-5'>
                        <a target='_blank' className='mx-5' href="https://taupe-yeot-ce0429.netlify.app/">
                            <p className='text-blue-500 font-semibold'>Live Website</p>
                        </a>
                        <a target='_blank' className='mx-5' href="https://github.com/wd-mahin/Code-Easy">
                            <p className='text-blue-500 font-semibold'>GitHub Client Side</p>
                        </a>
                        <a target='_blank' className='mx-5' href="https://github.com/wd-mahin/Code-Easy-Server">
                            <p className='text-blue-500 font-semibold'>GitHub Server Side</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeEasy;
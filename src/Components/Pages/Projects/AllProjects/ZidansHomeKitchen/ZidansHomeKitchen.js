import React from 'react';
import page4 from '../../../../../images/zidans-home-kitchen/page4.jpg'
import page5 from '../../../../../images/zidans-home-kitchen/page5.jpg'
import page6 from '../../../../../images/zidans-home-kitchen/page6.jpg'

const ZidansHomeKitchen = () => {
    return (
        <div>
            <div className='pt-40 pb-10'>
                <h3 className="text-3xl text-[#5bc5f4] font-semibold">Comfort Life</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:ml-80 mt-20'>
                    <img className='w-[350px] mx-auto project-image' src={page4} alt="" />
                    <img className='w-[350px] mx-auto project-image' src={page5} alt="" />
                    <img className='w-[350px] mx-auto project-image' src={page6} alt="" />
                </div>
                <div className='lg:w-1/2 px-3 mx-auto'>
                    <h3 className='text-start lg:text-3xl mt-5'>Detail:</h3>
                    <p className='text-start ml-3'>
                        1) Zidans Home Kitchen is a personal website where people can review your services <br />
                        2) This website is build using React.js on the front end, Express.js on the back end and MongoDB on the database. <br />
                        3) Users signup, login and signout was added using Firebase Authentication. <br />
                        4) Users information is encripted by the JSON web token. <br />
                        5) Here user can review your all services. <br />
                        6) When a user will try to review, he will have to login first. <br />
                        7) Users most recent review will appear on the top.
                    </p>
                    <div className='flex justify-center mt-5'>
                        <a target='_blank' className='mx-5' href="https://zidans-home-kitchen-8af28.web.app/">
                            <p className='text-blue-500 font-semibold'>Live Website</p>
                        </a>
                        <a target='_blank' className='mx-5' href="https://github.com/wd-mahin/Zidans-Home-Kitchen">
                            <p className='text-blue-500 font-semibold'>GitHub Client Side</p>
                        </a>
                        <a target='_blank' className='mx-5' href="https://github.com/wd-mahin/Zidans-Home-Kitchen-Server">
                            <p className='text-blue-500 font-semibold'>GitHub Server Side</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ZidansHomeKitchen;
import React from 'react';
import page1 from '../../../../../images/comfort-life/page1.jpg'
import page2 from '../../../../../images/comfort-life/page2.jpg'
import page3 from '../../../../../images/comfort-life/page3.jpg'

const ComfortLife = () => {
    return (
        <div className='pt-40 pb-10'>
            <h3 className="text-3xl text-[#5bc5f4] font-semibold">Comfort Life</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:ml-80 mt-20'>
                <img className='w-[350px] mx-auto project-image' src={page1} alt="" />
                <img className='w-[350px] mx-auto project-image' src={page2} alt="" />
                <img className='w-[350px] mx-auto project-image' src={page3} alt="" />
            </div>
            <div className='lg:w-1/2 px-3 mx-auto'>
                <h3 className='text-start lg:text-3xl mt-5'>Detail:</h3>
                <p className='text-start ml-3'>
                    1) Comfort Life is a 2nd hand furniture selling and buying website. <br />
                    2) This website is build using React.js on the front end, Express.js on the back end and MongoDB on the database. <br />
                    3) Users signup, login and signout was added using Firebase Authentication. <br />
                    4) Buyers information is encripted by the JSON web token. <br />
                    5) Here user can create a new Seller or Buyer account acording to their useg. <br />
                    6) Buyers can add products to the wishlist and purchase frome there. <br />
                    7) Sellers can add products and set them for advertisement. <br />
                    8) Admin can remove or varify sellers.
                </p>
                <div className='flex justify-center mt-5'>
                    <a target='_blank' className='mx-5' href="https://comfort-life-83bf3.web.app/">
                        <p className='text-blue-500 font-semibold'>Live Website</p>
                    </a>
                    <a target='_blank' className='mx-5' href="https://github.com/wd-mahin/Comfort-Life-Client">
                        <p className='text-blue-500 font-semibold'>GitHub Client Side</p>
                    </a>
                    <a target='_blank' className='mx-5' href="https://github.com/wd-mahin/Comfort-Life-Server">
                        <p className='text-blue-500 font-semibold'>GitHub Server Side</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ComfortLife;
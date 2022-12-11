import React from 'react';
import me from '../../../images/me.png'

const About = () => {
    return (
        <div className='pt-20'>
            <div className='lg:w-1/2 mx-auto rounded-lg px-3 py-5'>
                <h3 className='text-4xl text-[#5bc5f4] mb-20 font-semibold'>About Me</h3>
                <img className='mx-auto mb-10' src={me} alt="" />
                <p className='text-xl text-start mb-10'> <span className='text-[#5bc5f4] font-semibold'>As a web developer: </span> I am MD. Mahin Islam Mahi. I am a front end web developer. I use React.js to build the front end of a website. I am very much skilled in HTML5, CSS3, Bootstrap, TailwindCSS, JavaScript, ES6, React.js, Express.js, MongoDB. <br />
                I have completed a course on Complete Web Development and developing websites more than a year. I have completed 2 major projects with React.js, Express.js and MongoDB.
                </p>

                <p className='text-xl text-start'>
                    I love to learn new technologies and upgrade my skills. My goal is to become a senior full stack web developer in future. And I am doing my best for it.
                </p>
            </div>
        </div>
    );
};

export default About;
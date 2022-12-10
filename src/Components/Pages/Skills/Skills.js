import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div className='h-screen py-20'>
            <h3 className="text-5xl text-[#5bc5f4] font-semibold">My Skills</h3>
            
            <div className='2xl:flex justify-center items-center'>
                {/* HTML */}
                <div className='pt-10'>
                    <div>
                        <div className='flex justify-center items-center pt-[150px] px-10'>
                            <div className="progress-container">
                                <div className="progress">
                                </div>
                            </div>
                            <div className='ml-10'>
                                <p>90%</p>
                            </div>
                        </div>
                        <div>
                            <p className='-ml-80'>HTML</p>
                        </div>
                    </div>

                    {/* CSS */}
                    <div className='-mt-20'>
                        <div className='flex justify-center items-center pt-[120px] px-10'>
                            <div className="progress-container">
                                <div className="progress">
                                </div>
                            </div>
                            <div className='ml-10'>
                                <p>90%</p>
                            </div>
                        </div>
                        <div>
                            <p className='-ml-80'>CSS</p>
                        </div>
                    </div>

                    {/* javascript */}
                    <div className='-mt-20'>
                        <div className='flex justify-center items-center pt-[120px] px-10'>
                            <div className="progress-container">
                                <div className="progress-js">
                                </div>
                            </div>
                            <div className='ml-10'>
                                <p>80%</p>
                            </div>
                        </div>
                        <div>
                            <p className='-ml-[270px]'>JavaScript</p>
                        </div>
                    </div>
                </div>

                {/* react js */}
                <div className='2xl:pt-[145px]'>
                    <div className='-mt-20'>
                        <div className='flex justify-center items-center pt-[120px] px-10'>
                            <div className="progress-container">
                                <div className="progress-react">
                                </div>
                            </div>
                            <div className='ml-10'>
                                <p>85%</p>
                            </div>
                        </div>
                        <div>
                            <p className='-ml-[270px]'>React Js</p>
                        </div>
                    </div>

                    {/* express js */}
                    <div className='-mt-20'>
                        <div className='flex justify-center items-center pt-[120px] px-10'>
                            <div className="progress-container">
                                <div className="progress-express-mongo">
                                </div>
                            </div>
                            <div className='ml-10'>
                                <p>50%</p>
                            </div>
                        </div>
                        <div>
                            <p className='-ml-[270px]'>Express Js</p>
                        </div>
                    </div>

                    {/* mongodb */}
                    <div className='-mt-20'>
                        <div className='flex justify-center items-center pt-[120px] px-10'>
                            <div className="progress-container">
                                <div className="progress-express-mongo">
                                </div>
                            </div>
                            <div className='ml-10'>
                                <p>50%</p>
                            </div>
                        </div>
                        <div>
                            <p className='-ml-[270px]'>MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
import React from 'react';
import Typewriter from 'typewriter-effect';

const Blog = () => {
    return (
        <div className='pt-80'>
            <h3 className="text-4xl text-[#5bc5f4] font-semibold">
                <Typewriter
                    options={{
                        strings: 'Coming Soon...',
                        autoStart: true,
                        loop: true,
                    }} />
            </h3>
        </div>
    );
};

export default Blog;
import React, { useRef } from 'react';
import Typewriter from 'typewriter-effect';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_8kyk56c', 'template_0e5e0xr', form.current, 'y1TTW4v6RDy41sHMS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }
    return (
        <div className='pt-20 px-5'>
            <h3 className='text-4xl text-[#5bc5f4] font-semibold'>
                <Typewriter
                    options={{
                        strings: ['Contact Me...', 'Or', 'Hire Me...'],
                        autoStart: true,
                        loop: true,
                    }} />
            </h3>

            <form ref={form} onSubmit={sendEmail} className='lg:w-1/5 mx-auto px-5 py-5 border-2 border-[#5bc5f4] rounded-xl mt-20'>
                <div className='mb-5'>
                    <label className='block text-start text-2xl font-normal mb-2' htmlFor="">Full Name</label>
                    <input className='w-full h-[50px] rounded-xl bg-transparent border-2 border-[#5bc5f4] px-3 py-3' type="text" name="name" placeholder='Full Name' />
                </div>

                <div className='mb-5'>
                    <label className='block text-start text-2xl font-normal mb-2' htmlFor="">Email</label>
                    <input className='w-full h-[50px] rounded-xl bg-transparent border-2 border-[#5bc5f4] px-3 py-3' type="text" name="email" placeholder='Email' />
                </div>

                <div className='mb-5'>
                    <label className='block text-start text-2xl font-normal mb-2' htmlFor="">Subject</label>
                    <input className='w-full h-[50px] rounded-xl bg-transparent border-2 border-[#5bc5f4] px-3 py-3' type="text" name="subject" placeholder='Subject' />
                </div>

                <div className='mb-5'>
                    <label className='block text-start text-2xl font-normal mb-2' htmlFor="">Your Message</label>
                    <textarea className='w-full h-[100px] rounded-xl bg-transparent border-2 border-[#5bc5f4] px-3 py-3' type="text" name="message" placeholder='Email' />
                </div>

                <input className='w-full h-[50px] rounded-xl bg-[#5bc5f4] ' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;
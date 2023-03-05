import React from 'react';
import image from '../images/Audio track.svg'

const Hero = () => {
    return (
        <div className='flex justify-around items-center mt-[124px] text-black'>
            <section className='w-5/12'>
                <h1 className='text-5xl font-bold mb-8 pr-32'>Become The Hero of Your Own Story</h1>
                <p className='mb-8 pr-24'>Lorem ipsum dolor sit amet, consetetur sadiapscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                <div>
                    <input type="email" placeholder='Enter Your Email Id' className='bg-off-white h-12 w-[332px] pl-4 focus:outline-none'/>
                    <button className='h-12 text-lg font-semibold text-white bg-blue w-[154px] hover:bg-dark-blue'>Subscribe</button>
                </div>
            </section>
            <img src={image} alt="sound wave" />
        </div>
    );
};

export default Hero;
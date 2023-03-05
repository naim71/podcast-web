import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo-white.svg'
import img1 from '../../images/White Logo/Apple Podcast.png'
import img2 from '../../images/White Logo/Google Podcast.png'
import img3 from '../../images/White Logo/Soundcloud.png'
import img4 from '../../images/White Logo/Spotify.png'
import Sponsors from '../Sponsors';

const Footer = () => {
    return (
        <div className='relative mt-80'>
            <Sponsors></Sponsors>
            <div className='bg-black h-[574px]'>
                <div className='mx-20 grid grid-cols-4 gap-60'>
                    <img src={logo} alt="" className='w-52 mt-44' />
                    {/* pages */}
                    <div className='text-white mt-44'>
                        <h2 className='text-xl font-bold mb-8'>Pages</h2>
                        <ul>
                            <Link to='/'><li className='mb-4'>Home</li></Link>
                            <Link><li className='mb-4'>Podcast</li></Link>
                            <Link><li className='mb-4'>Host</li></Link>
                            <Link><li className='mb-4'>Blog</li></Link>
                        </ul>
                    </div>
                    {/* Reach Us */}
                    <div className='text-white mt-44'>
                        <h2 className='text-xl font-bold mb-8'>Reach Us</h2>
                        <ul>
                            <Link><li className='mb-4'>Contact</li></Link>
                            <Link to='/about'><li className='mb-4'>About</li></Link>
                        </ul>
                    </div>

                    {/* Subscription Section */}
                    <div className='text-white mt-44'>
                        <h2 className='text-xl font-bold mb-8'>Subscribe</h2>
                        <ul>
                            <Link><li className='mb-8'><img src={img1} alt="" /></li></Link>
                            <Link><li className='mb-8'><img src={img2} alt="" /></li></Link>
                            <Link><li className='mb-8'><img src={img3} alt="" /></li></Link>
                            <Link><li className='mb-24'><img src={img4} alt="" /></li></Link>
                        </ul>
                    </div>
                </div>

            </div>
            <footer className='bg-blue h-16 flex justify-center items-center'>
                <h1 className='font-bold text-white'>© Copyright Finsweet 2021</h1>
            </footer>
        </div>
    );
};

export default Footer;
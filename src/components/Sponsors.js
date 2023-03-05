import React from 'react';
import logo1 from '../images/Logo.png'
import logo2 from '../images/Logo (4).png'
import logo3 from '../images/Logo (3).png'
import logo4 from '../images/Logo (2).png'
import logo5 from '../images/Logo (1).png'
const Sponsors = () => {
    return (
        <div className=''>
            <div className='left-20 right-20 bg-blue text-white h-72 flex flex-col justify-start items-center absolute top-[-200px]'>
                <h1 className='text-[32px] font-bold mt-[72px] mb-16'>Our Sponsors</h1>
                <div className='flex justify-around items-center w-full'>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                </div>
            </div>
        </div>

    );
};

export default Sponsors;
import React from 'react';
import micIcon from '../../images/Episode Photos/Episode Icon.png'
import img1 from '../../images/Episode Photos/photo-of-people-sitting-beside-table-3182755.jpg'
import img2 from '../../images/Episode Photos/man-holding-phone.png'
import img3 from '../../images/Episode Photos/photo-of-women-having-conversation-3194524.png'
import icon from '../../images/Episode Photos/Triangle.png'

const EpisodeCards = () => {
    return (
        <div className='grid grid-cols-3 gap-4 text-black mb-[121px]'>
            {/* Episode Cards */}
            {/* Card 1 */}
            <div>
                <div className='relative'>
                    <img src={img1} alt="meeting-people" className='w-full' />
                    <img src={micIcon} alt="icon" className='absolute top-4 right-4' />
                </div>
                <h1 className='font-semibold text-2xl mt-8 mb-4'>Ep 1: How to build a world-class business brand</h1>
                <p className='w-11/12 mb-4'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                {/* circle button */}
                <button className='flex items-center hover'>
                    <span className='bg-blue h-8 w-8 rounded-full flex justify-center items-center hover:bg-dark-blue'><img src={icon} alt="listen-icon" className='inline-flex items-center' /></span>
                    <p className='text-blue font-semibold ml-2 hover:text-dark-blue'>Listen Now</p>
                </button>
            </div>
            {/* Card 2 */}

            <div>
                <div className='relative'>
                    <img src={img2} alt="mobile on hand" className='w-full' />
                    <img src={micIcon} alt="" className='absolute top-4 right-4' />
                </div>
                <h1 className='font-semibold text-2xl mt-8 mb-4 pr-10 '>Ep 2: Getting the first 100 customers for your business</h1>
                <p className='w-11/12 mb-4'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                {/* circle button */}
                <button className='flex items-center hover'>
                    <span className='bg-blue h-8 w-8 rounded-full flex justify-center items-center hover:bg-dark-blue'><img src={icon} alt="" className='inline-flex items-center' /></span>
                    <p className='text-blue font-semibold ml-2 hover:text-dark-blue'>Listen Now</p>
                </button>
            </div>
            {/* Card 3 */}

            <div>
                <div className='relative'>
                    <img src={img3} alt="talking" className='w-full' />
                    <img src={micIcon} alt="" className='absolute top-4 right-4' />
                </div>
                <h1 className='font-semibold text-2xl mt-8 mb-4'>Ep 3: Should I raise money for my startup, or not?</h1>
                <p className='w-11/12 mb-4'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                {/* circle button */}
                <button className='flex items-center hover'>
                    <span className='bg-blue h-8 w-8 rounded-full flex justify-center items-center hover:bg-dark-blue'><img src={icon} alt="" className='inline-flex items-center' /></span>
                    <p className='text-blue font-semibold ml-2 hover:text-dark-blue'>Listen Now</p>
                </button>
            </div>
        </div>
    );
};

export default EpisodeCards;
import React from 'react';
import shape from '../../images/Shapes.png'
import img1 from '../../images/Articles Photos/bitcoins-and-u-s-dollar-bills-730547.png'
import img2 from '../../images/Articles Photos/top-view-of-assorted-gadgets-on-desk-3568520.png'

const Articles = () => {
    return (
        <div className='grid grid-cols-3 gap-4 text-black mb-32'>
            <div className=' bg-off-white relative'>
                <div className='p-10'>
                    <h1 className='text-[32px] font-bold w-80 mb-4 leading-9'>Read our articles & news</h1>
                    <button href="" className='font-semibold text-blue hover:text-dark-blue'>See More</button>
                </div>
                <img src={shape} alt="shape" className='w-full absolute bottom-0' />
            </div>
            <div>
                <img src={img1} alt="bitcoin" className='w-full mb-8' />
                <h1 className='text-2xl font-semibold mb-4'>Getting the first 100 customers for your business</h1>
                <p className='w-11/12 mb-4'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                <button href="" className='font-semibold text-blue hover:text-dark-blue'>Read Now</button>
            </div>
            <div>
                <img src={img2} alt="gadgets-table" className='w-full mb-8' />
                <h1 className='text-2xl font-semibold mb-4'>Apparently we had reached a great height in the atmosphere, ...</h1>
                <p className='w-11/12 mb-4'>Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
                <button href="" className='font-semibold text-blue hover:text-dark-blue'>Read Now</button>
            </div>
        </div>
    );
};

export default Articles;
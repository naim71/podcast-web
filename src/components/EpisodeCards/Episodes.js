import React from 'react';
import EpisodeCards from './EpisodeCards';

const Episodes = () => {
    return (
        <div className='mt-[139px] text-black'>
            <div>
                <h2 className='font-bold text-[32px]'>Recent Episodes</h2>
                <div className='flex justify-between'>
                    <p className='w-2/6'>Apaprently we had reached a great height in the atmosphere, for the sky was a dead black.</p>
                    <button className='bg-blue px-8 h-12 text-white hover:bg-dark-blue'>See All Episodes</button>
                </div>
            </div>
            <div className='mt-16'>
                <EpisodeCards></EpisodeCards>
            </div>
        </div>
    );
};

export default Episodes;
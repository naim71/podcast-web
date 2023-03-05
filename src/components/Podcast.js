import React from 'react';
import apple from '../images/Apple Podcast.png'
import soundcloud from '../images/Soundcloud.png'
import googlepod from '../images/Google Podcast.png'
import spotify from '../images/Spotify.png'
const Podcast = () => {
    return (
        <div className='flex justify-between items-center mt-[152px] text-black'>
            <p className='text-2xl font-semibold tracking-tighter'>Podcast Available On</p>
            <div className='flex justify-between items-center ml-[100px] w-9/12'>
                <img src={apple} alt="apple podcast logo" />
                <img src={soundcloud} alt="soundcloud logo" />
                <img src={googlepod} alt="google podcast logo" />
                <img src={spotify} alt="spotify logo" />
            </div>
        </div>
    );
};

export default Podcast;
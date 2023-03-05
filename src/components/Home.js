import React from 'react';
import Articles from './ArticlesSection/Articles';
import Episodes from './EpisodeCards/Episodes';
import Hero from './Hero';
import Podcast from './Podcast';

const Home = () => {
    return (
        <div>
            <section className='mx-20'>
                <Hero></Hero>
                <Podcast></Podcast>
                <Episodes></Episodes>
                <Articles></Articles>
            </section>
        </div>
    );
};

export default Home;
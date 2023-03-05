import './App.css';
import Hero from './components/Hero';
import Podcast from './components/Podcast';
import Episodes from './components/EpisodeCards/Episodes';
import Articles from './components/ArticlesSection/Articles';
import Sponsors from './components/Sponsors';
import FooterNav from './components/Footer/Footer';
import Footer from './components/Footer/Footer';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import Main from './layout/Main';
import About from './components/About';
import { router } from './Router/Router';

function App() {
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
      {/* <section className='mx-20'>
        <Hero></Hero>
        <Podcast></Podcast>
        <Episodes></Episodes>
        <Articles></Articles>
      </section> */}
    </div>
  );
}

export default App;

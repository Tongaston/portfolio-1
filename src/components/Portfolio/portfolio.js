import React from 'react';
import './portfolio.css';

import imgFastWeather from '../../assets/fast-weather-app.png';
import imgSnakeGame from '../../assets/snake-game.png';
import imgAseoClean from '../../assets/aseoclean-page.png';
import imgAhorcadoPixel from '../../assets/ahorcado-game.png';
import imgMovieFinder from '../../assets/movie-finder-app.png';
import imgToDoList from '../../assets/to-do-list.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2 className='portfolioTitle'>My Portfolio</h2>
      <p className='portfolioDesc'>
        My portfolio as a web developer reflects my skills in creating engaging
        and functional digital experiences.
      </p>
      <p className='portfolioDesc'>
        With a user-centric approach, I designed and developed intuitive and
        aesthetically appealing websites that not only meet the technical
        requirements but also offer smooth navigation and a pleasant interface.
      </p>
      <div className='imgContainer'>
        <a
          href='https://fast-weather-app.vercel.app/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={imgFastWeather}
            alt='fast weather app capture'
            className='workImg'
          />
        </a>

        <a
          href='https://snake-game-neon-three.vercel.app/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={imgSnakeGame}
            alt='snake game capture'
            className='workImg'
          />
        </a>

        <a href='https://www.aseoclean.es/' target='_blank' rel='noreferrer'>
          <img
            src={imgAseoClean}
            alt='aseoclean.es capture'
            className='workImg'
          />
        </a>

        <a
          href='https://ahorcado-pixel.vercel.app/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={imgAhorcadoPixel}
            alt='ahocado pixel capture'
            className='workImg'
          />
        </a>

        <a
          href='https://movie-finder-brown.vercel.app/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={imgMovieFinder}
            alt='movie finder app capture'
            className='workImg'
          />
        </a>

        <a
          href='https://practicas-java-script.vercel.app/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={imgToDoList}
            alt='to do list app capture'
            className='workImg cards' 
          />
        </a>
      </div>
      <button className='portfolioBtn'>See More</button>
    </section>
  );
};

export default Portfolio;

import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';

import fotoGaston from '../../assets/image-1.png';
import iconHire from '../../assets/briefcase.svg';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <h3 className='hello'>Hello,</h3>
        <h1 className='introText'>
          I'm <span className='introName'>Gastón</span> <br /> Web Developer
        </h1>
        <p className='introPara'>
          I'm a new web developer, I specialize in developing <br />responsive and
          search engine friendly websites.
        </p>
        <Link>
          <button className='introBtn'>
            <img className='introBtnIcon' src={iconHire} alt='briefcase icon' />
            Hire Me
          </button>
        </Link>
      </div>
      <img className='avatar' src={fotoGaston} alt='Caracter of Gastón' />
    </section>
  );
};

export default Intro;

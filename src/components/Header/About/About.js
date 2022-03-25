import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return (
    <div className='about'>
      <p className='about-content'>Hi, I'm Grimc0de and I've created this MIDI keyboard with React.</p>
      <p className='about-content'>Find more about my work @</p>
      <div className='about-icons about-content'>
        <a target='_blank' href='https://github.com/Gr1mc0de'><FontAwesomeIcon icon={faGithubSquare}/></a>
        <a target='_blank' href='https://instagram.com/grimc0de'><FontAwesomeIcon icon={faInstagramSquare}/></a>
      </div>
    </div>
  );
}

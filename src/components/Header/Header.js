import React from 'react';
import About from './About/About.js';

export default function Header(props) {

    return (
        <header>
            <a href='' className='main-heading'><h1 className='green-onions'>GREEN<img className='onion-header' src={props.Onion} alt=''/>NIONS</h1></a>
            <a href='' className='mobile-heading'><img className='onion-header' src={props.Onion} alt=''/></a>
            <h3 onClick={props.displayAbout}>About</h3>
            <About/>
        </header>
    );
}

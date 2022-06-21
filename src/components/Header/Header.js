import React from 'react';
import About from './About/About';

export default function Header(props) {

    const displayAbout = () => {
        document.querySelector('h3').classList.toggle('about-focus');
        document.querySelector('.about').classList.toggle('about-display');
        const aboutContent = document.getElementsByClassName('about-content');
        for (var i = 0; i < aboutContent.length; i++) {
            aboutContent[i].classList.toggle('about-content-display');
        }
    }

    return (
        <header>
            <a href='' className='main-heading'><h1 className='green-onions'>GREEN<img className='onion-header' src={props.Onion} alt=''/>NIONS</h1></a>
            <a href='' className='mobile-heading'><img className='onion-header' src={props.Onion} alt=''/></a>
            <h3 onClick={displayAbout}>About</h3>
            <About/>
        </header>
    );
}

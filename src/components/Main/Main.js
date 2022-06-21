import React from 'react';
import Keyboard from './Keyboard/Keyboard';
import Instructions from './Instructions/Instructions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRotateLeft} from '@fortawesome/free-solid-svg-icons';

export default function Main(props) {

    return (
        <main>
            <Keyboard Onion={props.Onion}/>
            <div className='turn-screen'>
                <p>Turn your screen to play the keyboard</p>
                <FontAwesomeIcon className='arrow' icon={faArrowRotateLeft}/>
            </div>
            <Instructions Onion={props.Onion}/>
        </main>
    );
}

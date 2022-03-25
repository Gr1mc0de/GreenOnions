import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';

export default function Instructions(props) {
    return (
        <div className="instructions" onClick={props.displayInstructions}>
            <h1>Instructions</h1>
            <ul>
                <li>Click the - <FontAwesomeIcon icon={faPowerOff} /> - button to turn the keyboard on/off.</li>
                <li>Use - <strong>A S D F G H J K</strong> - to play the green keys.</li>
                <li>Use - <strong>W E T Y U</strong> - to play the black keys.</li>
                <li>Click the - <img className='onion-instructions' src={props.Onion} alt='' /> - buttons to change instruments.</li>
                <li className='tablet-phone-instructions'><strong>'Green<img className='onion-instructions' src={props.Onion} alt='' />nions'</strong> was mainly built for computer,
                <br/>but you can still enjoy it on your tablet/phone.
                <br/> Just use your fingers to play.</li>
                <li>Have fun!</li>
            </ul>
            <div className='player'>
                <img className='onion-head' src={props.Onion} alt='' />
                <img className='keyboard-player' src={props.KeyboardPlayer} alt='' />
                <div className='hands'>
                    <img className='hand-left' src={props.Hand} alt='' />
                    <img className='hand-right' src={props.Hand} alt='' />
                </div>
            </div>
        </div>
    );
}

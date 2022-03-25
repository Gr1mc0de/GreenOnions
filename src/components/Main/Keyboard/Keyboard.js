import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';

export default function Keyboard(props) {

    return (
        <div className='keyboard'>
            <div className='green'>
                <button id='keyC' className='green-key' onClick={() => props.playKey(0)} onTouchStart={() => props.playKey(0)}></button>
                <button id='keyD' className='green-key' onClick={() => props.playKey(2)} onTouchStart={() => props.playKey(2)}></button>
                <button id='keyE' className='green-key' onClick={() => props.playKey(4)} onTouchStart={() => props.playKey(4)}></button>
                <button id='keyF' className='green-key' onClick={() => props.playKey(5)} onTouchStart={() => props.playKey(5)}></button>
                <button id='keyG' className='green-key' onClick={() => props.playKey(7)} onTouchStart={() => props.playKey(7)}></button>
                <button id='keyA' className='green-key' onClick={() => props.playKey(9)} onTouchStart={() => props.playKey(9)}></button>
                <button id='keyB' className='green-key' onClick={() => props.playKey(11)} onTouchStart={() => props.playKey(11)}></button>
                <button id='keyCHigh' className='green-key' onClick={() => props.playKey(12)} onTouchStart={() => props.playKey(12)}></button>
            </div>
            <div className='black'>
                <div className='two'>
                    <button id='keyCSharp' className='black-key' onClick={() => props.playKey(1)} onTouchStart={() => props.playKey(1)}></button>
                    <button id='keyDSharp' className='black-key' onClick={() => props.playKey(3)} onTouchStart={() => props.playKey(3)}></button>
                </div>
                <div className='three'>
                    <button id='keyFSharp' className='black-key' onClick={() => props.playKey(6)} onTouchStart={() => props.playKey(6)}></button>
                    <button id='keyGSharp' className='black-key' onClick={() => props.playKey(8)} onTouchStart={() => props.playKey(8)}></button>
                    <button id='keyASharp' className='black-key' onClick={() => props.playKey(10)} onTouchStart={() => props.playKey(10)}></button>
                </div>
            </div>
            <div className='buttons'>
                <div>
                    <button className='sound-button' onClick={() => props.changeSound(1)}><img className='onion-button' src={props.Onion} alt='' /> <img className='strong-btn' src={props.PianoIcon} alt='' /></button>
                    <button className='sound-button' onClick={() => props.changeSound(2)} ><img className='onion-button' src={props.Onion} alt='' /> <img className='strong-btn' src={props.BassIcon} alt='' /></button>
                    <button className='sound-button' onClick={() => props.changeSound(3)}><img className='onion-button' src={props.Onion} alt='' /> <img className='strong-btn' src={props.GuitarIcon} alt='' /></button>
                    <button className='sound-button' onClick={() => props.changeSound(4)}><img className='onion-button' src={props.Onion} alt='' /> <img className='strong-btn' src={props.StringsIcon} alt='' /></button>
                    <button className='sound-button' onClick={() => props.changeSound(5)}><img className='onion-button' src={props.Onion} alt='' /> <img className='strong-btn' src={props.DrumsIcon} alt='' /></button>
                </div>
                <button className='power' onClick={props.powerOnOff}><FontAwesomeIcon icon={faPowerOff}/></button>
            </div>
        </div>
    ); 
}

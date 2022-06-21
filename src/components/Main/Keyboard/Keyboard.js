import React, {useState, useEffect} from 'react';
import Sound1C from './audio/sound1/sound1C.wav';
import Sound1CSharp from './audio/sound1/sound1CSharp.wav';
import Sound1D from './audio/sound1/sound1D.wav';
import Sound1DSharp from './audio/sound1/sound1DSharp.wav';
import Sound1E from './audio/sound1/sound1E.wav';
import Sound1F from './audio/sound1/sound1F.wav';
import Sound1FSharp from './audio/sound1/sound1FSharp.wav';
import Sound1G from './audio/sound1/sound1G.wav';
import Sound1GSharp from './audio/sound1/sound1GSharp.wav';
import Sound1A from './audio/sound1/sound1A.wav';
import Sound1ASharp from './audio/sound1/sound1ASharp.wav';
import Sound1B from './audio/sound1/sound1B.wav';
import Sound1CHigh from './audio/sound1/sound1CHigh.wav';
import Sound2C from './audio/sound2/sound2C.wav';
import Sound2CSharp from './audio/sound2/sound2CSharp.wav';
import Sound2D from './audio/sound2/sound2D.wav';
import Sound2DSharp from './audio/sound2/sound2DSharp.wav';
import Sound2E from './audio/sound2/sound2E.wav';
import Sound2F from './audio/sound2/sound2F.wav';
import Sound2FSharp from './audio/sound2/sound2FSharp.wav';
import Sound2G from './audio/sound2/sound2G.wav';
import Sound2GSharp from './audio/sound2/sound2GSharp.wav';
import Sound2A from './audio/sound2/sound2A.wav';
import Sound2ASharp from './audio/sound2/sound2ASharp.wav';
import Sound2B from './audio/sound2/sound2B.wav';
import Sound2CHigh from './audio/sound2/sound2CHigh.wav';
import Sound3C from './audio/sound3/sound3C.wav';
import Sound3CSharp from './audio/sound3/sound3CSharp.wav';
import Sound3D from './audio/sound3/sound3D.wav';
import Sound3DSharp from './audio/sound3/sound3DSharp.wav';
import Sound3E from './audio/sound3/sound3E.wav';
import Sound3F from './audio/sound3/sound3F.wav';
import Sound3FSharp from './audio/sound3/sound3FSharp.wav';
import Sound3G from './audio/sound3/sound3G.wav';
import Sound3GSharp from './audio/sound3/sound3GSharp.wav';
import Sound3A from './audio/sound3/sound3A.wav';
import Sound3ASharp from './audio/sound3/sound3ASharp.wav';
import Sound3B from './audio/sound3/sound3B.wav';
import Sound3CHigh from './audio/sound3/sound3CHigh.wav';
import Sound4C from './audio/sound4/sound4C.wav';
import Sound4CSharp from './audio/sound4/sound4CSharp.wav';
import Sound4D from './audio/sound4/sound4D.wav';
import Sound4DSharp from './audio/sound4/sound4DSharp.wav';
import Sound4E from './audio/sound4/sound4E.wav';
import Sound4F from './audio/sound4/sound4F.wav';
import Sound4FSharp from './audio/sound4/sound4FSharp.wav';
import Sound4G from './audio/sound4/sound4G.wav';
import Sound4GSharp from './audio/sound4/sound4GSharp.wav';
import Sound4A from './audio/sound4/sound4A.wav';
import Sound4ASharp from './audio/sound4/sound4ASharp.wav';
import Sound4B from './audio/sound4/sound4B.wav';
import Sound4CHigh from './audio/sound4/sound4CHigh.wav';
import Sound5C from './audio/sound5/sound5C.wav';
import Sound5CSharp from './audio/sound5/sound5CSharp.wav';
import Sound5D from './audio/sound5/sound5D.wav';
import Sound5DSharp from './audio/sound5/sound5DSharp.wav';
import Sound5E from './audio/sound5/sound5E.wav';
import Sound5F from './audio/sound5/sound5F.wav';
import Sound5FSharp from './audio/sound5/sound5FSharp.wav';
import Sound5G from './audio/sound5/sound5G.wav';
import Sound5GSharp from './audio/sound5/sound5GSharp.wav';
import Sound5A from './audio/sound5/sound5A.wav';
import Sound5ASharp from './audio/sound5/sound5ASharp.wav';
import Sound5B from './audio/sound5/sound5B.wav';
import Sound5CHigh from './audio/sound5/sound5CHigh.wav';
import PianoIcon from '../../../i/piano-icon.png';
import BassIcon from '../../../i/bass-icon.png';
import GuitarIcon from '../../../i/guitar-icon.png';
import StringsIcon from '../../../i/strings-icon.png';
import DrumsIcon from '../../../i/drums-icon.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';

export default function Keyboard(props) {

    const [soundC, setSoundC] = useState('');
    const [soundCSharp, setSoundCSharp] = useState('');
    const [soundD, setSoundD] = useState('');
    const [soundDSharp, setSoundDSharp] = useState('');
    const [soundE, setSoundE] = useState('');
    const [soundF, setSoundF] = useState('');
    const [soundFSharp, setSoundFSharp] = useState('');
    const [soundG, setSoundG] = useState('');
    const [soundGSharp, setSoundGSharp] = useState('');
    const [soundA, setSoundA] = useState('');
    const [soundASharp, setSoundASharp] = useState('');
    const [soundB, setSoundB] = useState('');
    const [soundCHigh, setSoundCHigh] = useState('');
    const [keyC, setKeyC] = useState('');
    const [keyCSharp, setKeyCSharp]= useState('');
    const [keyD, setKeyD] = useState('');
    const [keyDSharp, setKeyDSharp] = useState('');
    const [keyE, setKeyE] = useState('');
    const [keyF, setKeyF] = useState('');
    const [keyFSharp, setKeyFSharp] = useState('');
    const [keyG, setKeyG] = useState('');
    const [keyGSharp, setKeyGSharp] = useState('');
    const [keyA, setKeyA] = useState('');
    const [keyASharp, setKeyASharp] = useState('');
    const [keyB, setKeyB] = useState('');
    const [keyCHigh, setKeyCHigh] = useState('');

    useEffect(() => {
        setSoundC(document.getElementById(''));
        setSoundCSharp(document.getElementById(''));
        setSoundD(document.getElementById(''));
        setSoundDSharp(document.getElementById(''));
        setSoundE(document.getElementById(''));
        setSoundF(document.getElementById(''));
        setSoundFSharp(document.getElementById(''));
        setSoundG(document.getElementById(''));
        setSoundGSharp(document.getElementById(''));
        setSoundA(document.getElementById(''));
        setSoundASharp(document.getElementById(''));
        setSoundB(document.getElementById(''));
        setSoundCHigh(document.getElementById(''));
        setKeyC(document.getElementById('keyC'));
        setKeyCSharp(document.getElementById('keyCSharp'));
        setKeyD(document.getElementById('keyD'));
        setKeyDSharp(document.getElementById('keyDSharp'));
        setKeyE(document.getElementById('keyE'));
        setKeyF(document.getElementById('keyF'));
        setKeyFSharp(document.getElementById('keyFSharp'));
        setKeyG(document.getElementById('keyG'));
        setKeyGSharp(document.getElementById('keyGSharp'));
        setKeyA(document.getElementById('keyA'));
        setKeyASharp(document.getElementById('keyASharp'));
        setKeyB(document.getElementById('keyB'));
        setKeyCHigh(document.getElementById('keyCHigh'));
    }, []);

    const powerOnOff = () => {
        const greenKeys = document.getElementsByClassName('green-key');
        for (var i = 0; i < greenKeys.length; i++) {
            greenKeys[i].classList.toggle('green-key-on');
        }
        const soundButtons = document.getElementsByClassName('sound-button');
        for (var i = 0; i < soundButtons.length; i++) {
            soundButtons[i].classList.toggle('onion-button-on');
        }
        if (soundC === document.getElementById('') || soundC === document.getElementById('sound1C')) {
            soundButtons[0].classList.toggle('instrument-selectah');
        } else if (soundC === document.getElementById('sound2C')) {
            soundButtons[1].classList.toggle('instrument-selectah');
        } else if (soundC === document.getElementById('sound3C')) {
            soundButtons[2].classList.toggle('instrument-selectah');
        } else if (soundC === document.getElementById('sound4C')) {
            soundButtons[3].classList.toggle('instrument-selectah');
        } else {
            soundButtons[4].classList.toggle('instrument-selectah');
        }
        const strongBtn = document.getElementsByClassName('strong-btn');
        for (var i = 0; i < strongBtn.length; i++) {
            strongBtn[i].classList.toggle('strong-btn-on');
        }
        const onionBtn = document.getElementsByClassName('onion-button');
        for (var i = 0; i < onionBtn.length; i++) {
            onionBtn[i].classList.toggle('strong-btn-on');
        }
        document.querySelector('.power').classList.toggle('power-on');
        if (soundC === document.getElementById('')) {
            setSoundC(document.getElementById('sound1C'));
            setSoundCSharp(document.getElementById('sound1CSharp'));
            setSoundD(document.getElementById('sound1D'));
            setSoundDSharp(document.getElementById('sound1DSharp'));
            setSoundE(document.getElementById('sound1E'));
            setSoundF(document.getElementById('sound1F'));
            setSoundFSharp(document.getElementById('sound1FSharp'));
            setSoundG(document.getElementById('sound1G'));
            setSoundGSharp(document.getElementById('sound1GSharp'));
            setSoundA(document.getElementById('sound1A'));
            setSoundASharp(document.getElementById('sound1ASharp'));
            setSoundB(document.getElementById('sound1B'));
            setSoundCHigh(document.getElementById('sound1CHigh'));
        } else {
            setSoundC(document.getElementById(''));
            setSoundCSharp(document.getElementById(''));
            setSoundD(document.getElementById(''));
            setSoundDSharp(document.getElementById(''));
            setSoundE(document.getElementById(''));
            setSoundF(document.getElementById(''));
            setSoundFSharp(document.getElementById(''));
            setSoundG(document.getElementById(''));
            setSoundGSharp(document.getElementById(''));
            setSoundA(document.getElementById(''));
            setSoundASharp(document.getElementById(''));
            setSoundB(document.getElementById(''));
            setSoundCHigh(document.getElementById(''));
        }
    }

    const playKey = (tone) => {
        const keys = [keyC, keyCSharp, keyD, keyDSharp, keyE, keyF, keyFSharp, keyG, keyGSharp, keyA, keyASharp, keyB, keyCHigh];
        if (soundC === document.getElementById('')) {
            keys[tone].classList.add('keypress-off');
            setTimeout(function(){keys[tone].classList.remove('keypress-off')}, 400);
        } else {
            keys[tone].classList.add('keypress-on');
            setTimeout(function(){keys[tone].classList.remove('keypress-on')}, 400);
        }
        const sounds = [soundC, soundCSharp, soundD, soundDSharp, soundE, soundF, soundFSharp, soundG, soundGSharp, soundA, soundASharp, soundB, soundCHigh];
        const newSound = sounds[tone].cloneNode();
        newSound.sampleRate = 48000;
        newSound.volume = 0.2;
        newSound.play();
        while (newSound.playing) {
            for (var i = 0; i <= Math.ceil(newSound.duration); i + 0.02) {
                newSound.volume = newSound.volume - 0.01;
            }
        }
    };

    const changeSound = (sound) => {
        if (soundC === document.getElementById('')) {
            setSoundC(document.getElementById(''));
            setSoundCSharp(document.getElementById(''));
            setSoundD(document.getElementById(''));
            setSoundDSharp(document.getElementById(''));
            setSoundE(document.getElementById(''));
            setSoundF(document.getElementById(''));
            setSoundFSharp(document.getElementById(''));
            setSoundG(document.getElementById(''));
            setSoundGSharp(document.getElementById(''));
            setSoundA(document.getElementById(''));
            setSoundASharp(document.getElementById(''));
            setSoundB(document.getElementById(''));
            setSoundCHigh(document.getElementById(''));
        } else if (soundC === document.getElementById(`sound${sound}C`)) {
            
        } else {
            const soundButtons = document.getElementsByClassName('sound-button');
            if (sound === 1) {
                if (soundC === document.getElementById('sound2C')) {
                    soundButtons[0].classList.toggle('instrument-selectah');
                    soundButtons[1].classList.toggle('instrument-selectah');
                } else if (soundC === document.getElementById('sound3C')) {
                    soundButtons[0].classList.toggle('instrument-selectah');
                    soundButtons[2].classList.toggle('instrument-selectah');
                } else if (soundC === document.getElementById('sound4C')) {
                    soundButtons[0].classList.toggle('instrument-selectah');
                    soundButtons[3].classList.toggle('instrument-selectah');
                } else {
                    soundButtons[0].classList.toggle('instrument-selectah');
                    soundButtons[4].classList.toggle('instrument-selectah');
                }
            } else if (sound === 2) {
                if (soundC === document.getElementById('sound1C')) {
                    soundButtons[1].classList.toggle('instrument-selectah');
                    soundButtons[0].classList.toggle('instrument-selectah');
                } else if (soundC === document.getElementById('sound3C')) {
                    soundButtons[1].classList.toggle('instrument-selectah');
                    soundButtons[2].classList.toggle('instrument-selectah');
                } else if (soundC === document.getElementById('sound4C')) {
                    soundButtons[1].classList.toggle('instrument-selectah');
                    soundButtons[3].classList.toggle('instrument-selectah');
                } else {
                    soundButtons[1].classList.toggle('instrument-selectah');
                    soundButtons[4].classList.toggle('instrument-selectah');
                }
            } else if (sound === 3) {
                if (soundC === document.getElementById('sound1C')) {
                    soundButtons[2].classList.toggle('instrument-selectah');
                    soundButtons[0].classList.toggle('instrument-selectah');
                } else if (soundC === document.getElementById('sound2C')) {
                    soundButtons[2].classList.toggle('instrument-selectah');
                    soundButtons[1].classList.toggle('instrument-selectah');
                } else if (soundC === document.getElementById('sound4C')) {
                    soundButtons[2].classList.toggle('instrument-selectah');
                    soundButtons[3].classList.toggle('instrument-selectah');
                } else {
                    soundButtons[2].classList.toggle('instrument-selectah');
                    soundButtons[4].classList.toggle('instrument-selectah');
                }
            } else if (sound === 4) {
                if (soundC === document.getElementById('sound1C')) {
                    soundButtons[3].classList.toggle('instrument-selectah');
                    soundButtons[0].classList.toggle('instrument-selectah');
                } else if (soundC === document.getElementById('sound2C')) {
                    soundButtons[3].classList.toggle('instrument-selectah');
                    soundButtons[1].classList.toggle('instrument-selectah');
                } else if (soundC === document.getElementById('sound3C')) {
                    soundButtons[3].classList.toggle('instrument-selectah');
                    soundButtons[2].classList.toggle('instrument-selectah');
                } else {
                    soundButtons[3].classList.toggle('instrument-selectah');
                    soundButtons[4].classList.toggle('instrument-selectah');
                }
            } else if (sound === 5) {
                if (soundC === document.getElementById('sound1C')) {
                    soundButtons[4].classList.toggle('instrument-selectah');
                    soundButtons[0].classList.toggle('instrument-selectah');
                } else if (soundC === document.getElementById('sound2C')) {
                    soundButtons[4].classList.toggle('instrument-selectah');
                    soundButtons[1].classList.toggle('instrument-selectah');
                } else if (soundC === document.getElementById('sound3C')) {
                    soundButtons[4].classList.toggle('instrument-selectah');
                    soundButtons[2].classList.toggle('instrument-selectah');
                } else {
                    soundButtons[4].classList.toggle('instrument-selectah');
                    soundButtons[3].classList.toggle('instrument-selectah');
                }
            }
            setSoundC(document.getElementById(`sound${sound}C`));
            setSoundCSharp(document.getElementById(`sound${sound}CSharp`));
            setSoundD(document.getElementById(`sound${sound}D`));
            setSoundDSharp(document.getElementById(`sound${sound}DSharp`));
            setSoundE(document.getElementById(`sound${sound}E`));
            setSoundF(document.getElementById(`sound${sound}F`));
            setSoundFSharp(document.getElementById(`sound${sound}FSharp`));
            setSoundG(document.getElementById(`sound${sound}G`));
            setSoundGSharp(document.getElementById(`sound${sound}GSharp`));
            setSoundA(document.getElementById(`sound${sound}A`));
            setSoundASharp(document.getElementById(`sound${sound}ASharp`));
            setSoundB(document.getElementById(`sound${sound}B`));
            setSoundCHigh(document.getElementById(`sound${sound}CHigh`));
        }
    }

    return (
        <div className='keyboard'>
            <audio id='sound1C' src={Sound1C}></audio>
            <audio id='sound1CSharp' src={Sound1CSharp}></audio>
            <audio id='sound1D' src={Sound1D}></audio>
            <audio id='sound1DSharp' src={Sound1DSharp}></audio>
            <audio id='sound1E' src={Sound1E}></audio>
            <audio id='sound1F' src={Sound1F}></audio>
            <audio id='sound1FSharp' src={Sound1FSharp}></audio>
            <audio id='sound1G' src={Sound1G}></audio>
            <audio id='sound1GSharp' src={Sound1GSharp}></audio>
            <audio id='sound1A' src={Sound1A}></audio>
            <audio id='sound1ASharp' src={Sound1ASharp}></audio>
            <audio id='sound1B' src={Sound1B}></audio>
            <audio id='sound1CHigh' src={Sound1CHigh}></audio>
            <audio id='sound2C' src={Sound2C}></audio>
            <audio id='sound2CSharp' src={Sound2CSharp}></audio>
            <audio id='sound2D' src={Sound2D}></audio>
            <audio id='sound2DSharp' src={Sound2DSharp}></audio>
            <audio id='sound2E' src={Sound2E}></audio>
            <audio id='sound2F' src={Sound2F}></audio>
            <audio id='sound2FSharp' src={Sound2FSharp}></audio>
            <audio id='sound2G' src={Sound2G}></audio>
            <audio id='sound2GSharp' src={Sound2GSharp}></audio>
            <audio id='sound2A' src={Sound2A}></audio>
            <audio id='sound2ASharp' src={Sound2ASharp}></audio>
            <audio id='sound2B' src={Sound2B}></audio>
            <audio id='sound2CHigh' src={Sound2CHigh}></audio>
            <audio id='sound3C' src={Sound3C}></audio>
            <audio id='sound3CSharp' src={Sound3CSharp}></audio>
            <audio id='sound3D' src={Sound3D}></audio>
            <audio id='sound3DSharp' src={Sound3DSharp}></audio>
            <audio id='sound3E' src={Sound3E}></audio>
            <audio id='sound3F' src={Sound3F}></audio>
            <audio id='sound3FSharp' src={Sound3FSharp}></audio>
            <audio id='sound3G' src={Sound3G}></audio>
            <audio id='sound3GSharp' src={Sound3GSharp}></audio>
            <audio id='sound3A' src={Sound3A}></audio>
            <audio id='sound3ASharp' src={Sound3ASharp}></audio>
            <audio id='sound3B' src={Sound3B}></audio>
            <audio id='sound3CHigh' src={Sound3CHigh}></audio>
            <audio id='sound4C' src={Sound4C}></audio>
            <audio id='sound4CSharp' src={Sound4CSharp}></audio>
            <audio id='sound4D' src={Sound4D}></audio>
            <audio id='sound4DSharp' src={Sound4DSharp}></audio>
            <audio id='sound4E' src={Sound4E}></audio>
            <audio id='sound4F' src={Sound4F}></audio>
            <audio id='sound4FSharp' src={Sound4FSharp}></audio>
            <audio id='sound4G' src={Sound4G}></audio>
            <audio id='sound4GSharp' src={Sound4GSharp}></audio>
            <audio id='sound4A' src={Sound4A}></audio>
            <audio id='sound4ASharp' src={Sound4ASharp}></audio>
            <audio id='sound4B' src={Sound4B}></audio>
            <audio id='sound4CHigh' src={Sound4CHigh}></audio>
            <audio id='sound5C' src={Sound5C}></audio>
            <audio id='sound5CSharp' src={Sound5CSharp}></audio>
            <audio id='sound5D' src={Sound5D}></audio>
            <audio id='sound5DSharp' src={Sound5DSharp}></audio>
            <audio id='sound5E' src={Sound5E}></audio>
            <audio id='sound5F' src={Sound5F}></audio>
            <audio id='sound5FSharp' src={Sound5FSharp}></audio>
            <audio id='sound5G' src={Sound5G}></audio>
            <audio id='sound5GSharp' src={Sound5GSharp}></audio>
            <audio id='sound5A' src={Sound5A}></audio>
            <audio id='sound5ASharp' src={Sound5ASharp}></audio>
            <audio id='sound5B' src={Sound5B}></audio>
            <audio id='sound5CHigh' src={Sound5CHigh}></audio>
            <div className='green'>
                <button id='keyC' className='green-key' onClick={() => playKey(0)} onTouchStart={() => playKey(0)}></button>
                <button id='keyD' className='green-key' onClick={() => playKey(2)} onTouchStart={() => playKey(2)}></button>
                <button id='keyE' className='green-key' onClick={() => playKey(4)} onTouchStart={() => playKey(4)}></button>
                <button id='keyF' className='green-key' onClick={() => playKey(5)} onTouchStart={() => playKey(5)}></button>
                <button id='keyG' className='green-key' onClick={() => playKey(7)} onTouchStart={() => playKey(7)}></button>
                <button id='keyA' className='green-key' onClick={() => playKey(9)} onTouchStart={() => playKey(9)}></button>
                <button id='keyB' className='green-key' onClick={() => playKey(11)} onTouchStart={() => playKey(11)}></button>
                <button id='keyCHigh' className='green-key' onClick={() => playKey(12)} onTouchStart={() => playKey(12)}></button>
            </div>
            <div className='black'>
                <div className='two'>
                    <button id='keyCSharp' className='black-key' onClick={() => playKey(1)} onTouchStart={() => playKey(1)}></button>
                    <button id='keyDSharp' className='black-key' onClick={() => playKey(3)} onTouchStart={() => playKey(3)}></button>
                </div>
                <div className='three'>
                    <button id='keyFSharp' className='black-key' onClick={() => playKey(6)} onTouchStart={() => playKey(6)}></button>
                    <button id='keyGSharp' className='black-key' onClick={() => playKey(8)} onTouchStart={() => playKey(8)}></button>
                    <button id='keyASharp' className='black-key' onClick={() => playKey(10)} onTouchStart={() => playKey(10)}></button>
                </div>
            </div>
            <div className='buttons'>
                <div>
                    <button className='sound-button' onClick={() => changeSound(1)}><img className='onion-button' src={props.Onion} alt='' /> <img className='strong-btn' src={PianoIcon} alt='' /></button>
                    <button className='sound-button' onClick={() => changeSound(2)} ><img className='onion-button' src={props.Onion} alt='' /> <img className='strong-btn' src={BassIcon} alt='' /></button>
                    <button className='sound-button' onClick={() => changeSound(3)}><img className='onion-button' src={props.Onion} alt='' /> <img className='strong-btn' src={GuitarIcon} alt='' /></button>
                    <button className='sound-button' onClick={() => changeSound(4)}><img className='onion-button' src={props.Onion} alt='' /> <img className='strong-btn' src={StringsIcon} alt='' /></button>
                    <button className='sound-button' onClick={() => changeSound(5)}><img className='onion-button' src={props.Onion} alt='' /> <img className='strong-btn' src={DrumsIcon} alt='' /></button>
                </div>
                <button className='power' onClick={powerOnOff}><FontAwesomeIcon icon={faPowerOff}/></button>
            </div>
        </div>
    ); 
}

import React, {useState, useEffect} from 'react';
import Keyboard from './Keyboard/Keyboard';
import Instructions from './Instructions/Instructions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRotateLeft} from '@fortawesome/free-solid-svg-icons';

export default function Main(props) {

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
        greenKeys[0].classList.toggle('green-key-on');
        greenKeys[1].classList.toggle('green-key-on');
        greenKeys[2].classList.toggle('green-key-on');
        greenKeys[3].classList.toggle('green-key-on');
        greenKeys[4].classList.toggle('green-key-on');
        greenKeys[5].classList.toggle('green-key-on');
        greenKeys[6].classList.toggle('green-key-on');
        greenKeys[7].classList.toggle('green-key-on');
        const soundButtons = document.getElementsByClassName('sound-button');
        if (soundC === document.getElementById('') || soundC === document.getElementById('sound1C')) {
            soundButtons[0].classList.toggle('onion-button-on');
            soundButtons[0].classList.toggle('instrument-selectah');
            soundButtons[1].classList.toggle('onion-button-on');
            soundButtons[2].classList.toggle('onion-button-on');
            soundButtons[3].classList.toggle('onion-button-on');
            soundButtons[4].classList.toggle('onion-button-on');
        } else if (soundC === document.getElementById('sound2C')) {
            soundButtons[0].classList.toggle('onion-button-on');
            soundButtons[1].classList.toggle('onion-button-on');
            soundButtons[1].classList.toggle('instrument-selectah');
            soundButtons[2].classList.toggle('onion-button-on');
            soundButtons[3].classList.toggle('onion-button-on');
            soundButtons[4].classList.toggle('onion-button-on');
        } else if (soundC === document.getElementById('sound3C')) {
            soundButtons[0].classList.toggle('onion-button-on');
            soundButtons[1].classList.toggle('onion-button-on');
            soundButtons[2].classList.toggle('onion-button-on');
            soundButtons[2].classList.toggle('instrument-selectah');
            soundButtons[3].classList.toggle('onion-button-on');
            soundButtons[4].classList.toggle('onion-button-on');
        } else if (soundC === document.getElementById('sound4C')) {
            soundButtons[0].classList.toggle('onion-button-on');
            soundButtons[1].classList.toggle('onion-button-on');
            soundButtons[2].classList.toggle('onion-button-on');
            soundButtons[3].classList.toggle('onion-button-on');
            soundButtons[3].classList.toggle('instrument-selectah');
            soundButtons[4].classList.toggle('onion-button-on');
        } else {
            soundButtons[0].classList.toggle('onion-button-on');
            soundButtons[1].classList.toggle('onion-button-on');
            soundButtons[2].classList.toggle('onion-button-on');
            soundButtons[3].classList.toggle('onion-button-on');
            soundButtons[4].classList.toggle('onion-button-on');
            soundButtons[4].classList.toggle('instrument-selectah');
        }
        const strongBtn = document.getElementsByClassName('strong-btn');
        strongBtn[0].classList.toggle('strong-btn-on');
        strongBtn[1].classList.toggle('strong-btn-on');
        strongBtn[2].classList.toggle('strong-btn-on');
        strongBtn[3].classList.toggle('strong-btn-on');
        strongBtn[4].classList.toggle('strong-btn-on');
        const onionBtn = document.getElementsByClassName('onion-button');
        onionBtn[0].classList.toggle('strong-btn-on');
        onionBtn[1].classList.toggle('strong-btn-on');
        onionBtn[2].classList.toggle('strong-btn-on');
        onionBtn[3].classList.toggle('strong-btn-on');
        onionBtn[4].classList.toggle('strong-btn-on');
        const power = document.querySelector('.power');
        power.classList.toggle('power-on');
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
        newSound.sampleRate = 44100;
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
        <main>
            <audio id='sound1C' src={props.Sound1C}></audio>
            <audio id='sound1CSharp' src={props.Sound1CSharp}></audio>
            <audio id='sound1D' src={props.Sound1D}></audio>
            <audio id='sound1DSharp' src={props.Sound1DSharp}></audio>
            <audio id='sound1E' src={props.Sound1E}></audio>
            <audio id='sound1F' src={props.Sound1F}></audio>
            <audio id='sound1FSharp' src={props.Sound1FSharp}></audio>
            <audio id='sound1G' src={props.Sound1G}></audio>
            <audio id='sound1GSharp' src={props.Sound1GSharp}></audio>
            <audio id='sound1A' src={props.Sound1A}></audio>
            <audio id='sound1ASharp' src={props.Sound1ASharp}></audio>
            <audio id='sound1B' src={props.Sound1B}></audio>
            <audio id='sound1CHigh' src={props.Sound1CHigh}></audio>
            <audio id='sound2C' src={props.Sound2C}></audio>
            <audio id='sound2CSharp' src={props.Sound2CSharp}></audio>
            <audio id='sound2D' src={props.Sound2D}></audio>
            <audio id='sound2DSharp' src={props.Sound2DSharp}></audio>
            <audio id='sound2E' src={props.Sound2E}></audio>
            <audio id='sound2F' src={props.Sound2F}></audio>
            <audio id='sound2FSharp' src={props.Sound2FSharp}></audio>
            <audio id='sound2G' src={props.Sound2G}></audio>
            <audio id='sound2GSharp' src={props.Sound2GSharp}></audio>
            <audio id='sound2A' src={props.Sound2A}></audio>
            <audio id='sound2ASharp' src={props.Sound2ASharp}></audio>
            <audio id='sound2B' src={props.Sound2B}></audio>
            <audio id='sound2CHigh' src={props.Sound2CHigh}></audio>
            <audio id='sound3C' src={props.Sound3C}></audio>
            <audio id='sound3CSharp' src={props.Sound3CSharp}></audio>
            <audio id='sound3D' src={props.Sound3D}></audio>
            <audio id='sound3DSharp' src={props.Sound3DSharp}></audio>
            <audio id='sound3E' src={props.Sound3E}></audio>
            <audio id='sound3F' src={props.Sound3F}></audio>
            <audio id='sound3FSharp' src={props.Sound3FSharp}></audio>
            <audio id='sound3G' src={props.Sound3G}></audio>
            <audio id='sound3GSharp' src={props.Sound3GSharp}></audio>
            <audio id='sound3A' src={props.Sound3A}></audio>
            <audio id='sound3ASharp' src={props.Sound3ASharp}></audio>
            <audio id='sound3B' src={props.Sound3B}></audio>
            <audio id='sound3CHigh' src={props.Sound3CHigh}></audio>
            <audio id='sound4C' src={props.Sound4C}></audio>
            <audio id='sound4CSharp' src={props.Sound4CSharp}></audio>
            <audio id='sound4D' src={props.Sound4D}></audio>
            <audio id='sound4DSharp' src={props.Sound4DSharp}></audio>
            <audio id='sound4E' src={props.Sound4E}></audio>
            <audio id='sound4F' src={props.Sound4F}></audio>
            <audio id='sound4FSharp' src={props.Sound4FSharp}></audio>
            <audio id='sound4G' src={props.Sound4G}></audio>
            <audio id='sound4GSharp' src={props.Sound4GSharp}></audio>
            <audio id='sound4A' src={props.Sound4A}></audio>
            <audio id='sound4ASharp' src={props.Sound4ASharp}></audio>
            <audio id='sound4B' src={props.Sound4B}></audio>
            <audio id='sound4CHigh' src={props.Sound4CHigh}></audio>
            <audio id='sound5C' src={props.Sound5C}></audio>
            <audio id='sound5CSharp' src={props.Sound5CSharp}></audio>
            <audio id='sound5D' src={props.Sound5D}></audio>
            <audio id='sound5DSharp' src={props.Sound5DSharp}></audio>
            <audio id='sound5E' src={props.Sound5E}></audio>
            <audio id='sound5F' src={props.Sound5F}></audio>
            <audio id='sound5FSharp' src={props.Sound5FSharp}></audio>
            <audio id='sound5G' src={props.Sound5G}></audio>
            <audio id='sound5GSharp' src={props.Sound5GSharp}></audio>
            <audio id='sound5A' src={props.Sound5A}></audio>
            <audio id='sound5ASharp' src={props.Sound5ASharp}></audio>
            <audio id='sound5B' src={props.Sound5B}></audio>
            <audio id='sound5CHigh' src={props.Sound5CHigh}></audio>
            <Keyboard 
             Onion={props.Onion}
             PianoIcon={props.PianoIcon}
             BassIcon={props.BassIcon}
             GuitarIcon={props.GuitarIcon}
             StringsIcon={props.StringsIcon}
             DrumsIcon={props.DrumsIcon}
             powerOnOff={powerOnOff}
             playKey={playKey}
             changeSound={changeSound}
            />
            <div className='turn-screen'>
                <p>Turn your screen to play the keyboard</p>
                <FontAwesomeIcon className='arrow' icon={faArrowRotateLeft}/>
            </div>
            <Instructions
             Onion={props.Onion}
             KeyboardPlayer={props.KeyboardPlayer}
             Hand={props.Hand}
             displayInstructions={props.displayInstructions}
            />
        </main>
    );
}

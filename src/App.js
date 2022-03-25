import Sound1C from './components/audio/sound1/sound1C.wav';
import Sound1CSharp from './components/audio/sound1/sound1CSharp.wav';
import Sound1D from './components/audio/sound1/sound1D.wav';
import Sound1DSharp from './components/audio/sound1/sound1DSharp.wav';
import Sound1E from './components/audio/sound1/sound1E.wav';
import Sound1F from './components/audio/sound1/sound1F.wav';
import Sound1FSharp from './components/audio/sound1/sound1FSharp.wav';
import Sound1G from './components/audio/sound1/sound1G.wav';
import Sound1GSharp from './components/audio/sound1/sound1GSharp.wav';
import Sound1A from './components/audio/sound1/sound1A.wav';
import Sound1ASharp from './components/audio/sound1/sound1ASharp.wav';
import Sound1B from './components/audio/sound1/sound1B.wav';
import Sound1CHigh from './components/audio/sound1/sound1CHigh.wav';
import Sound2C from './components/audio/sound2/sound2C.wav';
import Sound2CSharp from './components/audio/sound2/sound2CSharp.wav';
import Sound2D from './components/audio/sound2/sound2D.wav';
import Sound2DSharp from './components/audio/sound2/sound2DSharp.wav';
import Sound2E from './components/audio/sound2/sound2E.wav';
import Sound2F from './components/audio/sound2/sound2F.wav';
import Sound2FSharp from './components/audio/sound2/sound2FSharp.wav';
import Sound2G from './components/audio/sound2/sound2G.wav';
import Sound2GSharp from './components/audio/sound2/sound2GSharp.wav';
import Sound2A from './components/audio/sound2/sound2A.wav';
import Sound2ASharp from './components/audio/sound2/sound2ASharp.wav';
import Sound2B from './components/audio/sound2/sound2B.wav';
import Sound2CHigh from './components/audio/sound2/sound2CHigh.wav';
import Sound3C from './components/audio/sound3/sound3C.wav';
import Sound3CSharp from './components/audio/sound3/sound3CSharp.wav';
import Sound3D from './components/audio/sound3/sound3D.wav';
import Sound3DSharp from './components/audio/sound3/sound3DSharp.wav';
import Sound3E from './components/audio/sound3/sound3E.wav';
import Sound3F from './components/audio/sound3/sound3F.wav';
import Sound3FSharp from './components/audio/sound3/sound3FSharp.wav';
import Sound3G from './components/audio/sound3/sound3G.wav';
import Sound3GSharp from './components/audio/sound3/sound3GSharp.wav';
import Sound3A from './components/audio/sound3/sound3A.wav';
import Sound3ASharp from './components/audio/sound3/sound3ASharp.wav';
import Sound3B from './components/audio/sound3/sound3B.wav';
import Sound3CHigh from './components/audio/sound3/sound3CHigh.wav';
import Sound4C from './components/audio/sound4/sound4C.wav';
import Sound4CSharp from './components/audio/sound4/sound4CSharp.wav';
import Sound4D from './components/audio/sound4/sound4D.wav';
import Sound4DSharp from './components/audio/sound4/sound4DSharp.wav';
import Sound4E from './components/audio/sound4/sound4E.wav';
import Sound4F from './components/audio/sound4/sound4F.wav';
import Sound4FSharp from './components/audio/sound4/sound4FSharp.wav';
import Sound4G from './components/audio/sound4/sound4G.wav';
import Sound4GSharp from './components/audio/sound4/sound4GSharp.wav';
import Sound4A from './components/audio/sound4/sound4A.wav';
import Sound4ASharp from './components/audio/sound4/sound4ASharp.wav';
import Sound4B from './components/audio/sound4/sound4B.wav';
import Sound4CHigh from './components/audio/sound4/sound4CHigh.wav';
import Sound5C from './components/audio/sound5/sound5C.wav';
import Sound5CSharp from './components/audio/sound5/sound5CSharp.wav';
import Sound5D from './components/audio/sound5/sound5D.wav';
import Sound5DSharp from './components/audio/sound5/sound5DSharp.wav';
import Sound5E from './components/audio/sound5/sound5E.wav';
import Sound5F from './components/audio/sound5/sound5F.wav';
import Sound5FSharp from './components/audio/sound5/sound5FSharp.wav';
import Sound5G from './components/audio/sound5/sound5G.wav';
import Sound5GSharp from './components/audio/sound5/sound5GSharp.wav';
import Sound5A from './components/audio/sound5/sound5A.wav';
import Sound5ASharp from './components/audio/sound5/sound5ASharp.wav';
import Sound5B from './components/audio/sound5/sound5B.wav';
import Sound5CHigh from './components/audio/sound5/sound5CHigh.wav';
import './App.css';
import Onion from './components/i/onion.png';
import PianoIcon from './components/i/piano-icon.png';
import BassIcon from './components/i/bass-icon.png';
import GuitarIcon from './components/i/guitar-icon.png';
import StringsIcon from './components/i/strings-icon.png';
import DrumsIcon from './components/i/drums-icon.png';
import KeyboardPlayer from './components/i/keyboard-player.png';
import Hand from './components/i/hand.png';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

export default function App() {

    const displayAbout = () => {
        document.querySelector('h3').classList.toggle('about-focus');
        document.querySelector('.about').classList.toggle('about-display');
        const aboutContent = document.getElementsByClassName('about-content');
        aboutContent[0].classList.toggle('about-content-display');
        aboutContent[1].classList.toggle('about-content-display');
        aboutContent[2].classList.toggle('about-content-display');
    }

    const displayInstructions = () => {
        document.querySelector('.instructions').classList.toggle('instructions-display');
        document.querySelectorAll('h1')[1].classList.toggle('instructions-h1-display');
        document.querySelector('ul').classList.toggle('ul-display');
        const player = document.querySelector('.player');
        player.classList.toggle('player-display');
    }

    document.addEventListener('keypress', (event) => {
        if (event.key === 'a' || event.key === 'A') {
            document.getElementById('keyC').click();
        } else if (event.key === 'w' || event.key === 'W') {
            document.getElementById('keyCSharp').click();
        } else if (event.key === 's' || event.key === 'S') {
            document.getElementById('keyD').click();
        } else if (event.key === 'e' || event.key === 'E') {
            document.getElementById('keyDSharp').click();
        } else if (event.key === 'd' || event.key === 'D') {
            document.getElementById('keyE').click();
        } else if (event.key === 'f' || event.key === 'F') {
            document.getElementById('keyF').click();
        } else if (event.key === 't' || event.key === 'T') {
            document.getElementById('keyFSharp').click();
        } else if (event.key === 'g' || event.key === 'G') {
            document.getElementById('keyG').click();
        } else if (event.key === 'y' || event.key === 'Y') {
            document.getElementById('keyGSharp').click();
        } else if (event.key === 'h' || event.key === 'H') {
            document.getElementById('keyA').click();
        } else if (event.key === 'u' || event.key === 'U') {
            document.getElementById('keyASharp').click();
        } else if (event.key === 'j' || event.key === 'J') {
            document.getElementById('keyB').click();
        } else if (event.key === 'k' || event.key === 'K') {
            document.getElementById('keyCHigh').click();
        }
    });

    return (
        <div>
            <Header 
             Onion={Onion}
             displayAbout={displayAbout}
            />
            <Main 
             Sound1C={Sound1C}
             Sound1CSharp={Sound1CSharp}
             Sound1D={Sound1D}
             Sound1DSharp={Sound1DSharp}
             Sound1E={Sound1E}
             Sound1F={Sound1F}
             Sound1FSharp={Sound1FSharp}
             Sound1G={Sound1G}
             Sound1GSharp={Sound1GSharp}
             Sound1A={Sound1A}
             Sound1ASharp={Sound1ASharp}
             Sound1B={Sound1B}
             Sound1CHigh={Sound1CHigh}
             Sound2C={Sound2C}
             Sound2CSharp={Sound2CSharp}
             Sound2D={Sound2D}
             Sound2DSharp={Sound2DSharp}
             Sound2E={Sound2E}
             Sound2F={Sound2F}
             Sound2FSharp={Sound2FSharp}
             Sound2G={Sound2G}
             Sound2GSharp={Sound2GSharp}
             Sound2A={Sound2A}
             Sound2ASharp={Sound2ASharp}
             Sound2B={Sound2B}
             Sound2CHigh={Sound2CHigh}
             Sound3C={Sound3C}
             Sound3CSharp={Sound3CSharp}
             Sound3D={Sound3D}
             Sound3DSharp={Sound3DSharp}
             Sound3E={Sound3E}
             Sound3F={Sound3F}
             Sound3FSharp={Sound3FSharp}
             Sound3G={Sound3G}
             Sound3GSharp={Sound3GSharp}
             Sound3A={Sound3A}
             Sound3ASharp={Sound3ASharp}
             Sound3B={Sound3B}
             Sound3CHigh={Sound3CHigh}
             Sound4C={Sound4C}
             Sound4CSharp={Sound4CSharp}
             Sound4D={Sound4D}
             Sound4DSharp={Sound4DSharp}
             Sound4E={Sound4E}
             Sound4F={Sound4F}
             Sound4FSharp={Sound4FSharp}
             Sound4G={Sound4G}
             Sound4GSharp={Sound4GSharp}
             Sound4A={Sound4A}
             Sound4ASharp={Sound4ASharp}
             Sound4B={Sound4B}
             Sound4CHigh={Sound4CHigh}
             Sound5C={Sound5C}
             Sound5CSharp={Sound5CSharp}
             Sound5D={Sound5D}
             Sound5DSharp={Sound5DSharp}
             Sound5E={Sound5E}
             Sound5F={Sound5F}
             Sound5FSharp={Sound5FSharp}
             Sound5G={Sound5G}
             Sound5GSharp={Sound5GSharp}
             Sound5A={Sound5A}
             Sound5ASharp={Sound5ASharp}
             Sound5B={Sound5B}
             Sound5CHigh={Sound5CHigh}
             Onion={Onion}
             PianoIcon={PianoIcon}
             BassIcon={BassIcon}
             GuitarIcon={GuitarIcon}
             StringsIcon={StringsIcon}
             DrumsIcon={DrumsIcon}
             KeyboardPlayer={KeyboardPlayer}
             Hand={Hand}
             displayInstructions={displayInstructions}
            />
            <Footer/>
        </div>
    );
}

import './App.css';
import Onion from './i/onion.png';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

export default function App() {

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
            <Header Onion={Onion}/>
            <Main Onion={Onion}/>
            <Footer/>
        </div>
    );
}

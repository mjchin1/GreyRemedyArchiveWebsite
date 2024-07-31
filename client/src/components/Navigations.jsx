import {Link} from 'react-router-dom';
import InstaLogo from '../assets/IGLogo.png';

export default function Navigations() {
    return (
        <nav>
            <Link to = '/'>HOME</Link>
            <Link to = '/about'>ABOUT</Link>
            <Link to = '/press'>PRESS</Link>
            <a href="https://www.instagram.com/greyremedyco/?hl=en"><img className="navLink" src={InstaLogo}/></a>

        </nav>
    );
};
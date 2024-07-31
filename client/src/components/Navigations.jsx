import {Link} from 'react-router-dom';
import InstaLogo2 from '../assets/InstaLogo2.png';

export default function Navigations() {
    return (
        <nav>
            <Link to = '/'>HOME</Link>
            <Link to = '/about'>ABOUT</Link>
            <Link to = '/press'>PRESS</Link>
            <a href="https://www.instagram.com/greyremedyco/?hl=en" target="_blank"><img className="navLink" src={InstaLogo2}/></a>

        </nav>
    );
};
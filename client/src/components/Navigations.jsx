import {Link} from 'react-router-dom';

export default function Navigations() {
    return (
        <nav>
            <Link to = '/'>HOME</Link>
            <Link to = '/gallery'>GALLERY</Link>
            <Link to = '/about'>ABOUT</Link>
            <Link to = '/press'>PRESS</Link>
        </nav>
    );
};
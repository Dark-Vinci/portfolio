import { FaGithub, FaTwitterSquare, FaPhoneSquare, FaCopyright, FaHeart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import classes from '../style/footer.module.css';

function Footer () {
    return (
        <footer 
            id='footer'
            className={ classes.container } 
        >
            <div>Made with love <FaHeart color='red' fontSize='20px'/> by Tomiwa</div>
            <div>
                <p>Contacts</p>
                <ul>
                    <li><FaPhoneSquare color='yellow' fontSize='30px'/> +2349034119761</li>
                    <li><a href='https://github.com/Dark-Vinci'><FaGithub color='white' fontSize='30px'/>  github</a></li>
                    <li><MdEmail color='aqua' fontSize='30px'/>    email</li>
                    <li><a href="twitter"><FaTwitterSquare color='blue' fontSize='30px'/>    twitter</a></li>
                </ul>
            </div>
            <div>copyright <FaCopyright /> { (new Date()).getFullYear() }- tomiwa tech</div>
            <div>Shout out to Momoh Philip</div>
        </footer>
    );
}

export default Footer;
import { useState } from 'react';

import Menu from '../component/men';
import classes from '../style/header.module.css';
import { HiMenu } from 'react-icons/hi';
import { HiHand } from 'react-icons/hi';

function Header () {
    const [ openMenu, setOpenMenu ] = useState(false);

    const menuClickHandler = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <header
            className={ classes.container }
            style={{ maxWidth: '100vw' }}
        >  
            <div className={ classes.icon }
                style={{ maxWidth: '100vw' }}
            >
                <i
                    style={{color: 'white', maxWidth: '100vw' }}
                    onClick={ menuClickHandler }
                ><HiMenu 
                    fontSize='30px'
                /></i>
            </div>
            <div
                style={{
                    backgroundColor: 'rgb(221, 107, 221)',
                    width: '100vw',
                    position: 'fixed',
                    top: openMenu ? '0px' : '100vh',
                    right: '0px',
                    height: '100vh',
                    zIndex: '50',
                    transition: 'all 0.5s',
                    opacity: '0.5',
                    transform: 'rotateY(0)'
                }}
                onClick={ menuClickHandler }
            ></div>
            <Menu 
                open={ openMenu }
                click={ menuClickHandler }
            />
            <HiHand 
                className={ classes.hand }
                style={{
                width: '50px',
                height: '50px'
            }}/>
            <h2>{ "<Hello />" } </h2>
            <div className="emoji"></div>
            <p>Tomiwa here</p>
            <div>Welcome to my portfolio</div>
        </header>
    );
}

export default Header;
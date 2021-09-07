import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenu } from 'react-icons/hi';
import { HiHand } from 'react-icons/hi';

import Menu from '../component/men';
import classes from '../style/header.module.css';
import myCv from '../asset/pdf/CURRICULUM.pdf';

function Header () {
    const [ openMenu, setOpenMenu ] = useState(false);

    const menuClickHandler = () => {
        setOpenMenu(!openMenu);
    }
    
    return (
        <header
            className={ classes.container }
            style={{ maxWidth: '100vw', boxSizing: 'border-box', zIndex: 0 }}
        >  
            <div className={ classes.icon }
                style={{ maxWidth: '100vw', zIndex: 10 }}
            >
                {/* <div>hfj</div> */}
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

            <motion.h2
                style={{ zIndex: 0 }}
                animate={{ y: 0 }}
                initial={{ y: '-100vh' }}
                transition={{ type: 'spring', stiffness: 120, delay: 0.5 }}
            >{ "<Hello />" } </motion.h2>
            <div className="emoji"></div>

            <motion.p
                animate={{ x: 0 }}
                initial={{ x: '100vw' }}
                transition={{ type: 'spring', stiffness: 120, delay: 2 }}
            >Tomiwa here</motion.p>

            <motion.div
                animate={{ y: 0 }}
                initial={{ y: '100vh' }}
                transition={{ type: 'spring', stiffness: 120 , delay: 3 }}
            >Welcome to my portfolio</motion.div>
            <motion.a
                style={{
                    backgroundColor: 'purple',
                    padding: '12px',
                    marginTop: '10px',
                    color: 'white',
                    borderRadius: '35px',
                    width:'110px',
                    textDecoration: 'none',
                    fontSize: '20px'
                }}
                animate={{ x: 0 }}
                initial={{ x: '-100vw' }}
                transition={{ type: 'spring', stiffness: 120 , delay: 5 }}
                download
                href={ myCv }
            >resume</motion.a>
        </header>
    );
}

export default Header;
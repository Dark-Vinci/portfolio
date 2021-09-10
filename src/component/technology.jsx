import { GrTechnology } from 'react-icons/gr';
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiRedux } from 'react-icons/si';
import { DiMongodb, DiSass } from 'react-icons/di';

import classes from '../style/tech.module.css';

function Tech () {
    return (
        <div className={ classes.container } id='technology'>
            <h3>Tech proficiency <GrTechnology
                color="white"
            /> </h3>
            <div className={ classes.ul }>
                <ul>
                    <li>html5 {' '}
                        <FaHtml5 
                            color="orange" 
                            fontSize="30px"
                        />
                    </li>
                    <li>css3 {' '}
                        <FaCss3Alt 
                            color="rgb(73, 73, 247)" 
                            fontSize="30px"
                        />
                    </li>
                    <li>scss {' '}
                        <DiSass 
                            color="pink" 
                            fontSize="30px"
                        />
                    </li>
                    <li>javaScript {' '}
                        <SiJavascript 
                            color="yellow" 
                            fontSize="30px"
                            style={{  backgroundColor: 'black' }}
                        />
                    </li>
                    <li>typeScript {' '}
                        <SiTypescript 
                            color="blue" 
                            fontSize="30px" 
                            style={{ backgroundColor: 'white' }}
                        />
                    </li>
                    <li>React {' '}
                        <FaReact 
                            color="aqua" 
                            fontSize="30px"
                        />
                    </li>
                    <li>Redux {' '}
                        <SiRedux 
                            color="rgb(55, 1, 55)"
                            fontSize="30px"
                        />
                    </li>
                    <li>node.js {' '}
                        <FaNodeJs 
                            color="green"
                            fontSize="30px"
                        /> 
                    </li>
                    <li>Mongodb 
                        <DiMongodb 
                            color="rgb(1, 51, 1)" 
                            fontSize="30px" 
                        />
                    </li>

                    <li style={{ fontSize: '30px' }}> Express </li>
                </ul>
            </div>
        </div>
    );
}

export default Tech;
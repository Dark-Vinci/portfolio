import { useState } from 'react';
// import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from 'react-icons/fa';
// import { SiJavascript } from 'react-icons/si';
// import { DiMongodb } from 'react-icons/di';
import { AiOutlineLink } from 'react-icons/ai';
// import { HiHand } from 'react-icons/hi';<HiHand />

import classes from '../style/card.module.css';

function ProjectCard ({ title, description, githublink, weblink, technology }) {
    const [ showMore, setShowMore ] = useState(false);

    const showMoreClickHandler = () => {
        setShowMore(!showMore); 
    }

    const icons = (value) => {
        // if ( value === 'html') {
        //     return <FaHtml5 />
        // } else if (value == 'css') {
        //     return <FaCss3Alt />
        // } else if ( value.toLowerCase() == 'javascript') {
        //     return <SiJavascript />
        // } else if ( value == 'node.js') {
        //     return <FaNodeJs />
        // } else if ( value == 'react' ) {
        //     return <FaReact />
        // } else if ( value == 'mongodb') {
        //     return <DiMongodb />
        // } else if ( value == 'express' ) {
        //     return <div>Express <SiJavascript /></div>
        // } else {
        //     return
        // }
    }
    
    return (
        <div
            className={ classes.container }
        >
            <p> { title }</p>
            <p> { description } </p>
            <div
                className={ classes.tech }
            >
                {/* <p>technology</p> */}
                <ul>
                    {
                        technology.map((techElement) => {
                            return <li 
                                key={ techElement }
                            >{ techElement }</li>
                        })
                    }
                </ul>
            </div>
            <div
                className= { classes.anchor }
            >
                <a href={ githublink }>github</a>
                <a href={ weblink }>link <AiOutlineLink  style={{ margin: '4px'}}/></a>
            </div>
        </div>
    );
}

export default ProjectCard;
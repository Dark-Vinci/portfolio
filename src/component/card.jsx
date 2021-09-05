import { AiOutlineLink } from 'react-icons/ai';

import classes from '../style/card.module.css';

function ProjectCard ({ title, description, githublink, weblink, technology }) {
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

            {/* links */}
            <div
                className= { classes.anchor }
            >
                <a 
                    href={ githublink }
                    target='blank'
                >github</a>

                <a 
                    href={ weblink }
                    target='blank'
                >
                    link 
                <AiOutlineLink  style={{ margin: '4px'}}/></a>
            </div>
        </div>
    );
}

export default ProjectCard;
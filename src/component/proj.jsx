import { useEffect, useState } from 'react';

import classes from '../style/project.module.css';
import ProjectCards from './cards';


import projectFunction from '../util/project';
import { FaProjectDiagram } from 'react-icons/fa';


function Project () {
    const [project, setProject ] = useState({});

    useEffect(() => {
        const theProj = projectFunction()
        setProject(theProj);
    }, []);

    return (
        !project.frontEnd ? 
            <div>Loading...</div>:
        <div
            className={ classes.container }
            id='projects'
        >
            <h3>Projects <FaProjectDiagram /></h3>
            <div>
                <p
                    style={{ width: '200px', fontSize: '30px', fontWeight: "bold", border: '2px solid white'}}
                >Frontend</p>
                <ProjectCards 
                    data={ project.frontEnd }
                />
            </div>

            <div>
                <p style={{  width: '200px', fontSize: '30px', fontWeight: "bold", border: '2px solid white'}}>Backend</p>
                <ProjectCards 
                    data={ project.backEnd }
                />
            </div>

            <div>
                <p style={{  width: '200px', fontSize: '30px', fontWeight: "bold", border: '2px solid white'}}>html, css { '&' } js</p>
                <ProjectCards 
                    data={ project.html }
                />
            </div>
        </div>
    );
}

export default Project;
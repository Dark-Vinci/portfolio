// import classes from '../style/project.module.css';
// import ProjectCards from './cards';
// import { useEffect, useState } from 'react';

// import projectFunction from '../util/project';

// // const projects = project();

// function Project () {
//     const [project, setProject ] = useState({});

//     useEffect(() => {
//         setProject(projectFunction());
//     }, []);

//     return (
//         !project.frontEnd ? 
//             <div>oding...</div>:
//         <div
//             className={ classes.container }
//         >
//             <h3>list of projects i've built</h3>
//             <div>
//                 <p>front end project</p>
//                 [list of projects]
//                 <ProjectCards 
//                     data={ project.frontEnd }
//                 />
//             </div>

//             <div>
//                 <p>back end</p>
//                 [list of projects]
//                 {/* <ProjectCards 
//                     data={ project().backEnd }
//                 /> */}
//             </div>

//             <div>
//                 <p>full stack</p>
//                 [list of projects]
//             </div>

//             <div>
//                 <p>html, css { '&' } javascript</p>
//                 [list of projects];
//                 {/* <ProjectCards 
//                     data={ project().html }
//                 />    */}
//             </div>
//         </div>
//     );
// }

// export default Project;
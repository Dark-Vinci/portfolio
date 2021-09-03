import About from "../component/about";
import Form from "../component/form";
import Project from "../component/proj";
import Skill from "../component/skills";
import Tech from "../component/technology";

import classes from '../style/body.module.css';

function Body () { 
    return (
        <main className={ classes.container }>
            <section>
                <Project />
            </section>
            <section>
                <Tech />
            </section>
            <section>
                <Skill />
            </section>
            <section>
                <About />
            </section>
            <section>
                <Form />
            </section>
        </main>
    );
}

export default Body;
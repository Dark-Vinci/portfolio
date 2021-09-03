import classes from '../style/skill.module.css';

function Skill () {
    return (
        <div
            className={ classes.container }
            id='skills'
        >
            <h3>Top Skill sets</h3>
            <ul>
                <li>Es6+</li>
                <li>GOOGLING</li>
                <li>Context API</li>
                <li>React Hooks</li>
                <li>Knowledge of OOP</li>
                <li>Manipulation of DOM</li>
                <li>Consuming Restful API</li>
                <li>Writing Semantic HTML</li>
                <li>Mongodb Database Design</li>
                <li>React Functional Components</li>
                <li>Creating beautiful restful API endpoints</li>
            </ul>
        </div>
    );
}

export default Skill;
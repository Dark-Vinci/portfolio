import classes from '../style/men.module.css';


function Menu ({ open, click }) {
    const cla = [ classes.container ];

    return (
        <div
            style={{
                top: open ? '10vh': '-150vh',
                zIndex: 1000,
            }}
            className={ cla.join(' ') }
        >
            <h3>TO</h3>
            <ul
                onClick={ click }
            >
                <li><a href="#top">Top</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#footer">Contact</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#form">Message</a></li>
                <li><a href="#technology">Technology</a></li>
            </ul>
        </div>
    );
}

export default Menu;

// err.response,
// err.request
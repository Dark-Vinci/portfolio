import classes from '../style/about.module.css';
import avatar from '../asset/image/Screenshot_20210906-154201_1.png';

function About () {
    return (
        <div 
            id="about"
            className={ classes.container }
        >
            <h3>Me, Myself and I</h3>
            <div>
                Hey, my name is Ademola Olutomiwa, I am a javascript developer.
                With the help of javascript and the technology built around it,
                I build beautiful restful API endpoint and good looking user
                friendly and easily navigatable website.
                <div><strong>Seeing my test pass is indeed my true source of happiness { ';)' }</strong></div>
            </div>
            <div>
                <h4
                    style={{ color: 'black', fontSize: '25px' }}
                >Know me more</h4>
                <img 
                    src={ avatar }  
                    alt='my-profile'
                    style={{ borderRadius: '50%', width: '250px', height: '250px' }}
                    
                />
                <p>
                    My name is Tomiwa and I am a graduate of Physics.
                    I fell in love with javascript and the web after 
                    seeing a developer coded the purple rain on youtube back in 2017.
                    After I graduated in 2018, I was so curious and wanted to make my
                    computer rain any color of my choice. I decided to learn the language the guy used in the 
                    video. After that I decided to learn the technology that would help make
                    my computer rain the color of my choice which are html, css and javaScript.
                    After a long while of studying and practicing, I finally developed my own version 
                    of the 'purple rain' which I call colorful rain/ rain of rainbows. Its 
                    a webapp that rains rain of varities of color. To view click 
                    <a 
                        target='blank' 
                        href='https://dark-vinci.github.io/colorful-rain'
                        style={{ 
                            textDecoration: 'none', 
                            color: 'white', 
                            marginLeft: '5px', 
                            border: '2px solid white',
                            borderRadius: '8px', 
                            padding: '0px'
                        }}
                    >
                        here
                    </a>
                </p>

                <p>
                    After performing first task coding the colorful rain, my passion for  
                    web technology soared astronomically that I couldn't stop at just html, css and javaScript.
                    I fell in love with the web and decided to make a career out of it. So I processed in taking
                    more intense and rigorous courses on freeCodeCamp, Udemy, youtube and codewithmosh.com to ground
                    my knowledge of web technologies. I love to work with other developer and designers to solve problem
                    and convert design to quality and well optimized code. I love to build, it something I enjoy and can't 
                    see myself not doing.
                </p>

                <p>
                    I am open to both frontend and backend javascript role.
                    I'm good with an office work and also a fan of remote jobs.
                    Leave a message here if you have any offer for me. 
                    Thanks for reading my long and not so boring personal essay.
                </p>
            </div>
        </div>
    );
}

export default About;
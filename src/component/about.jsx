import classes from '../style/about.module.css';

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
                I can create beatiful restful API endpoint and good looking user
                friendly and easily navigatable website.
                <div><strong>Seeing my test pass is indeed a true source of happiness to me.</strong></div>
            </div>
            <div>
                <h4
                    style={{ color: 'black', fontSize: '25px' }}
                >Know me more</h4>
                {/* <img src=""  /> */}
                <p>
                    My name is Tomiwa and I am a graduate of Physics.
                    I fell in love with javascript and the web after 
                    seeing a developer coded the purple rain on youtube back in 2017.
                    After I graduated in 2018, I was so curious and wanted to make my
                    computer rain any color of my choice.I decided to learn the language the guy used in the 
                    video. After that I decided to learn the technology that would help make my 
                    my computer rain the color of my choice which are html, css and javaScript.
                    After a long while of studying and practicing, I finally developed my own version 
                    of the 'purple rain' which I call colorful rain/ rain of rainbows. Its 
                    a webapp that rains rain of varities of color. To view click <a href='colorful rain'>here</a>
                </p>

                <p>
                    After performing first task coding the colorful rain, the passion i had for the 
                    web soared astronomically that i couldn't stop at just html, css and javaScript...
                    i fell i love with the web and decided to make a carier out of it. so i processed
                    learning other technologies around the web to be not just an hobbist programmer
                    but also a professional one.
                </p>

                <p>
                    After building the colorful rain app, since then i cant just stop building.
                    Its something i enjoy and would want to spend all my time doing expect sometimes
                    when i hit some really though bugs { ';)' }  . Generally, im a very curious and creative individual that
                    would not give up until the code works perfectly and efficiently
                </p>

                <p>
                    I am open to both frontend and backend javascript role.
                    im good with an office work and also a fan of remote jobs.
                    leave a message here if you have any offer for me. 
                    Thanks for reading my long and not so boring personal essay.
                </p>
            </div>
        </div>
    );
}

export default About;
import { useState } from 'react';
import axios from 'axios';

import About from "../component/about";
import Form from "../component/form";
import Project from "../component/proj";
import Skill from "../component/skills";
import Tech from "../component/technology";

import classes from '../style/body.module.css';

function Body () { 
    const [ message, setMessage ] = useState('');
    const [ disable, setDisable ] = useState(true);
    const [ messageSent, setMessageSent ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    const inputChange = (event) => {
        setMessage(event.target.value);

        if (event.target.value.trim() !== '') {
            setDisable(true);
        }
    }

    async function sendMessage (data) {
        try {
            setLoading(true);
            await axios.post('url to message', data);
            setLoading(false);
            setMessageSent(true);
            setError(false);
        } catch (ex) {
            setError(true);
            setLoading(false);
        }
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const toSend = { message };
        console.log(toSend);
        sendMessage(toSend);
    }

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
                <Form 
                    inputChangeHandler={ inputChange }
                    value={ message }
                    formSubmit={ formSubmitHandler }
                    disabled={ disable }
                    loading={ loading }
                    sent={ messageSent }
                    error={ error }
                />
            </section>
        </main>
    );
}

export default Body;
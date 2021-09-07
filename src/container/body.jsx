import { useState, useReducer } from 'react';
import axios from 'axios';

import About from "../component/about";
import Form from "../component/form";
import Project from "../component/proj";
import Skill from "../component/skills";
import Tech from "../component/technology";

import classes from '../style/body.module.css';

function Body () { 
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ sent, setSent ] = useState(false);


    const reducer = (state, action) => {
        switch (action.type) {
            case 'EMAIL_CHANGE_HANDLER':
                return {
                    ...state,
                    email: action.event.target.value
                }
            case 'TEXT_CHANGE_HANDLER':
                return {
                    ...state,
                    text: action.event.target.value
                };
            case 'CLEAR':
                return {
                    ...state,
                    email: '',
                    text: ''   
                };
            default: return state;
        }
    }

    const [ theState, dispatch ] = useReducer(reducer, { email: '', text: '' });

    const emailChangeHandler = (event) => {
        dispatch({ type: 'EMAIL_CHANGE_HANDLER', event: event })
    }

    const textChangeHandler = (event) => {
        dispatch({ type: 'TEXT_CHANGE_HANDLER', event: event })
    }

    async function sendMessage (data) {
        try {
            setLoading(true);
            setSent(false);

            await axios.post('http://localhost:1212/api/main/message', data);

            setLoading(false);
            setError(false);
            setSent(true);
        } catch (ex) {
            setLoading(false);
            setError(true);
            setSent(false);
            if (ex.request) {
                console.log('something dey wrong with server')
            } else if (ex.response) {
                console.log('be like sey you dey ment')
            } else {
                console.log(ex.message);
            }
        }
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const { email, text } = theState;
        const toSend = { email, text };
        console.log(toSend);

        dispatch({ type: 'CLEAR' });

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
                    textChangeHandler={ textChangeHandler }
                    emailChangeHandler={ emailChangeHandler }
                    formSubmit={ formSubmitHandler }
                    loading={ loading }
                    sent={ sent }
                    error={ error }
                    email={ theState.email }
                    text={ theState.text }
                />
            </section>
        </main>
    );
}

export default Body;
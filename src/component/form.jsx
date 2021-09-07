import classes from '../style/form.module.css';

function Form ({ email, text, formSubmit, loading, sent, error, emailChangeHandler, textChangeHandler }) {
    return (
        <form 
            onSubmit={ formSubmit }
            className={ classes.container }
            id="form"
        >
            <h2>leave tomiwa a message</h2>
            <input 
                type="email"
                onChange={ emailChangeHandler }
                value={ email }
                placeholder="email"
                required
            />

            <label htmlFor=""> message</label>
            <textarea   
                cols="30" 
                rows="4"
                required
                value= { text }
                onChange={ textChangeHandler }
            >
            </textarea>
            
            <button 
                type="submit"
            >
                {
                    sent ?
                        'sent' :
                        loading ?
                            'loading...':
                        error ?
                            'not sent' :
                            'send'
                }
            </button>
        </form>
    );
}

export default Form;
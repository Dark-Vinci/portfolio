import classes from '../style/form.module.css';

function Form ({ inputChangeHandler, value, formSubmit, disable, sent, error }) {
    return (
        <form 
            onSubmit={ formSubmit }
            className={ classes.container }
            id="form"
        >
            <input 
                type="text"
                onChange={ inputChangeHandler }
                value={ value }
                placeholder="leave a message"
                required
            />
            
            <button 
                type="submit"
                disable={ disable }
            >
                {
                    sent ?
                        'sent' :
                        error ?
                            'not sent' :
                            'send'
                }
            </button>
        </form>
    );
}

export default Form;
import classes from '../style/form.module.css';

function Form ({ inputChangeHandler, value, formSubmit, disable }) {
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
            />
            <button 
                type="submit"
                disable={ disable }
            >send</button>
        </form>
    );
}

export default Form;
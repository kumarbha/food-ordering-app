import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import { useRef } from 'react';

const MealItemForm = (props) => {

    const amountInputRef = useRef();

    const handleForm = (event) => {
        event.preventDefault();
        const quantity = amountInputRef.current.value;
        props.onMealAdd(quantity);
        amountInputRef.current.value = 1;
    }

    return (
        <form className={classes.form} onSubmit={handleForm}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: props.id,
                    type: 'number',
                    min: '1',
                    defaultValue: '1',
                    max: '5',
                    step: '1',
                }}
            />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;
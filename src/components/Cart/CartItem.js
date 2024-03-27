import classes from './CartItem.module.css';
import DeleteIcon from './DeleteIcon';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}>x {props.quantity}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}><DeleteIcon /></button>
                {props.quantity >= 2 && <button onClick={props.onReduceCount}>−</button>}
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
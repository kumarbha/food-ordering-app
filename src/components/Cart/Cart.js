import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    console.log(totalAmount, cartCtx.totalAmount)
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (_, id) => {
       cartCtx.deleteItem(id);
    };

    const cartItemReduceCountHandler = (_, id) => {
        cartCtx.reduceCount(id);
    };

    const cartItemAddHandler = (_, id) => { 
        cartCtx.incrementCount(id);
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                    onReduceCount={() => cartItemReduceCountHandler(null, item.id)}
                    onRemove={() => cartItemRemoveHandler(null, item.id)}
                    onAdd={() => cartItemAddHandler(null, item.id)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>
                    Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
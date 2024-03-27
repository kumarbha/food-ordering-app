import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import { useEffect, useRef } from "react";


const HeaderCartButton = props => {
    const cartctx = useContext(CartContext);
    const totalCartItems = cartctx.items.reduce((sum, li) => sum + li.quantity, 0);

    const badgeRef = useRef();

    useEffect(() => {
        const badge = badgeRef.current;
        const timer = setTimeout(() => badge.classList.add(`${classes.bump}`), 0)
        return () => {
            badge.className = classes.badge;
            clearTimeout(timer);
        }
    }, [totalCartItems]);

    return (
        <button className={classes.button} onClick={props.onOpen}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span ref={badgeRef} id="badge" className={`${classes.badge}`}>{totalCartItems}</span>
        </button>

    )
}

export default HeaderCartButton;


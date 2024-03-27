import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";

const MealItem = (props) => {
    const ctx = useContext(CartContext);

    const mealAddHandler = (quantity) => {
        const mealObject = {
            id: props.meal.id,
            name: props.meal.name,
            price: +props.meal.price,
            quantity: +quantity
        }
        ctx.addItem(mealObject);
    }
    const price = `$${props.meal.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.meal.name}</h3>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.meal.id} onMealAdd={mealAddHandler} />
            </div>
        </li>
    )

}

export default MealItem;
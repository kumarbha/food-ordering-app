import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCart = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const newCartItemsArray = state.items.slice();
        var mealAlreadyExistsInCart = newCartItemsArray.find((item) => item.id === action.item.id);
        if (mealAlreadyExistsInCart) {
            mealAlreadyExistsInCart.quantity = mealAlreadyExistsInCart.quantity + action.item.quantity;
        } else {
            newCartItemsArray.push(action.item);
        }

        return {
            items: newCartItemsArray,
            totalAmount: state.totalAmount + action.item.quantity * action.item.price
        };

    } else if (action.type === 'REMOVE_ITEM') {
        const indexOfElement = state.items.findIndex((item) => item.id === action.id);
        const newCartItemsArray = state.items.slice();

        const itemToRemove = newCartItemsArray[indexOfElement];
        newCartItemsArray.splice(indexOfElement, 1);

        return {
            items: newCartItemsArray,
            totalAmount: state.totalAmount - itemToRemove.quantity * itemToRemove.price
        };

    } else if (action.type === 'REDUCE_COUNT') {
        const indexOfElement = state.items.findIndex((item) => item.id === action.id);
        const newCartItemsArray = state.items.slice();

        const itemToRemove = newCartItemsArray[indexOfElement];
        newCartItemsArray[indexOfElement].quantity = newCartItemsArray[indexOfElement].quantity - 1

        return {
            items: newCartItemsArray,
            totalAmount: state.totalAmount - itemToRemove.price
        };
    } else if (action.type === 'INCREMENT_COUNT') {
        const indexOfElement = state.items.findIndex((item) => item.id === action.id);
        const newCartItemsArray = state.items.slice();

        const itemToRemove = newCartItemsArray[indexOfElement];
        newCartItemsArray[indexOfElement].quantity = newCartItemsArray[indexOfElement].quantity + 1

        return {
            items: newCartItemsArray,
            totalAmount: state.totalAmount + itemToRemove.price
        };
    }
    return defaultCart;
};

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);
    const addItemHandler = (item) => {
        return dispatchCartAction({ type: 'ADD_ITEM', item: item })
    }
    const deleteItemHandler = (id) => {
        return dispatchCartAction({ type: 'REMOVE_ITEM', id: id })
    }

    const reduceCountHandler = (id) => {
        return dispatchCartAction({ type: 'REDUCE_COUNT', id: id })
    }

    const incrementCountHandler = (id) => {
        return dispatchCartAction({ type: 'INCREMENT_COUNT', id: id })
    }

    const cartContext = {
        items: cartState.items,
        addItem: addItemHandler,
        deleteItem: deleteItemHandler,
        reduceCount: reduceCountHandler,
        incrementCount: incrementCountHandler,
        totalAmount: cartState.totalAmount
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartProvider;
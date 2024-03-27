import React from 'react'


const CartContext = React.createContext({
    items: [{id: 1, quantity: 5, price: 2}],
    addItem: (item) => { },
    reduceCount: (id) => {},
    incrementCount: (id) => {},
    deleteItem: (id) => { },
    totalAmount: 10,
    counter: 10
})

export default CartContext;
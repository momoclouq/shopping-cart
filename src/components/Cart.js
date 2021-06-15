import React from "react";

const style = {
    cartWrapper: {
        background: "#ffffff"
    },
    cartItem: {
        padding: "10px",
        border: "1px solid red"
    }
}

const PurchasedProduct = ({item, removeFromCart}) => {
    return (
        <div style={style.cartItem}>
            <div>name: {item.name}</div>
            <div>quantity: {item.quantity}</div>
            <button onClick={() => {removeFromCart(item.productId);}}>remove</button>
        </div>
    );
}

const Cart = ({cart, removeFromCart}) => {
    const allItems = cart.map((item, index) => {
        return <PurchasedProduct removeFromCart={removeFromCart} item={item} key={"pp" + index} />
    });

    return <>
        <div style={style.cartWrapper}>
            {allItems}
        </div>

        <button>Order</button>
    </>;
}

export default Cart;
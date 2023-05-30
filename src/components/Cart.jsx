import React from "react";

function Cart(props) {
    const { quantity = 0, handleBascketVisible = Function.prototype } = props;

    return (
        <div
            className="cart teal lighten-1 white-text"
            onClick={handleBascketVisible}
        >
            <i className="material-icons">shopping_cart</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}

export { Cart };

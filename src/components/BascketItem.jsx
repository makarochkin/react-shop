function BascketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBascket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    return (
        <li className="collection-item ">
            {name}
            <i
                className="material-icons basket-quantity"
                onClick={() => {
                    incQuantity(id);
                }}
            >
                add
            </i>{" "}
            x {quantity}{" "}
            <i
                className="material-icons basket-quantity"
                onClick={() => {
                    decQuantity(id);
                }}
            >
                remove
            </i>{" "}
            = {price * quantity}{" "}
            <span
                href="#!"
                className="secondary-content"
            >
                <i
                    className="material-icons bascket-delete"
                    onClick={() => {
                        removeFromBascket(id);
                    }}
                >
                    close
                </i>
            </span>
        </li>
    );
}

export { BascketItem };

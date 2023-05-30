import { BascketItem } from "./BascketItem";

function BascketList(props) {
    const {
        order = [],
        handleBascketVisible = Function.prototype,
        removeFromBascket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    const totalPrice = order.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    return (
        <ul className="collection bascket-list">
            <li className="collection-item active">Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <BascketItem
                        key={item.id}
                        removeFromBascket={removeFromBascket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        {...item}
                    />
                ))
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active">
                Общая стоимость {totalPrice}
            </li>
            <li className="collection-item ">
                <button className="waves-effect waves-light btn-small">
                    Оформить
                </button>
            </li>
            <i
                className="material-icons bascket-close"
                onClick={handleBascketVisible}
            >
                close
            </i>
        </ul>
    );
}

export { BascketList };

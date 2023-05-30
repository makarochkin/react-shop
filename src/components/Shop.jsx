import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../config";
import { SimplePreloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BascketList } from "./BascketList";
import { Alert } from "./alert";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBascketVisible, setBascketVisible] = useState(false);
    const [alertName, setAlertName] = useState("");

    const handleBascketVisible = () => {
        setBascketVisible(!isBascketVisible);
    };

    const removeFromBascket = (itemId) => {
        const newOrder = order.filter((el) => el.id !== itemId);
        setOrder(newOrder);
    };

    const incQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    const decQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId && el.quantity > 0) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    const addToBascket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );
        if (itemIndex < 0) {
            const newItem = {
                // наследуем все ключи от item
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.name);
    };

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    const closeAlert = () => {
        setAlertName("");
    };

    return (
        <main className="container content">
            <Cart
                quantity={order.length}
                handleBascketVisible={handleBascketVisible}
            />
            {loading ? (
                <SimplePreloader />
            ) : (
                <GoodsList
                    goods={goods}
                    addToBascket={addToBascket}
                />
            )}
            {isBascketVisible && (
                <BascketList
                    order={order}
                    handleBascketVisible={handleBascketVisible}
                    removeFromBascket={removeFromBascket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                />
            )}
            {alertName && (
                <Alert
                    name={alertName}
                    closeAlert={closeAlert}
                />
            )}
        </main>
    );
}

export { Shop };

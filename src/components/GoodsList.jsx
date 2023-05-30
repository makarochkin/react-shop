import React from "react";
import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const { goods = [], addToBascket = Function.prototype } = props;
    if (!goods.length) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem
                    key={item.mainId}
                    addToBascket={addToBascket}
                    {...item}
                />
            ))}
        </div>
    );
}

export { GoodsList };

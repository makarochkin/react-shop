import React from "react";
function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayType,
        price,
        displayAssets,
        addToBascket = Function.prototype,
    } = props;
    var Assets = { full_background: "" };
    if (displayAssets.length) {
        Assets = displayAssets[0];
    }

    return (
        <div className="card">
            <div className="card-image">
                <img
                    src={Assets.full_background}
                    alt={displayName}
                />
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayType}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() =>
                        addToBascket({
                            id: mainId,
                            name: displayName,
                            price: price.regularPrice,
                        })
                    }
                >
                    Купить
                </button>
                <span
                    className="right"
                    style={{ fontSize: "1.5rem" }}
                >
                    {price.regularPrice} руб.
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };

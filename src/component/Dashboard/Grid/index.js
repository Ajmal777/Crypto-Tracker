import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
function Grid({ coin, key }) {
    const chipColor = coin.price_change_percentage_24h > 0 ? "green" : "red";
    return (
        <div className={`grid-container grid-container-${chipColor}`}>
            <div className="info-flex">
                <img src={coin.image} className="coin-logo" />
                <div className="name-col">
                    <p className="coin-symbol">{coin.symbol}</p>
                    <p className="coin-name">{coin.name}</p>
                </div>
            </div>
            <div className="chip-flex">
                <div className={`price-chip chip-${chipColor}`}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className={`icon-chip chip-${chipColor}`}>
                    {chipColor === "green" ? (
                        <TrendingUpRoundedIcon />
                    ) : (
                        <TrendingDownRoundedIcon />
                    )}
                </div>
            </div>
            <div className="info-container">
                <h3
                    className={`coin-price`}
                    style={{ color: `var(--${chipColor})` }}
                >
                    ${coin.current_price.toLocaleString()}
                </h3>
                <p className="total-volume">
                    Total Volume : {coin.total_volume.toLocaleString()}
                </p>
                <p className="total-volume">
                    Market Cap : ${coin.market_cap.toLocaleString()}
                </p>
            </div>
        </div>
    );
}

export default Grid;

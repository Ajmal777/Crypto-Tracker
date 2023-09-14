import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../../functions/convertNumber";
function List({ coin, key }) {
    const chipColor = coin.price_change_percentage_24h > 0 ? "green" : "red";
    return (
        <tr className="list-row">
            <Tooltip title={coin.name}>
                <td className="td-image">
                    <img src={coin.image} className="coin-logo" />
                </td>
            </Tooltip>
            <td>
                <div className="name-col">
                    <Tooltip title="Coin Symbol">
                        <p className="coin-symbol">{coin.symbol}</p>
                    </Tooltip>
                    <Tooltip title="Coin name">
                        <p className="coin-name">{coin.name}</p>
                    </Tooltip>
                </div>
            </td>
            <Tooltip title="Price change in 24hrs">
                <td className="chip-flex">
                    <div className={`price-chip chip-${chipColor}`}>
                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    <div className={`icon-chip td-icon chip-${chipColor}`}>
                        {chipColor === "green" ? (
                            <TrendingUpRoundedIcon />
                        ) : (
                            <TrendingDownRoundedIcon />
                        )}
                    </div>
                </td>
            </Tooltip>
            <Tooltip title="Current price">
                <td>
                    <h3
                        className={`coin-price td-center-align`}
                        style={{ color: `var(--${chipColor})` }}
                    >
                        ${coin.current_price.toLocaleString()}
                    </h3>
                </td>
            </Tooltip>
            <Tooltip title="Total volume" className="td-total-volume">
                <td>
                    <p className="total-volume td-right-align">
                        {coin.total_volume.toLocaleString()}
                    </p>
                </td>
            </Tooltip>
            <Tooltip title="Market cap">
                <td className="lg-mkt-cap">
                    <p className="total-volume td-right-align">
                        ${coin.market_cap.toLocaleString()}
                    </p>
                </td>
                <td className="sm-mkt-cap">
                    <p className="total-volume td-right-align">
                        ${convertNumber(coin.market_cap)}
                    </p>
                </td>
            </Tooltip>
        </tr>
    );
}

export default List;

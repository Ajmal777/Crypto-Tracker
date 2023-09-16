import React, { useState } from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
// import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
// import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
// import { addToWatchList } from "../../../functions/addToWatchList";
function Grid({ coin, key }) {
    // const [starred, setStarred] = useState(false);
    const chipColor = coin.price_change_percentage_24h > 0 ? "green" : "red";

    // function handleClick(event) {
    //     event.stopPropagation();
    //     addToWatchList(starred, setStarred, coin);
    // }

    return (
        <div className={`grid-container grid-container-${chipColor}`}>
            <div className="info-flex">
                <img src={coin.image} className="coin-logo" alt={coin.name}/>
                <div className="name-col">
                    <p className="coin-symbol">{coin.symbol}</p>
                    <p className="coin-name">{coin.name}</p>
                </div>
                {/* <div
                    className={`add-to-watchlist chip-${chipColor}`}
                    onClick={(e) => handleClick(e)}
                >
                    {!starred ? (
                        <BookmarkAddOutlinedIcon />
                    ) : (
                        <BookmarkRemoveIcon />
                    )}
                </div> */}
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

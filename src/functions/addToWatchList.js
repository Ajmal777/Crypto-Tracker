export const addToWatchList = (starred, setStarred, coin) =>{
    let watchList = JSON.parse(localStorage.getItem("watchListCoins"));
    if (!starred) {
        if (!watchList) {
            watchList = [];
        }
        if(!check(watchList, coin)){
            watchList.push(coin);
        }
        localStorage.setItem("watchListCoins", JSON.stringify(watchList));
        setStarred(true);
    } else {
        watchList = watchList.filter((item) => item.id !== coin.id);
        localStorage.setItem("watchListCoins", JSON.stringify(watchList));
        setStarred(false);
    }
}

function check(watchList, coin){
    for(const item of watchList){
        if(item.id === coin.id) return true;
    }
    return false;
}
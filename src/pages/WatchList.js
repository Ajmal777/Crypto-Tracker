import React, { useEffect, useState } from "react";
import Header from "../component/Common/Header";
import TabsComponent from "../component/Dashboard/Tabs";
import Loader from "../component/Common/Loader";
import BackToTop from "../component/Common/BackToTop";
import { getWatchListData } from "../functions/getWatchListData";

function WatchList() {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const myCoins = await getWatchListData();
        if (myCoins) {
            setCoins(myCoins);
            setIsLoading(false);
        }
    };

    return (
        <>
            <Header />
            <BackToTop />
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <TabsComponent coins={coins} />
                </div>
            )}
        </>
    );
}

export default WatchList;

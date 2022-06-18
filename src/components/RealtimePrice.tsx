import { useEffect, useRef, useState } from "react";
import styles from "./RealtimePrice.module.scss";

import cryptoList from "../static_data/crypto_list.json";

const getIdsForCryptoPriceApi = (cryptoList: string[]) => {
  return cryptoList.join(",");
};

const axios = require("axios").default;
const ids = getIdsForCryptoPriceApi(cryptoList);

type cryptoFeed = {
  id: string;
  name: string;
  current_price: number;
  total_volume: number;
  price_change_24h: number;
}[];

const RealtimePrice = () => {
  var [cryptoFeed, setCryptoFeed] = useState<cryptoFeed>([]);
  var currency = "usd";

  const url = `https://api.coingecko.com/api/v3/coins/markets?ids=${ids}&vs_currency=${currency}`;
  const intervalRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    const getCryptoFeed = () => {
      axios.get(url).then((response: any) => {
        setCryptoFeed(response.data);
        console.log(response.data);
      });
    };
    intervalRef.current = setInterval(getCryptoFeed, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [url]);

  return (
    <div className={styles.container}>
      <div>
        <h1>Cryptocurrency Realtime Price</h1>
      </div>
    </div>
  );
};

export default RealtimePrice;

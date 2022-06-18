import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./RealtimePrice.module.scss";

import PriceBlock from "../PriceBlock/PriceBlock";
import Selectbox from "../Common/Selectbox/Selectbox";
import cryptoList from "../../static_data/crypto_list.json";
import currencyList from "../../static_data/currency_list.json";

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
  var [currency, setCurrency] = useState(currencyList[0]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?ids=${ids}&vs_currency=${currency}`;
  const intervalRef = useRef<NodeJS.Timer>();

  const onCurrencyChangeHandler = useCallback((newValue: string) => {
    setCurrency(newValue);
  }, []);

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

  const priceBlocks = cryptoFeed.map((crypto: any) => {
    return (
      <PriceBlock
        key={crypto.id}
        id={crypto.id}
        name={crypto.name}
        price={crypto.current_price}
        volume={crypto.total_volume}
        change={crypto.price_change_24h}
      ></PriceBlock>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles["header-section"]}>
        <h1>Cryptocurrency Realtime Price</h1>
        <Selectbox
          onChange={onCurrencyChangeHandler}
          defaultOption={currencyList[0]}
          options={currencyList}
        />
      </div>
      <div className={styles.priceblocks}>{priceBlocks}</div>
    </div>
  );
};

export default RealtimePrice;
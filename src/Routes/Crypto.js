import { useState, useEffect, useRef } from "react";
import style from "./Crypto.module.css";

function Crypto() {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const isSync = useRef(false);

  const getCoins = async () => {
    const url = "https://api.coinpaprika.com/v1/tickers";
    const opt = currency !== "USD" ? `?quotes=${currency}` : "";

    const json = await (await fetch(url + opt)).json();

    // console.log(json);
    console.log(json[0]);
    setCoins(json);
    isSync.current = true;
  };

  const onChangeHandler = (e) => {
    setCurrency(e.target.value);
    isSync.current = false;
  };

  useEffect(() => {
    getCoins(); // eslint-disable-next-line
  }, [currency]);

  console.log(`Rending ... currency : ${currency}, isSync: ${isSync.current}`);
  return (
    <div>
      <h1>Cryptocurreny</h1>
      <span>Currency:</span>
      <select onChange={onChangeHandler}>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="KRW">KRW</option>
        <option value="EUR">EUR</option>
      </select>
      <hr />
      {isSync.current ? (
        <CryptoList coindata={coins} currency={currency} />
      ) : (
        ""
      )}
    </div>
  );
}

function CryptoList({ coindata, currency }) {
  // console.log(coindata[0]);
  // console.log(`currency : ${currency}`);
  return (
    <div>
      <table className={style.customTable}>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Change 7d</th>
          </tr>
        </thead>
        <tbody>
          {coindata.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.name}</td>
              <td>{coin.quotes[currency].price}</td>
              <td>{coin.quotes[currency].market_cap}</td>
              <td>{coin.quotes[currency].percent_change_7d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Crypto;

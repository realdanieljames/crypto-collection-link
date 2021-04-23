import React, { useEffect } from "react";
import "./CryptoDataDisplay.css";
import { connect } from "react-redux";

import {
  setCryptoData,
  // addCryptoData,
  showCryptoData,
  getCryptoPriceHistory,
} from "../../store/actions/actionCreators";
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter";
import Chart from "../CryptoChart/CryptoChart";

// <script src="https://widgets.coingecko.com/coingecko-coin-converter-widget.js"></script>
// <coingecko-coin-converter-widget  coin-id="bitcoin" currency="usd" background-color="#ffffff" font-color="#4c4c4c" locale="en"></coingecko-coin-converter-widget>

//===================================================================================//
//===================================================================================//

const CryptoDataDisplay = (props) => {
  useEffect(() => {
    // props.showCryptoData(props.selectedCryptoDisplay);
    props.showCryptoData(); 
  }, []);

  // console.log(props);

  return (
    <div className="crypto__data__display">
      {props.cryptoData.map((cryptocurrency) => {
        if (cryptocurrency.id === props.selectedCryptoDisplay.id) {
          // console.log(cryptocurrency);
          // console.log(props.selectedCryptoDisplay.id);

          let selectedCryptoData = props.selectedCryptoDisplay.data;

          return (
            <div
              key={cryptocurrency.id}
              className="crypto__data__display__elements"
            >
              {/*======================================================================================================================== */}
              <div className="crypto__data__display__name__logo">
                <img
                  className="crypto__data__display__image"
                  // src={selectedCryptoData.image.large}
                  src={cryptocurrency.image}
                />

                <h2 className="crypto__data__display__name">
                  {/* {selectedCryptoData.name} */}
                  {cryptocurrency.name}
                </h2>
                <p className="crypto__data__display__symbol">
                  {/* {selectedCryptoData.symbol.toUpperCase()} */}
                  {cryptocurrency.symbol.toUpperCase()}
                </p>

                <p className="crypto__data__display__rank">
                  Rank #{cryptocurrency.market_cap_rank}
                </p>

                {/*                <div className="crypto__data__display__description">
                <h3> What is {selectedCryptoData.name}?</h3>
                <p >{selectedCryptoData.description.en}</p>
                </div> */}
              </div>
              {/*======================================================================================================================== */}
              <div className="crypto__data__display__numerical__data">
                <div className="crypto__data__display__current__price">
                  $
                  {/* {selectedCryptoData.market_data.current_price.usd.toLocaleString()} */}
                  {cryptocurrency.current_price.toLocaleString()}
                  {/* {selectedCryptoData.market_data.price_change_percentage_24h > 0 ? 'green': 'red'} */}
                  <span
                    className="crypto__data__display__24h__percentage__change"
                    style={{
                      backgroundColor:
                        cryptocurrency.price_change_percentage_24h > 0
                          ? "green"
                          : "red",
                    }}
                  >
                    {cryptocurrency.price_change_percentage_24h}%
                  </span>
                </div>
                <div>
                  {/*======================================================================================================================== */}
                </div>
              </div>
              <CurrencyConverter />

              <Chart />
            </div>
          );
        }
      })}
    </div>
  );
};

//===================================================================================//
//===================================================================================//
const mapStateToProps = (state) => {
  return {
    cryptoData: state.cryptoData,
    selectedCryptoDisplay: state.selectedCryptoDisplay,
  };
};

export default connect(mapStateToProps, {
  setCryptoData,
  // addCryptoData,
  showCryptoData,
  getCryptoPriceHistory,
})(CryptoDataDisplay);

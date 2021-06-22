import React, { useEffect } from "react";
import "./CryptoDataDisplay.css";
import { connect } from "react-redux";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import {
  setCryptoData,
  addCryptoDataToUserCollection,
  getUserById,
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

  console.log(props);
  // props.cryptoData.map((value)=>{
  //   console.log(value)
  // })

  return (
    <div className="crypto__data__display">
      {props.cryptoData.map((cryptocurrency) => {
        if (cryptocurrency.id === props.selectedCryptoDisplay.id) {
          // console.log(cryptocurrency);
          console.log(props.selectedCryptoDisplay);

          // let selectedCryptoData = props.selectedCryptoDisplay.data;

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
                <div>

         
                <a href={props.selectedCryptoDisplay.data.links.homepage[0] } target="_blank"> {props.selectedCryptoDisplay.data.links.homepage[0]}</a>
                </div>
                <p className="crypto__data__display__symbol">
                  {/* {selectedCryptoData.symbol.toUpperCase()} */}
                  {cryptocurrency.symbol.toUpperCase()}
                  {/* <div className="favorite__icon"> {<StarBorderIcon/>}</div> */}
                  <button className="favorite__icon" 
                  // onClick={ props.addCryptoDataToUserCollection(props.selectedUser.id,props.selectedCryptoDisplay.id)}
                  > 
                  {/* {`Add To Collection `}<StarBorderIcon/></button> */}
                  {`Add To Collection`}</button>
                </p>

                <p className="crypto__data__display__rank">
                  Rank #{cryptocurrency.market_cap_rank}
                </p>


               
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

              {cryptocurrency.id === props.selectedCryptoDisplay.id?<div className="crypto__data__display__description">
                <h3> What is {cryptocurrency.name}?</h3>
                <p >{props.selectedCryptoDisplay.data.description.en}</p>
                </div>: null }
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
    selectedUser: state.selectedUser,
  };
};

export default connect(mapStateToProps, {
  setCryptoData,
  // addCryptoData,
  getUserById,
  addCryptoDataToUserCollection,
  showCryptoData,
  getCryptoPriceHistory,
})(CryptoDataDisplay);

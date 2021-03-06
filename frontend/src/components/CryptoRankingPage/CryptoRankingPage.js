import React, { useEffect, useState, useRef } from "react";
import jwt_decode from "jwt-decode";
import "./CryptoRankingPage.css";
import { connect } from "react-redux";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import {
  setCryptoData,

  showCryptoData,
  getCryptoPriceHistory,
  getAllUsers,
  addCryptoDataToUserCollection,
  getUserById,
} from "../../store/actions/actionCreators";
import CryptoDataDisplay from "../CryptoDataDisplay/CryptoDataDisplay";

//===================================================================================//
//===================================================================================//

//===================================================================================//
//===================================================================================//

const CryptoRankingPage = (props) => {
    console.log(props)
  useEffect(() => {
    if (window.localStorage.getItem("jwtToken")) {
      let token = window.localStorage.getItem("jwtToken");
      let decoded = jwt_decode(token);
      console.log(decoded.id);
      props.setCryptoData();
      props.getAllUsers();
      props.getUserById(decoded.id);
    } else {
      props.setCryptoData();
      props.getAllUsers();
    //   props.getUserById(decoded.id);
    }
  }, []);

  const cardMenuRef = useRef();
  //===================================================================================//
  //===================================================================================//

  //===================================================================================//
  //===================================================================================//

  const cryptoCardMenuOptions = (e) => {
    // console.log(props.showCryptoData(e));
    if (window.localStorage.getItem("jwtToken")) {
      let token = window.localStorage.getItem("jwtToken");
      let decoded = jwt_decode(token);
      console.log(decoded.id);

      return (
        props.showCryptoData(e),
        props.addCryptoDataToUserCollection(decoded.id, e)
      );
    } else {
      alert(`Login to your account to add to your Collection`);
    }

    console.log(props);
  };

//   props.cryptoData.map((value)=>{
//       console.log(value)
//   })
  //===================================================================================//
  //===================================================================================//
  return (
    <div className="crypto__ranking__container">
      <div className="search__length">
        {" "}
        showing Top {props.cryptoData.length}{" "}
      </div>
      <br />
      <div className="coin__info">
        {/* <div className="search__length"> showing Top {coinsPerPage} of Page {pageNumber} </div>  */}
        {props.cryptoData.map((cryptocurrency) => (
          <div
            key={cryptocurrency.id}
            className="coin__card"
            onClick={() => {
              props.showCryptoData(cryptocurrency.id);
            }}
          >
            {console.log(cryptocurrency)}
            {/* <button className="favorite__icon" alt="Add To Collection" onClick={()=> console.log('csdsd')}> {!collect?<StarBorderIcon onClick={()=> setCollect(false)}/>:<StarIcon onClick={()=> setCollect(true)} />}</button> */}
            {/* {<FavoriteBorderIcon/>} */}
            <div className="card__rank">
              {" "}
              Rank: {cryptocurrency.market_cap_rank} {<br />}{" "}
              <strong> ( {cryptocurrency.symbol.toUpperCase()} )</strong>{" "}
            </div>
            <div className="card__menu__options">
              <select
                className="card__menu__select__option"
                ref={cardMenuRef}
                onChange={() => cryptoCardMenuOptions(cryptocurrency.id)}
              >
         
                {/* <option></option> */}
                <option
                  value={cryptocurrency.id}
                >{`Add ${cryptocurrency.symbol.toUpperCase()} To Collection`}
                </option>
              </select>
            </div>
            {/* <div className="card__marketcap"> MCap: {cryptocurrency.market_data.market_cap.usd.toLocaleString("en-US",currencyObj)}</div> */}
            {/* <div className="card__circulating__supply">Circulating Supply:{<br/>} {Number(cryptocurrency.market_data.circulating_supply).toLocaleString("en-US")} <strong> {cryptocurrency.symbol.toUpperCase()}</strong></div> */}

            {/* <div className="card__marketcap">MCap: {cryptocurrency.market_data.market_cap.usd.toLocaleString("en-US",currencyObj)}</div> */}
            <img
              className="card__image"
              src={cryptocurrency.image}
              alt={cryptocurrency.name}
            />
            <div className="card__name">{cryptocurrency.name}</div>

            <div className="card__price">
              {" "}
              USD: {"  "}${cryptocurrency.current_price}
              {/* <div className="card__price"> USD:  {"  "}{cryptocurrency.market_data.current_price.usd.toLocaleString("en-US",currencyObj)}  */}
              <hr />
              {/* <div></div> */}
              {/* BTC: ???{cryptocurrency.market_data.current_price.btc} */}
              {/* <hr/>  */}
              {/* ETH: {cryptocurrency.market_data.current_price.eth} */}
              {/* <hr/>     */}
            </div>
          </div>
        ))}
      </div>
      <CryptoDataDisplay />
    </div>
  );
};

//===================================================================================//
//===================================================================================//
const mapStateToProps = (state) => {
  return {
    cryptoData: state.cryptoData,
    selectedCryptoDisplay: state.selectedCryptoDisplay,
    userData: state.userData,
    selectedUser: state.selectedUser,
  };
};

//===================================================================================//
//===================================================================================//

export default connect(mapStateToProps, {
  setCryptoData,
  showCryptoData,
  getCryptoPriceHistory,
  getAllUsers,
  addCryptoDataToUserCollection,
  getUserById,
})(CryptoRankingPage);
// export default CryptoRankingPage;

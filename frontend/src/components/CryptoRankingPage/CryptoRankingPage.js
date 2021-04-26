import React, { useEffect, useRef } from "react";
import "./CryptoRankingPage.css";
import { connect } from "react-redux";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {
setCryptoData,
// addCryptoData,
showCryptoData,
getCryptoPriceHistory,getAllUsers
} from "../../store/actions/actionCreators";
import CryptoDataDisplay from "../CryptoDataDisplay/CryptoDataDisplay";
import cryptoDataReducer from "../../store/reducers/cryptoDataReducer";

//===================================================================================//
//===================================================================================//

const CryptoRankingPage = (props) => {
useEffect(() => {
    
    
    props.setCryptoData();
    props.getAllUsers()
},[]);

// console.log(props)
//===================================================================================//
//===================================================================================//
return (
    
    <div className="crypto__ranking__container">
    <div className="coin__info">
        {/* <div className="search__length"> showing Top {coinsPerPage} of Page {pageNumber} </div>  */}
        {props.cryptoData.map((cryptocurrency) => (


        <div key={cryptocurrency.id} className="coin__card" onClick={()=> {
            
            props.showCryptoData(cryptocurrency.id)
            // props.getCryptoPriceHistory(cryptocurrency.id)
            // props.getAllUsers()

            }} >
            <div className="favorite__icon" alt="Add To Collection"> {<StarBorderIcon/>}</div>
            {/* {<FavoriteBorderIcon/>} */}
            <div className="card__rank">
            {" "}
            Rank: {cryptocurrency.market_cap_rank} {<br />}{" "}
            <strong> ( {cryptocurrency.symbol.toUpperCase()} )</strong>{" "}
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
            {/* <div className="current__price">  Price</div> */}
            <div className="card__price">
            {" "}
            USD: {"  "}
            {cryptocurrency.current_price}
            {/* <div className="card__price"> USD:  {"  "}{cryptocurrency.market_data.current_price.usd.toLocaleString("en-US",currencyObj)}  */}
            <hr />
            {/* BTC: ₿{cryptocurrency.market_data.current_price.btc} */}
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
    userData: state.userData
};
};

//===================================================================================//
//===================================================================================//

export default connect(mapStateToProps, { setCryptoData, showCryptoData,getCryptoPriceHistory,getAllUsers })(
CryptoRankingPage
);
// export default CryptoRankingPage;

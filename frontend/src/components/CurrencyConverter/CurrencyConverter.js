import React, { useRef, useEffect } from "react";
import "./CurrencyConverter.css";
import { connect } from "react-redux";
import { showCryptoData } from "../../store/actions/actionCreators";


//===================================================================================//
//===================================================================================//
const CurrencyConverter = (props) => {
const baseCurrencyRef = useRef();
const quoteCurrencyRef = useRef();

const baseCurrencyDropdownRef = useRef()
//===================================================================================//
//===================================================================================//
//   useEffect(() => {
//     // props.showCryptoData(props.selectedCryptoDisplay);
//     props.setCryptoData();
//   }, []);



let selectedCryptoData = props.selectedCryptoDisplay.data;


//===================================================================================//
//===================================================================================//
return (
    <div className="crypto__data__display__currency__converter">
    <h3>Cryptocurrency Converter Calculator</h3>
    {/* ========================================================================================================== */}


    <input
        className="base__currency__input"
        placeholder="1"
        ref={baseCurrencyRef}
        onChange={() => {
        quoteCurrencyRef.current.value = baseCurrencyRef.current.value * selectedCryptoData.market_data.current_price.usd  ;
        }}
    />
    
    <select className="base__currency__dropdown" onChange={()=>{
        console.log(props)
        // if(props.)
            }}
        >
        <option>{selectedCryptoData.symbol.toUpperCase()} </option>

        {props.cryptoData.map((value) => {
        return (
            <option value={value.id}>
            {value.name} ({value.symbol.toUpperCase()})
            </option>
        );
        })}
    </select>


    <div>=</div>

    <input
        className="quote__currency__input"
        type="number"
        placeholder={selectedCryptoData.market_data.current_price.usd}
        ref={quoteCurrencyRef}
        onChange={() => {
        baseCurrencyRef.current.value = quoteCurrencyRef.current.value / selectedCryptoData.market_data.current_price.usd ;
        
        }}
       
    />
    <select className="quote__currency__dropdown" onChange={()=>{console.log(baseCurrencyDropdownRef.current.value) 
        props.showCryptoData(baseCurrencyDropdownRef.current.value)}}  ref={baseCurrencyDropdownRef}>
        <option>USD </option>

        {props.cryptoData.map((value) => {
        return <option  key={value.id} value={value.id}>{value.symbol.toUpperCase()}</option>;
        })}
    </select>
    {/* ========================================================================================================== */}

   
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
//===================================================================================//
//===================================================================================//
export default connect(mapStateToProps, { showCryptoData })(CurrencyConverter);

import React, { useEffect, useRef } from "react";
import {BrowserRouter as Router, Route,Link } from "react-router-dom"
import "./Search.css";
import UserProfile from '../UserProfile/UserProfile'
import { connect } from "react-redux";
import { setCryptoData, getAllUsers ,showCryptoData,getUserById} from "../../store/actions/actionCreators";

import Select from "react-select";
// import { colourOptions } from "./docs/data";

const Search = (props) => {


  const searchRef = useRef();
  console.log(props);


  let cryptocurrenciesObj={}
  let peopleObj={}

  //===================================================================================//
  //===================================================================================//
  const cryptos = props.cryptoData.map((value) => {
    // console.log(value)
      const newObj = {
        value: value.id,
        label: `${value.name} (${value.symbol.toUpperCase()})`,
      };
      cryptocurrenciesObj = newObj
      return cryptocurrenciesObj;
    });
  
  // console.log(cryptocurrenciesObj)
  //===================================================================================//
  //===================================================================================//

  const users = props.userData.map((value) => {
    // console.log(value)
    const newObj = {
      value: value._id,
      label: `@${value.username}`,
    };
    peopleObj = newObj
    
    return peopleObj;
  });
  //===================================================================================//
  //===================================================================================//


  const searchFilter = (id) => { 
    // console.log(searchRef.current.state.value)
    const dropdownSearchOptions = searchRef.current.props.options;
    let cryptocurrencies = {};
    let people = {};
    dropdownSearchOptions.map((searchOptions) => {

      if (searchOptions.label === "Cryptocurrencies") {
        cryptocurrencies = searchOptions;


        return cryptocurrencies;
      }
      if (searchOptions.label === "People") {
        people = searchOptions;
        return people;
      }
    });
    cryptocurrencies.options.map((value)=>{
      // id=value.value
      cryptocurrenciesObj=value
      return cryptocurrenciesObj
    })
    people.options.map((value)=>{
      peopleObj = value
      return peopleObj
    })

  };
  //===================================================================================//
  //===================================================================================//


  const groupedOptions = [
    {
      label: "People",

      options: users,
    },
    {
      label: "Cryptocurrencies",
      options: cryptos,
      // options: cryptocurrenciesObj,
    },
  ];
  //===================================================================================//
  //===================================================================================//

  const groupStyles = {
    display: "flex",
    fontSize: 13,
    // backgroundColor: "#EBECF0",
    backgroundColor: "#5DB268",
    color: "white",
    padding: "1em 1em",
    // display: 'grid',
    alignItems: "center",
    justifyContent: "space-between",
  };
  //===================================================================================//
  //===================================================================================//

  const groupBadgeStyles = {
    backgroundColor: "#EBECF0",
    borderRadius: "2em",
    color: "#172B4D",
    display: "inline-block",
    fontSize: 13,
    fontWeight: "normal",
    lineHeight: "1",
    minWidth: 1,
    padding: "0.16666666666667em 0.5em",
    // padding: '10em 10em',
    textAlign: "center",
  };
  //===================================================================================//
  //===================================================================================//

  const formatGroupLabel = (data) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );
  //==================================================================================//
  //===================================================================================//

  return (
    <Select

options={groupedOptions}

formatGroupLabel={formatGroupLabel}
onChange={(e) => {
  
  // e.label[0]==='@' ? <Router> <Route exact path="/profile" component={UserProfile}/> </Router> :props.showCryptoData(e.value)
  
  {e.label[0]==='@' ?props.getUserById(e.value) :props.showCryptoData(e.value)}
  

  // {props.showUserProfile(e.value)}
  
  
}}
ref={searchRef}
/>
  );
};

//===================================================================================//
//===================================================================================//
const mapStateToProps = (state) => {
  return {
    cryptoData: state.cryptoData,
    selectedCryptoDisplay: state.selectedCryptoDisplay,
    userData: state.userData,
  };
};

export default connect(mapStateToProps, { setCryptoData, getAllUsers,showCryptoData,getUserById })(Search);

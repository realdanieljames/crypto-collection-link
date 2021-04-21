import React from "react";
import "./Search.css";

import Select from "react-select";
import { colourOptions, groupedOptions } from "./docs/data";




const Search =(props)=>{
  console.log(props)

  const groupStyles = {
    display: "flex",
    // display: 'grid',
    alignItems: "center",
    justifyContent: "space-between",
  };
  const groupBadgeStyles = {
    backgroundColor: "#EBECF0",
    borderRadius: "2em",
    color: "#172B4D",
    display: "inline-block",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: "1",
    minWidth: 1,
    padding: "0.16666666666667em 0.5em",
    // padding: '10em 10em',
    textAlign: "center",
  };
  
  const formatGroupLabel = (data) => (
    <div style={groupStyles}>
  <span>{data.label}</span>
  <span style={groupBadgeStyles}>{data.options.length}</span>
</div>
);

  return (

    <Select
  defaultValue={colourOptions[1]}
  // defaultValue={"Search"}
  options={groupedOptions}
  formatGroupLabel={formatGroupLabel}
  />

  )
  
}

export default Search
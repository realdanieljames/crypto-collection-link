import React from 'react'
import './Search.css'

const Search = () => {

    const searchBar = 
      // <div className="search__element">
    //   <nav className="search__element">

      <input 
          className="search__input"
          type="text"
          placeholder=" Search"
        //   value={searchValue}
        //   onChange={(e)=> handleSearchInput(e.target.value)}
          />
      {/* <button 
        className="search__button"
        // onClick={handleSearchButton}
        >Search
      </button>     */}
      {/* // </div> */}

//  </nav>
    return (
        <div className="search__element">
            {searchBar}
        </div>
    )
}

export default Search

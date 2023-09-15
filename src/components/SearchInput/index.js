import React from "react";


const Search =({ value, onChange, onKeyDown }) => {
  function handleChange(event) {
    onChange(event.target.value);
  }
  
  return(
    <div className="Input">
      <input type="search"  
      value={value} 
      onChange={handleChange}
      onKeyDown={onKeyDown}
      placeholder="Pesquisar "  />
    </div>
  )
}

export default Search;
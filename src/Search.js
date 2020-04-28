import React, { useState } from "react";

/** Generic search bar.
 *    States:
 *      formData: The content of the input.
 *    Props:
 *      submitSearch: Function that updates parent state. 
 */    

function Search({ submitSearch }) {
  const [ formData, setFormData ] = useState("");

  // Ensures the user input is stored in state.
  function controlSearch(evt) {
    const value = evt.target.value;
    
    setFormData(value);
  }

  // Fires the function passed in from the parent to update the parent's state.
  function handleSubmit(evt) {
    evt.preventDefault();

    submitSearch(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" onChange={controlSearch} placeholder="Enter search term..." value={formData}></input>
      <button>Search</button>
    </form>
  )
}

export default Search;

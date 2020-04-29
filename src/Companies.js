import React, { useEffect, useState } from "react";
import JoblyApi from "./JoblyApi"
import CompanyCard from "./CompanyCard"
import Search from "./Search";

// Include state "isLoading" or something so we can show people things are working while it loads inplace of 
// of the companies ternary in the return statement.

/** List of companies, data comes from API.
 *    States:
 *      companies: Array of company objects, used to provide data for CompanyCards.
 *      searchTerm: User-input string, provided to the API.
 */

function Companies() {
  const [ companies , setCompanies ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");

  // Gets the data from the API. Uses the searchTerm state to filter results if one exists.
  useEffect(() => {
      async function fetchCompanies (term) {
        try {
          const companiesResult = await JoblyApi.getCompanies(term);
          setCompanies(companiesResult);
        } catch(err) {
          //something...? Put an alert
        }
      }
        fetchCompanies(searchTerm);
  },[searchTerm])

  // Sets the searchTerm state based on the content of the Search child component.
  function submitSearch(term) {
    setSearchTerm(term);
  }

  return (
    <div>
      <h1>Partner Companies</h1>
      <Search submitSearch={submitSearch} />
      {companies ? 
        companies.map(c => 
        <CompanyCard key={c.handle} company={ c }/>)
        :
        <div></div>
      }
    </div>
  )
}

export default Companies;
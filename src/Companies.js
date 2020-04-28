import React, { useEffect, useState } from "react";
import JoblyApi from "./JoblyApi"
import CompanyCard from "./CompanyCard"

function Companies() {
  const [ companies , setCompanies ] = useState([]);

  useEffect(() => {
      async function fetchCompanies () {
        const companiesResult = await (JoblyApi.getCompanies());
        setCompanies(companiesResult);
      }
      fetchCompanies();
  },[])


  return (
    <div>
      <h1>You found the companies!</h1>
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
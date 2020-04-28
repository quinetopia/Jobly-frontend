import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyApi"

function Company(){
  const { handle } = useParams();
  const [ company, setCompany] = useState({});

  useEffect(() => {
    async function fetchCompany () {
      const companyResult = await (JoblyApi.getCompany(handle));
      setCompany(companyResult);
    }
    fetchCompany();
},[])


  return(
    <div>
      {company ? company.name : "No data"}
    </div>
  )
}

export default Company;
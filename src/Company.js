import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard";

/** Component for a single company page. 
 *   Params:
 *     handle: the company handle, used to get the appropriate data from the API.
 *  States:
 *    company: an object containing the data for the company.
 */

function Company(){
  const { handle } = useParams();
  const [ company, setCompany] = useState({});

  // Requests data from the api using the handle from params.
  useEffect(() => {
    async function fetchCompany () {
      try {
        const companyResult = await (JoblyApi.getCompany(handle));
        setCompany(companyResult);
      } catch(err) {
        // if there's an error, update state to manage later.
        setCompany({error:true});
      }
    }
    fetchCompany();
  },[]);

  // If there was an error, redirect back to company list.
  if (company.error) return <Redirect to="/companies" />

  return(
    <div>
      {company.name ?
        <div>
          <h1>{company.name}</h1>
          <h3>{company.description}</h3>
          <div>
            { company.jobs.map(j => <JobCard key={j.id} job={j} />) }  
          </div>
        </div>
      : <div>
          <h1>Loading...</h1>
        </div>
      }
    </div>
  )
}

export default Company;
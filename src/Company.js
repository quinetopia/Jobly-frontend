import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard";

/** Component for a single company page. 
 *   Params:
 *     handle: the company handle, used to get the appropriate data from the API.
 *  States:
 *    company: an object containing the data for the company.
 *    error: Tracks errors and determines what to show users
 *    loading: determines what to show users while waiting on API call
 */

function Company(){
  const { handle } = useParams();
  const [ company, setCompany] = useState({});
  const [ error, setError ] = useState({status: false, message: "There has been an error."});
  const [ loading, setLoading ] = useState(true);

  // Requests data from the api using the handle from params.
  useEffect(() => {
    async function fetchCompany () {
      try {
        const companyResult = await (JoblyApi.getCompany(handle));
        setCompany(companyResult);
        setLoading(false);
      } catch(err) {
        if (err.status === 404) {
          setError({status: true, message: err.message});
        } else {
          setError(oldError => ({...oldError, status: true}) );
        }
      }
    }
    fetchCompany();
  },[]);

  return(
    <div>
      {error.status 
        ? <h1>{error.message}</h1>
        : ""
      }
      { loading && !error.status
        ? <h1>Loading...</h1>
        : "" 
      }
      { !loading && !error.status
        ? <div>
            <h1>{company.name}</h1>
            <h3>{company.description}</h3>
            <div>
              { company.jobs.map(j => <JobCard key={j.id} job={j} />) }  
            </div>
          </div>
        : ""
      }
    </div>
  )
}

export default Company;
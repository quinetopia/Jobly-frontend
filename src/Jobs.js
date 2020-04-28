import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard";
import Search from "./Search";

/** Lists all jobs based on data from the API.
 *    States: 
 *      jobs: Array of objects with the job data.
 *      searchTerm: User-input string to provide to the API request.
 */

function Jobs() {
  const [ jobs , setJobs ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");

  // Sends request to API to get jobs data. Sends the searchTerm.
  useEffect(() => {
      async function fetchJobs(term) {
        try {
          const JobsResult = await (JoblyApi.getJobs(term));
          setJobs(JobsResult);
        } catch(err) {
          //somehting...?
        }
      }
      fetchJobs(searchTerm);
  },[searchTerm]);

  // Updates the searchTerm state with the content of the Search child component.
  function submitSearch(term) {
    setSearchTerm(term);
  }

  return (
    <div>
      <h1>Available Jobs!</h1>
      <Search submitSearch={submitSearch} />
      {jobs[0] ? 
        jobs.map(j => 
        <JobCard key={j.id} job={ j }/>)
        :
        <h1>Loading...</h1>
      }
    </div>
  );
}

export default Jobs;
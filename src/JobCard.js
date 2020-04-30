import React, { useContext, useState, useEffect } from "react";
import "./JobCard.css";
import JoblyApi from "./JoblyApi";
import LoginContext from "./LoginContext"

/** Displays some details about the job.
 *    Props:
 *      job: An object containing job data.
 *    State:
 *      Error: For error handling and filters for presentation
 *    context:
 *      user: User required for application and to filter 
 *            presentation of which jobs have been applied for
 * 
 * Consider refactor to seperate out presentation and logic.
 */

function JobCard({ job }) {
  const { user, setUser } = useContext(LoginContext);
  const [ error, setError ] = useState({status: false, message: "There has been an error."})

  // makes request to JoblyApi to apply for job for user
  async function handleClick(id) {
    try {
      console.log("id: ", id, "username: ", user.username)
      const res = await JoblyApi.applyJob(id, user.username)
      console.log("response: ", res)
      if (res === "applied") {
        setUser(user => {
          let newJobs = [...user.jobs,  job ];
          console.log("overwriting user: ", user, "newJobs", newJobs)
          return {...user, jobs:newJobs};
        })
      }
    }catch(err){
      setError({status: true, message:err.message});
    }
  }

  // Check if job has been applied for
  let applied = false;
  if (user) {
    if (user.jobs.find(j => j.id===job.id)) applied = true;
  }

  return(
    <div className="JobCard">
      <h3>{job.title}</h3>
      <h3>Salary: {job.salary}</h3>
      <h3>Equity: {job.equity}</h3>
      { applied
      ?
        <p>Applied</p>
      :
        <button onClick={() => handleClick(job.id)}>Apply</button>
      }
      { error.status
      ? 
        <h4>There was an error applying. Please try again later.</h4>
      :
        ""
      }
    </div>
  );
}

export default JobCard;
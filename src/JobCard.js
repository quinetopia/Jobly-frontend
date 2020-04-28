import React from "react";
import "./JobCard.css";

/** Displays some details about the job.
 *    Props:
 *      job: An object containing job data.
 */

function JobCard({ job }) {

  return(
    <div className="JobCard">
      <h3>{job.title}</h3>
      <h3>Salary: {job.salary}</h3>
      <h3>Equity: {job.equity}</h3>
      <button>Apply</button>
    </div>
  );
}

export default JobCard;
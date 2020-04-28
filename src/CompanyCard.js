import React from "react"
import { Link } from "react-router-dom"

function CompanyCard({ company }) {

  const linkURL=`companies/${company.handle}`

  return(
    <div>
      <Link to={linkURL}>
        <h2>{company.name}</h2>
        <h3>{company.description}</h3>
      </Link>
    </div>
  )

}

export default CompanyCard;
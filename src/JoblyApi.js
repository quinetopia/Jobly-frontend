import axios from "axios"


class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = ( // for now, hardcode token for "testing"
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
    "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
    "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData})).data;
        // axios sends query string data via the "params" key,
        // and request body data via the "data" key,
        // so the key we need depends on the HTTP verb
    }

    catch(err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Requests data about a single company using the handle.
  static async getCompany(handle) {
    console.log("handle: ",handle)
    let res = await this.request(`companies/${handle}`);
    console.log("From getCompany:", res);
    return res.company;
  }

  // Requests data about all companies, can be modified by a search term.
  static async getCompanies(term) {
    let res = await this.request(`companies?search=${term}`);
    return res.companies;
  }

  // Requests data about all jobs, can be modified by a search term.
  static async getJobs(term) {
    let res = await this.request(`jobs?search=${term}`);
    return res.jobs;
  }

}

export default JoblyApi;
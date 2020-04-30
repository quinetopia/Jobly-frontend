import axios from "axios"


class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = localStorage.getItem("_token");

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
      let errorObj = {status: err.response.data.error.status, message: err.response.data.message};
      throw errorObj;
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

  // Posts user login credentials and recieves back token for future requests
  static async loginUser(userCredentials) {
    let res = await this.request(`login`, userCredentials, "post");
    return res.token;
  }

  // Posts new user data to create new user. 
  // Receives back token for future requests
  static async registerUser(registrationData) {
    let res = await this.request('users', registrationData, "post");
    return res.token
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

}

export default JoblyApi;
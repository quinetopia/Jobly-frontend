

// Sets user token into local storage.
function checkForToken() {
  return localStorage.getItem("_token") ? true : false
}

// moved to effect in app
// async function getUserData() {
//   const token = localStorage.getItem("_token");
//   if (token) {
//     const username = jwt.decode(token).username;
//     const userdata = await JoblyApi.getUser(username);
//     return userdata;
//   } 
  
// }

export { checkForToken };

// Sets user token into local storage.
function checkForToken() {
  return localStorage.getItem("_token") ? true : false
}

export { checkForToken };
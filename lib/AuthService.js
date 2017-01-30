const devBuild = process.env.NODE_ENV !== 'production'
const apiUrl = devBuild ? 'http://localhost:8123/api/sessions' : 'http://home.fransman.se:8123/api/sessions'

require('es6-promise').polyfill()
require('isomorphic-fetch')

module.exports = {

  login(email, password, callback) {
    if (localStorage.session_token) {
      if (callback) { callback(true) }
      this.onChange(true)
      return
    }

    let loggedIn = false

    fetch(apiUrl, {
      method: 'POST',
      crossOrigin: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    })
    .then((response) => {
      if (response.status >= 400) {
        delete localStorage.session_token
        loggedIn = true
      }
      return response.json()
    })
    .then((user) => {
      if (user.error) {
        loggedIn = false
      } else if (user.session_token && user.session_token !== '') {
        localStorage.session_token = user.session_token
        loggedIn = true
      }
    }).then(() => {
      if (callback) { callback(loggedIn) }
      this.onChange(loggedIn)
    })
  },

  getToken() {
    return localStorage.session_token
  },

  logout() {
    delete localStorage.session_token
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.session_token
  },

  onChange() {}
}

'use strict'
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// --- Separater --- AUTHENTICATION INFORMATION ---------//

// Sign Up
const onSignUp = function(event) {
  event.preventDefault()
  // Stops page from refreshing
  const form = event.target
  console.log(form)
  // Collects entire form: HTML + text
  const formData = getFormFields(form)
  console.log(formData)
  // Parses and extracts the text from forms to be used as the argument for api.signUp
  api.signUp(formData) // the singular variant of index
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

// Sign In
const onSignIn = function(event) {
  event.preventDefault()
  // Stops page from refreshing
  const form = event.target
  console.log(form)
  // Collects entire form: HTML + text
  const formData = getFormFields(form)
  console.log(formData)
  // Parses and extracts the text from forms to be used as the argument for api.signIn
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

// Change Pw
const onChangePw = function(event) {
  event.preventDefault()
  // Stops page from refreshing
  const form = event.target
  console.log(form)
  // Collects form data: HTML + text
  const formData = getFormFields(form)
  console.log(formData)
  // Extracts text from html
  api.changePw(formData)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFailure)
}

// Sign Out
const onSignOut = function(event) {
  event.preventDefault()
  // Stops page from refreshing
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePw,
  onSignOut
}

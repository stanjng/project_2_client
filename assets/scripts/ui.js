'use strict'

const store = require('./store.js')

// General Success Messages
const successMessage = function(displayText) {
  $('#auth-msgs').text(displayText)
  setTimeout(function() {
    $('#auth-msgs').text('')
  }, 3000)
}

const failureMessage = function(displayText) {
  $('#auth-msgs').text(displayText)
  setTimeout(function() {
    $('#auth-msgs').text('')
  }, 3000)
}

// --------------------------------------- SIGN UP
const onSignUpSuccess = function() {
  $('#sign-up').trigger('reset')
  // Clears forms
  successMessage('Sign up successful! Please login.')
}

const onSignUpFailure = function() {
  $('#sign-up').trigger('reset')
  failureMessage('Sign up failed.')
}

// --------------------------------------- SIGN IN
const onSignInSuccess = function(responseData) {
  $('#sign-in').trigger('reset')
  // Clears forms
  successMessage('Sign in successful!')
  store.user = responseData.user
  console.log(store.user)
  // Stores key
  $('#sign-in').hide()
  $('#sign-up').hide()
  // Hides sign in & up forms
  $('#change-pw').show()
  $('#sign-out').show()
  // Shows change-pw & sign
  $('#pills-profile-tab').removeAttr('class')
  $('#pills-profile-tab').attr('class', 'nav-link')
  // Enables auth-protected tabs
}

const onSignInFailure = function() {
  $('#sign-in').trigger('reset')
  failureMessage('Sign in failed. Please try again.')
}

// --------------------------------------- CHANGE PW
const onChangePwSuccess = function() {
  successMessage('Password change successful. Please login.')
  // Clear forms
  $('#sign-in').show()
  $('#sign-up').show()
  // Shows sign in & up forms
  $('#change-pw').hide()
  $('#sign-out').hide()
  // Hides change-pw & sign-out forms
  $('#pills-profile-tab').removeAttr('class')
  $('#pills-profile-tab').attr('class', 'nav-link disabled')
  // Disables auth-protected tabs
}

const onChangePwFailure = function() {
  $('#change-pw').trigger('reset')
  failureMessage('Password change unsuccesful. Please try again.')
}

// --------------------------------------- SIGN OUT
const onSignOutSuccess = function() {
  successMessage('Sign out. Please login again.')
  $('#sign-in').show()
  $('#sign-up').show()
  // Shows sign in & up forms
  $('#change-pw').hide()
  $('#sign-out').hide()
  // Hides change-pw & sign-out forms
  $('#pills-profile-tab').removeAttr('class')
  $('#pills-profile-tab').attr('class', 'nav-link disabled')
}

const onSignOutFailure = function () {
  failureMessage('Sign out unsuccessful. Contact the administrator or close your browser.')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFailure,
  onSignOutSuccess,
  onSignOutFailure
}

'use strict'

const store = require('./store.js')
const smoothieHandlebar = require('./templates/smoothies.handlebars')
const selectHandlebar = require('./templates/select.handlebars')

// General Success Messages
const successMessage = function(successText, displayText) {
  $('#auth-msgs').text(successText)
  setTimeout(function() {
    $('#auth-msgs').text(displayText)
  }, 1800)
}

const failureMessage = function(failureText, displayText) {
  $('#auth-msgs').text(failureText)
  setTimeout(function() {
    $('#auth-msgs').text(displayText)
  }, 1800)
}

// --------------------------------------- SIGN UP
const onSignUpSuccess = function() {
  $('#sign-up').trigger('reset')
  // Clears forms
  successMessage('Sign up successful! Please login.', 'Please login or sign up.')
}

const onSignUpFailure = function() {
  $('#sign-up').trigger('reset')
  failureMessage('This email is already registered. Please login.', 'Please login or sign up.')
}

// --------------------------------------- SIGN IN
const onSignInSuccess = function(responseData) {
  successMessage('Sign in successful!', 'Change password or sign out.')
  store.user = responseData.user
  console.log(store.user)
  // Stores key
  $('#sign-in').trigger('reset')
  // Clears forms
  $('#sign-in').hide()
  $('#sign-up').hide()
  // Hides sign in & up forms
  $('#change-pw').show()
  $('#sign-out').show()
  // Shows change-pw & sign
  $('.create-new-smoothie').removeAttr('disabled')
  $('.view-smoothies-modal').removeAttr('disabled')
  $('.view-single-smoothie-div').removeAttr('disabled')
  // Enables create and views buttons
  $('.login-button').text('Signed In')
  // Changes button upon sign in.
}

const onSignInFailure = function() {
  failureMessage('Sign in failed. Please try again.', 'Please login or sign up.')
  $('#sign-in').trigger('reset')
}

// --------------------------------------- CHANGE PW
const onChangePwSuccess = function() {
  successMessage('Password change successful. Please login.', 'Please login or sign up.')
  $('#change-pw').trigger('reset')
  // Clear forms
  $('#sign-in').show()
  $('#sign-up').show()
  // Shows sign in & up forms
  $('#change-pw').hide()
  $('#sign-out').hide()
  // Hides change-pw & sign-out forms
  $('.create-new-smoothie').attr('disabled', true)
  $('.view-smoothies-modal').attr('disabled', true)
  $('.view-single-smoothie-div').attr('disabled', true)
  // Disables create and views buttons
  $('.login-button').text('Login')
  // Changes button/modal titles upon change pw.
}

const onChangePwFailure = function() {
  $('#change-pw').trigger('reset')
  failureMessage('Password change unsuccesful. Please try again.', 'Change password or sign up.')
}

// --------------------------------------- SIGN OUT
const onSignOutSuccess = function() {
  successMessage('Signed out! Please login again.', 'Please login or sign up.')
  $('#sign-in').show()
  $('#sign-up').show()
  // Shows sign in & up forms
  $('#change-pw').hide()
  $('#sign-out').hide()
  // Hides change-pw & sign-out forms
  $('.create-new-smoothie').attr('disabled', true)
  $('.view-smoothies-modal').attr('disabled', true)
  $('.view-single-smoothie-div').attr('disabled', true)
  // Disables create and views buttons
  $('.login-button').text('Login')
  // Changes button/modal titles upon sign out.
}

const onSignOutFailure = function() {
  failureMessage('Sign out unsuccessful. Contact the administrator or close your browser.', 'Change password or sign out.')
}

// ----------------------------------------
// ----------------------------------------
// CRUD FUNCTIONS
// ----------------------------------------
// ----------------------------------------

const onViewAllSuccess = function(smoothieData) {
  $('.show-smoothies').html(``)
  $('.show-smoothies').append(smoothieHandlebar({
    smoothies: smoothieData.smoothies
  }))
  console.log(smoothieData)
}

const onViewAllFailure = function() {
  $('.show-smoothies').html(``)
  $('.show-smoothies').html(`Something wrong happened.`)
}

const onViewOneSuccess = function(smoothyData) {
  console.log(smoothyData)
  $('.show-smoothies').html(``)
  $('.show-smoothies').append(smoothieHandlebar({
    smoothies: smoothyData
  }))
}

const onViewOneFailure = function() {
  $('#show-smoothies').html(``)
  $('#show-smoothies').html(`Something wrong happened.`)
}

const onCreateSuccess = function() {
  $('#create-smoothie').trigger('reset')
  // $('#smoothie-modal-text').html(`Smoothie created!`)
  // $('#smoothie-modal-text').html(``)
  // setTimeout(function () {
  //   $('#create-smoothie').show()
  // }, 1800)
}

const onCreateFailure = function() {
  $('#create-smoothie').trigger('reset')
  $('#create-smoothie').hide()
  $('#smoothie-modal-text').html(`Smoothie created!`)
  $('#smoothie-modal-text').html(``)
  setTimeout(function() {
    $('#create-smoothie').show()
  }, 1800)
}

const onUpdateSuccess = function(smoothyData) {
  console.log(smoothyData)
  onViewOneSuccess(smoothyData)
  // onViewOneSuccess()
}
const onUpdateFailure = function() {
  console.log("fuck try again")
}

const onDeleteSuccess = function(smoothyData) {
  // $('#example-div-display').html(``)
  // $('#example-div-display').append(selectHandlebar({
  //   smoothies: exampleData.smoothies
  // }))
  $('#example-modal').modal('hide')
}

const onExampleSuccess = function(exampleData) {
  $('#example-div-display').html(``)
  $('#example-div-display').append(selectHandlebar({
    smoothies: exampleData.smoothies
  }))
  $('#delete-smoothie').html(``)
  $('#delete-smoothie').append(selectHandlebar({
    smoothies: exampleData.smoothies
  }))
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onViewAllSuccess,
  onViewAllFailure,
  onViewOneSuccess,
  onViewOneFailure,
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onExampleSuccess
}

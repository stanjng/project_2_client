'use strict'

const store = require('./store.js')
const smoothieHandlebar = require('./templates/smoothies.handlebars')
const selectHandlebar = require('./templates/select.handlebars')

// --------------------------------------- SIGN UP
const onSignUpSuccess = function() {
  $('#sign-up').trigger('reset')
  // Clears forms
  $('.sign-up-btn').text('Sign up successful! Please login.', 'Please login or sign up.')
  setTimeout(() => {
    $('.sign-up-btn').text('Sign Up')
  }, 4000)
}

const onSignUpFailure = function() {
  $('#sign-up').trigger('reset')
  // Clears forms
  $('.sign-up-btn').text('Sign up failed! Email may already be in use.')
  setTimeout(() => {
    $('.sign-up-btn').text('Sign Up')
  }, 4000)
}

// --------------------------------------- SIGN IN
const onSignInSuccess = function(responseData) {
  store.user = responseData.user
  console.log(store.user)
  // Stores key
  $('#sign-in').trigger('reset')
  $('.sign-in-btn').text('Sign in successful!')
  setTimeout(() => {
    $('.sign-in-btn').text('Sign In')
  }, 4000)
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
  $('.auth-modal-title').text('Sign Out or Change Password Here:')
  // Changes button upon sign in.
}

const onSignInFailure = function() {
  $('#sign-in').trigger('reset')
  $('.sign-in-btn').text('Sign in failed! Check your email & password and try again.')
  setTimeout(() => {
    $('.sign-in-btn').text('Sign In')
  }, 4000)
}

// --------------------------------------- CHANGE PW
const onChangePwSuccess = function() {
  $('#change-pw').trigger('reset')
  $('.change-pw-btn').text('Password change successful. Please login again.')
  setTimeout(() => {
    $('.change-pw-btn').text('Change Password')
  }, 4000)
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
  $('.auth-modal-title').text('Login or Sign Up Here:')
  // Changes button/modal titles upon change pw.
}

const onChangePwFailure = function() {
  $('#change-pw').trigger('reset')
  $('.change-pw-btn').text('Password change unsuccesful. Please try again.')
  setTimeout(() => {
    $('.change-pw-btn').text('Change Password')
  }, 4000)
}

// --------------------------------------- SIGN OUT
const onSignOutSuccess = function() {
  successMessage('Signed out! Please login again.', 'Please login or sign up.')
  $('form').trigger('reset')
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
  $('.auth-modal-title').text('Login or Sign Up Here:')
  // Changes button/modal titles upon sign out.
}

const onSignOutFailure = function() {
  $('form').trigger('reset')
  $('.sign-out-btn').text('Sign out failed. Please try again.')
  setTimeout(() => {
    $('.sign-out-btn').text('Sign Out')
  }, 2000)
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
  $('.view-all-smoothies-btn').text('Updated!')
  setTimeout(() => {
    $('.view-all-smoothies-btn').text('View All Smoothies')
  }, 1800)
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
  $('.view-single-btn').text('Check Below!')
  setTimeout(() => {
    $('.view-single-btn').text('View')
  }, 1800)
}

const onViewOneFailure = function() {
  $('#show-smoothies').html(``)
  $('#show-smoothies').html(`Something wrong happened.`)
}

const onCreateSuccess = function() {
  $('#create-smoothy').trigger('reset')
  $('.save-smoothie-btn').text('Smoothie saved!')
  setTimeout(() => {
    $('.save-smoothie-btn').text('Save Smoothie')
  }, 1800)
}

const onCreateFailure = function() {
  $('#create-smoothy').trigger('reset')
  $('.save-smoothie-btn').text('Something went wrong!')
  setTimeout(() => {
    $('.save-smoothie-btn').text('Save Smoothie')
  }, 1800)
}

const onUpdateSuccess = function(smoothyData) {
  console.log(smoothyData)
  onViewOneSuccess(smoothyData)
  // onViewOneSuccess()
  $('#update-smoothy').trigger('reset')
  $('.update-smoothie-btn').text('Smoothie saved!')
  setTimeout(() => {
    $('.update-smoothie-btn').text('Modify Smoothie')
  }, 1800)
}
const onUpdateFailure = function() {
  console.log('fuck try again')
}

const onDeleteSuccess = function(smoothyData) {
  $('.delete-single-btn').text(`Success! Please 'x' out of window.`)
  setTimeout(() => {
    $('.delete-single-btn').text('Delete')
  }, 4000)
}

const onShowSuccess = function(exampleData) {
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
  onShowSuccess,
  onDeleteSuccess
}

'use strict'
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')

// --- Separater --- AUTHENTICATION INFORMATION ---------//

// Sign Up
const onSignUp = function (event) {
  event.preventDefault()
  // Stops page from refreshing
  const form = event.target
  // Collects entire form: HTML + text
  const formData = getFormFields(form)
  // Parses and extracts the text from forms to be used as the argument for api.signUp
  api.signUp(formData) // the singular variant of index
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

// Sign In
const onSignIn = function (event) {
  event.preventDefault()
  // Stops page from refreshing
  const form = event.target
  // Collects entire form: HTML + text
  const formData = getFormFields(form)
  // Parses and extracts the text from forms to be used as the argument for api.signIn
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

// Change Pw
const onChangePw = function (event) {
  event.preventDefault()
  // Stops page from refreshing
  const form = event.target
  // Collects form data: HTML + text
  const formData = getFormFields(form)
  // Extracts text from html
  api.changePw(formData)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFailure)
}

// Sign Out
const onSignOut = function (event) {
  event.preventDefault()
  // Stops page from refreshing
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// --- Separater --- CRUD CODE ---------//

// View all smoothies
const onViewAll = function () {
  event.preventDefault()
  // Stops page from refreshing
  api.viewAll()
    .then(ui.onViewAllSuccess)
    .catch(ui.onViewAllFailure)
}

// View one smoothie by id
const onViewOne = function (event) {
  event.preventDefault()
  // Stops page from refreshing
  const form = event.target
  // Collects entire form: HTML + text
  const formData = getFormFields(form)
  // Parses and extracts the text from forms to be used as the argument for api.signIn
  api.viewOne(formData.smoothyId)
    .then(ui.onViewOneSuccess)
    .catch(ui.onViewOneFailure)
}

// Create new smoothy
const onCreate = function (event) {
  event.preventDefault()
  // Stops page from refreshing
  const form = event.target
  // Collects entire form: HTML + text
  const formData = getFormFields(form)
  // Parses and extracts the text from forms to be used as the argument for api.signIn
  api.createNew(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onUpdate = function (event) {
  event.preventDefault()
  // Stops page from refreshing
  const id = $('#id-text').val()
  const name = $('#updated-name').val()
  const base = $('#updated-base').val()
  const fruit = $('#updated-fruit').val()
  const vegetable = $('#updated-vegetable').val()
  const booster = $('#updated-booster').val()
  const thickener = $('#updated-thickener').val()
  // Parses and extracts the text from forms to be used as the argument for api.signIn
  api.update(id, name, base, fruit, vegetable, booster, thickener)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onDelete = function (event) {
  event.preventDefault()
  // Stops page from refreshing
  const smoothyId = $('select option:selected').data('smoothiesid')
  $('select option:selected').remove()
  api.destroy(smoothyId)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}

const changeComp = function (event) {
  const button = $(event.relatedTarget) // Button that triggered the modal
  const smoothyId = button.data('smoothy-id') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  const modal = $(this)
  modal.find('.smoothy-id').val(smoothyId)
}

const onShow = function () {
  event.preventDefault()
  // Stops page from refreshing
  api.viewAll()
    .then(ui.onShowSuccess)
}

const onPassId = function (event) {
  event.preventDefault()
  // Stops page from refreshing
  const smoothyId = $('select option:selected').data('smoothiesid')
  api.viewOne(smoothyId)
    .then(ui.onViewOneSuccess)
    .catch(ui.onViewOneFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePw,
  onSignOut,
  onViewAll,
  onViewOne,
  onCreate,
  onUpdate,
  onDelete,
  changeComp,
  onShow,
  onPassId
}

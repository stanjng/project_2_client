'use strict'
const events = require('./events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-pw').on('submit', events.onChangePw)
  $('#sign-out').on('submit', events.onSignOut)
  $('#view-all-smoothies').on('submit', events.onViewAll)
  $('.view-smoothies-modal').on('click', events.onViewAll)
  $('#view-one-smoothie').on('submit', events.onViewOne)
  $('#create-smoothy').on('submit', events.onCreate)
  $('#update-smoothy').on('submit', events.onUpdate)
  $('#delete-smoothy').on('submit', events.onDelete)
  $('#updating-modal').on('show.bs.modal', events.changeComp)
  $('.view-single-smoothie-div').on('click', events.onShow)
  $('.view-smoothy').on('submit', events.onPassId)
  $('.select-a-smoothy').on('click', () => {
    $('.show-smoothies').html(``)
  })
})

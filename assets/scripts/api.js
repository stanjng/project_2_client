'use strict'
const store = require('./store.js')

const config = require('./config')
// const store = require('./store.js')

const signUp = function(formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up/',
    data: formData
  })
}

const signIn = function(formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in/',
    data: formData
  })
}

const changePw = function(formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = function() {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const viewAll = function() {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/smoothies`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const viewOne = function(smoothieId) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/smoothies/` + smoothieId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createNew = function(formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/smoothies',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const update = function(id, name, base, fruit, vegetable, booster, thickener) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/smoothies/` + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'smoothy': {
        'id': id,
        'name': name,
        'base': base,
        'fruit': fruit,
        'vegetable': vegetable,
        'booster': booster,
        'thickener': thickener
      }
    }
  })
}

const destroy = function(id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/smoothies/` + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePw,
  viewAll,
  viewOne,
  createNew,
  update,
  destroy
}

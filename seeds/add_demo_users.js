'use strict';

const User = require('../models/User')

module.exports.seed = (knex, Promise) =>
  new User({
    name: 'Matt',
    email: 'abc@123.com',
  }).save()
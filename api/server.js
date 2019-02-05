#!/usr/bin/env node
'use strict';

/**
 * Use `server.js` to run your application without `$ strapi start`.
 * To start the server, run: `$ npm start`.
 *
 * This is handy in situations where the Strapi CLI is not relevant or useful.
 */
if (process.env.NODE_ENV !== 'production') {
  console.log('Loading the configuration from .env file...')
  const result = require('dotenv').config({path: '../.env'});
  console.log({result});
}

process.chdir(__dirname);

(() => {
  const strapi = require('strapi');
  strapi.start();
})();

'use strict';
const axios = require('axios')

/**
 * Lifecycle callbacks for the `Event` model.
 */

module.exports = {
  // Before saving a value.
  // Fired before an `insert` or `update` query.
  // beforeSave: async (model) => {},

  // After saving a value.
  // Fired after an `insert` or `update` query.
  // afterSave: async (model, result) => {},

  // Before fetching all values.
  // Fired before a `fetchAll` operation.
  // beforeFetchAll: async (model) => {},

  // After fetching all values.
  // Fired after a `fetchAll` operation.
  // afterFetchAll: async (model, results) => {},

  // Fired before a `fetch` operation.
  // beforeFetch: async (model) => {},

  // After fetching a value.
  // Fired after a `fetch` operation.
  // afterFetch: async (model, result) => {},

  // Before creating a value.
  // Fired before an `insert` query.
  // beforeCreate: async (model) => {},

  // After creating a value.
  // Fired after an `insert` query.
  afterCreate: async (entry) => {
    axios.post(strapi.config.currentEnvironment.staticWebsiteBuildURL, entry)
      .catch(() => {
          // Ignore
        }
      );
  },

  // Before updating a value.
  // Fired before an `update` query.
  // beforeUpdate: async (model) => {},

  // After updating a value.
  // Fired after an `update` query.
  afterUpdate: async (entry) => {
    axios.post(strapi.config.currentEnvironment.staticWebsiteBuildURL, entry)
      .catch(() => {
          // Ignore
        }
      );
  },

  // Before destroying a value.
  // Fired before a `delete` query.
  // beforeDestroy: async (model) => {},

  // After destroying a value.
  // Fired after a `delete` query.
  afterDestroy: async (entry) => {
    axios.post(strapi.config.currentEnvironment.staticWebsiteBuildURL, entry)
      .catch(() => {
          // Ignore
        }
      );
  }
};

'use strict';
const axios = require('axios');
/* global Event */

/**
 * Event.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

const { models: { mergeStages } } = require('strapi-utils');

module.exports = {

  /**
   * Promise to fetch all events.
   *
   * @return {Promise}
   */

  fetchAll: (params, next, { populate } = {}) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('event', params);
    const hook = strapi.hook[Event.orm];
    // Generate stages.
    const populateStage = hook.load().generateLookupStage(Event, { whitelistedPopulate: populate }); // Nested-Population
    const matchStage = hook.load().generateMatchStage(Event, filters); // Nested relation filter
    const aggregateStages = mergeStages(populateStage, matchStage);

    const result = Event.aggregate(aggregateStages)
      .skip(filters.start)
      .limit(filters.limit);

    if (_.has(filters, 'start')) result.skip(filters.start);
    if (_.has(filters, 'limit')) result.limit(filters.limit);
    if (!_.isEmpty(filters.sort)) result.sort(filters.sort);

    return result;
  },

  /**
   * Promise to fetch a/an event.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Event.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Event
      .findOne(_.pick(params, _.keys(Event.schema.paths)))
      .populate(populate);
  },

  /**
   * Promise to count events.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('event', params);

    return Event
      .count()
      .where(filters.where);
  },

  /**
   * Promise to add a/an event.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Event.associations.map(ast => ast.alias));
    const data = _.omit(values, Event.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Event.create(data);

    // Create relational data and return the entry.
    return Event.updateRelations({ _id: entry.id, values: relations });
  },

  /**
   * Promise to edit a/an event.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Event.associations.map(a => a.alias));
    const data = _.omit(values, Event.associations.map(a => a.alias));

    // Update entry with no-relational data.
    const entry = await Event.update(params, data, { multi: true });

    // Update relational data and return the entry.
    return Event.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an event.
   *
   * @return {Promise}
   */

  remove: async params => {
    // Select field to populate.
    const populate = Event.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    // Note: To get the full response of Mongo, use the `remove()` method
    // or add spent the parameter `{ passRawResult: true }` as second argument.
    const data = await Event
      .findOneAndRemove(params, {})
      .populate(populate);

    if (!data) {
      return data;
    }

    await Promise.all(
      Event.associations.map(async association => {
        if (!association.via || !data._id) {
          return true;
        }

        const search = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: data._id } : { [association.via]: { $in: [data._id] } };
        const update = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: null } : { $pull: { [association.via]: data._id } };

        // Retrieve model.
        const model = association.plugin ?
          strapi.plugins[association.plugin].models[association.model || association.collection] :
          strapi.models[association.model || association.collection];

        return model.update(search, update, { multi: true });
      })
    );
    request.post(strapi.config.currentEnvironment.staticWebsiteBuildURL, entry);
    return data;
  },

  /**
   * Promise to search a/an event.
   *
   * @return {Promise}
   */

  search: async (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('event', params);
    // Select field to populate.
    const populate = Event.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    const $or = Object.keys(Event.attributes).reduce((acc, curr) => {
      switch (Event.attributes[curr].type) {
        case 'integer':
        case 'float':
        case 'decimal':
          if (!_.isNaN(_.toNumber(params._q))) {
            return acc.concat({ [curr]: params._q });
          }

          return acc;
        case 'string':
        case 'text':
        case 'password':
          return acc.concat({ [curr]: { $regex: params._q, $options: 'i' } });
        case 'boolean':
          if (params._q === 'true' || params._q === 'false') {
            return acc.concat({ [curr]: params._q === 'true' });
          }

          return acc;
        default:
          return acc;
      }
    }, []);

    return Event
      .find({ $or })
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
  }
};

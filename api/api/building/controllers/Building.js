'use strict';

/**
 * Building.js controller
 *
 * @description: A set of functions called "actions" for managing `Building`.
 */

module.exports = {

  /**
   * Retrieve building records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.building.search(ctx.query);
    } else {
      return strapi.services.building.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a building record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.building.fetch(ctx.params);
  },

  /**
   * Count building records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.building.count(ctx.query);
  },

  /**
   * Create a/an building record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.building.add(ctx.request.body);
  },

  /**
   * Update a/an building record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.building.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an building record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.building.remove(ctx.params);
  }
};

'use strict';

/**
 * Architect.js controller
 *
 * @description: A set of functions called "actions" for managing `Architect`.
 */

module.exports = {

  /**
   * Retrieve architect records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.architect.search(ctx.query);
    } else {
      return strapi.services.architect.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a architect record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.architect.fetch(ctx.params);
  },

  /**
   * Count architect records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.architect.count(ctx.query);
  },

  /**
   * Create a/an architect record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.architect.add(ctx.request.body);
  },

  /**
   * Update a/an architect record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.architect.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an architect record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.architect.remove(ctx.params);
  }
};

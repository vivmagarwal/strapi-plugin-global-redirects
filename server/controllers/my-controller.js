'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('global-redirects')
      .service('myService')
      .getWelcomeMessage();
  },
};

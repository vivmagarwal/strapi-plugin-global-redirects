"use strict";

/**
 * `global-redirects` middleware.
 */

const globalRedirectMiddleware = async (strapi, ctx, next) => {
  // strapi.log.info("In globalRedirectMiddleware middleware.");
  // console.log("In globalRedirectMiddleware middleware.");
  // console.log(ctx.request);

  // ctx.status = 301;
  // ctx.redirect("https://www.nytimes.com/");

  try {
    return await strapi
      .plugin("global-redirects")
      .service("globalRedirectsService")
      .handleGlobalRedirects(ctx);
  } catch (error) {
    ctx.throw(500, error);
  }

  await next();

  // strapi.log.info("In globalRedirectMiddleware middleware.");
  // console.log("In globalRedirectMiddleware middleware.");
};

module.exports = ({ strapi }) => {
  strapi.server.use((ctx, next) => globalRedirectMiddleware(strapi, ctx, next));
};

"use strict";

/**
 * `qwerty` middleware.
 */

const test = async (strapi, ctx, next) => {
  strapi.log.info("In qwerty middleware.");
  // console.log("In qwerty middleware.");

  // console.log(ctx.request);

  // ctx.status = 301;
  // ctx.redirect("https://www.nytimes.com/");

  await next();

  // strapi.log.info("In qwerty middleware.");
  // console.log("In qwerty middleware.");
};

module.exports = ({ strapi }) => {
  strapi.server.use((ctx, next) => test(strapi, ctx, next));
};

// module.exports = (config, { strapi }) => {
//   // Add your own logic here.
//   return async (ctx, next, strapi) => {
//     strapi.log.info("In qwerty middleware.");
//     console.log("In qwerty middleware.");

//     await next();

//     strapi.log.info("In qwerty middleware.");
//     console.log("In qwerty middleware.");
//   };
// };

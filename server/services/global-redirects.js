"use strict";

module.exports = ({ strapi }) => ({
  handleGlobalRedirects(ctx) {
    // check context URL
    // make sure that the method is GET

    strapi.log.info("In globalRedirectMiddleware middleware.");
    console.log("In globalRedirectMiddleware middleware.");
    console.log(ctx.request);
  },

  // getWelcomeMessage(ctx) {
  //   ctx.status = 301;
  //   return ctx.redirect("https://www.nytimes.com/");
  //   // return "Welcome to Strapi 🚀";
  // },
});

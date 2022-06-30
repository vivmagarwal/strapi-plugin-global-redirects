"use strict";

const { qwerty, globalRedirect } = require("./middlewares");

module.exports = ({ strapi }) => {
  // bootstrap phase
  qwerty({ strapi });
  globalRedirect({ strapi });
};

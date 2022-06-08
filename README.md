# Strapi plugin global-redirects

Provides the ability to create manual redirects and maintain a canonical URL for all content, redirecting all other requests to that path.

You can now enable your plugin by adding the following in `./config/plugins.js`
```
module.exports = {
  // ...
  'global-redirects': {
    enabled: true
  },
  // ...
}
```
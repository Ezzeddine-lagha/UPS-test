const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    setupNodeEvents: function (on, config) {
      return require('./cypress/plugins/index.js')(on, config)

    },
    baseUrl: 'https://usptestqa.pages.dev/fake-contact',
  
  },
  viewportHeight: 768,
  viewportWidth: 1266,


});
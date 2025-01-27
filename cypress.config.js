const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://carvana.com/cars",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  requestTimeout: 30000,
  responseTimeout: 30000,
  defaultCommandTimeout: 15000,
  retries: {
    runMode: 2,
  },
  video: true,
  trashAssetsBeforeRuns: true,
  viewportWidth: 1440,
  viewportHeight: 900,
  waitForAnimations: true,
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ujhvas',
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});

const { defineConfig } = require("cypress");
const describeGenerator = require('./src/index'); 

module.exports = defineConfig({
  viewportHeight: 1920,
  viewportWidth: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      describeGenerator(on, config);
    },
  specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  baseUrl: 'https://www.google.com/?safe=active&ssui=on'

  },
});

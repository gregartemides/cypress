import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Ensure this pattern matches your test file
    baseUrl: 'http://klarpay.local:3000', // Replace with your actual base URL
  },
});

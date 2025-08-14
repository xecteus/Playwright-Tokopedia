// @ts-check
import { defineConfig, devices } from '@playwright/test';

const config = ({
  testDir: './features',
  timeout: 30 *1000,
  // below is for assertion timeout
  expect : {
    timeout: 5 * 1000
  },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    trace: 'on-first-retry',
    headless: false,
  },

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

module.exports = config;

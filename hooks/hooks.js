const { Before, BeforeAll, AfterAll, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

let browser;

// Function to pick storage file based on account tags
function getStoragePath(tag) {
  if (tag.includes('@newaccount')) return path.resolve(__dirname, '../auth/newaccount.json');
  if (tag.includes('@useraccount')) return path.resolve(__dirname, '../auth/useraccount.json');
  return null;
}
/*--------------------------------------------------*/

BeforeAll(async function () {
  browser = await chromium.launch({
    headless: false,
    args: ['--disable-blink-features=AutomationControlled']
  });
});

/**
 * Before hook
 * Will pick the right storage state if there is no @no-login tag
**/
Before(async function (scenario) {
  const tags = scenario.pickle.tags.map(t => t.name);
  const storagePath = getStoragePath(tags);

  if (tags.includes('@no-login')) {
    // Force no login: clean context
    this.context = await browser.newContext();
  } else if (storagePath) {
    // Account-specific login
    if (!fs.existsSync(storagePath)) {
      throw new Error(
        `Storage file not found: ${storagePath}\n` +
        `Run "node scripts/save-login" for that account and complete OTP manually.`
      );
    }
    this.context = await browser.newContext({ storageState: storagePath });
  } else {
    // Fallback: no login, clean context
    this.context = await browser.newContext();
  }

  this.page = await this.context.newPage();
  global.page = this.page;
});

After(async function () {
  await this.context?.close();
});

AfterAll(async function () {
  await browser?.close();
});
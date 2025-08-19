const { chromium } = require('@playwright/test');
const path = require('path');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 50,
    args: ['--disable-blink-features=AutomationControlled']
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  console.log("Opening Tokopedia...");
  await page.goto('https://www.tokopedia.com/');

  // Wait for manual login (including OTP)
  const myAccountHeader = page.locator('#my-profile-header');
  await myAccountHeader.waitFor({ timeout: 5 * 60 * 1000 }); // wait up to 5 min

  console.log("Login success. Saving useraccount.json...");
  await context.storageState({ path: path.resolve(__dirname, '../auth/useraccount.json') });

  await browser.close();
})();
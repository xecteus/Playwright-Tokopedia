const { Given, Then, When } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const pageUrls = require('../pages/urls/pageURLs');
const elements = require('../pages/elements');

/**
 * Given Step
 */
Given('I navigate to the {string} page', {timeout: 10000}, async function (pageKey) {
  const url = pageUrls[pageKey];

  if (!url) {
    throw new Error(`No URL found for key: "${pageKey}"`);
  }

  await global.page.goto(url);
});

/**
 * When Step
 */

When('I click the {string} button', async function (elementName){
    const selector = elements[elementName];
    if (!selector) {
      throw new Error(`No selector found for element: "${elementName}"`);
    }

    const locator = global.page.locator(selector);
    await locator.click();
});

/**
 * Then Step
 */
Then('I expect the following elements:', async function (dataTable) {
  for (const row of dataTable.hashes()) {
    const elementName = row['Element Name'];
    const assertionType = row['Assertion'].toLowerCase();

    const selector = elements[elementName];
    if (!selector) {
      throw new Error(`No selector found for element: "${elementName}"`);
    }

    const locator = global.page.locator(selector);

    if (assertionType === 'visible') {
      await expect(locator).toBeVisible();
    } else if (assertionType === 'invisible') {
      await expect(locator).toBeHidden();
    } else {
      throw new Error(`Unsupported assertion type: "${assertionType}"`);
    }
  }
});
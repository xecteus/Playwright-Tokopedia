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

  await global.page.goto(url, { waitUntil: 'domcontentloaded' });
});

//same as above, just adding different keywords
Given('I am on the {string} page', {timeout: 10000}, async function (pageKey){
  const url = pageUrls[pageKey];

  if (!url) {
    throw new Error(`No URL found for key: "${pageKey}"`);
  }

  await global.page.goto(url, { waitUntil: 'domcontentloaded' });
});

Given('I click {string} button', async function (elementName){
  const selector = elements[elementName];
    if (!selector) {
      throw new Error(`No selector found for element: "${elementName}"`);
    }

    const locator = global.page.locator(selector);
    await locator.click();
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

When('I see the {string} element is visible', async function (elementName){
  const selector = elements[elementName];
    if (!selector) {
      throw new Error(`No selector found for element: "${elementName}"`);
    }

    const locator = global.page.locator(selector);
    
    try{
      await expect(locator).toBeVisible({timeout: 5000}); //Adjust timeout when needed
    } catch (error) {
      throw new Error(`Element "${elementName}" with selector "${selector}" was NOT visible`)
    }
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

Then('I expect the {string} elements is visible', async function (elementName){
  const selector = elements[elementName];
    if (!selector) {
      throw new Error(`No selector found for element: "${elementName}"`);
    }

    const locator = global.page.locator(selector);
    
    try{
      await expect(locator).toBeVisible({timeout: 5000}); //Adjust timeout when needed
    } catch (error) {
      throw new Error(`Element "${elementName}" with selector "${selector}" was NOT visible`)
    }
});
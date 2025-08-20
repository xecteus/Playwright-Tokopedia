const { Given, Then, When } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const pageUrls = require('../pages/urls/pageURLs');
const elements = require('../pages/elements');

/**
 * Helper: Get locator (supports optional iframe)
 * Format in elements file:
 * iframe[name="cc_iframe"] | #bankNumber
*/
async function getLocator(selector) {
  if (!selector) throw new Error('Selector is undefined');

  if (selector.includes('|')) {
    const [iframeSelector, innerSelector] = selector.split('|').map(s => s.trim());
    return global.page.frameLocator(iframeSelector).locator(innerSelector);
  }
  return global.page.locator(selector);
}

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

    const locator = await getLocator(selector);
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

    const locator = await getLocator(selector);
    await locator.click();
});

When('I see the {string} element is visible', async function (elementName){
  const selector = elements[elementName];
    if (!selector) {
      throw new Error(`No selector found for element: "${elementName}"`);
    }

    const locator = await getLocator(selector);
    
    try{
      await expect(locator).toBeVisible({timeout: 5000}); //Adjust timeout when needed
    } catch (error) {
      throw new Error(`Element "${elementName}" with selector "${selector}" was NOT visible`)
    }
});

When('I go to previous page', async function () {
  await global.page.goBack({ waitUntil: 'domcontentloaded' });
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

    const locator = await getLocator(selector);

    if (assertionType === 'visible') {
      await expect(locator).toBeVisible();
    } else if (assertionType === 'invisible') {
      await expect(locator).toBeHidden();
    } else {
      throw new Error(`Unsupported assertion type: "${assertionType}"`);
    }
  }
});

Then('I expect the {string} element is visible', async function (elementName){
  const selector = elements[elementName];
    if (!selector) {
      throw new Error(`No selector found for element: "${elementName}"`);
    }

    const locator = await getLocator(selector);
    
    try{
      await expect(locator).toBeVisible({timeout: 5000}); //Adjust timeout when needed
    } catch (error) {
      throw new Error(`Element "${elementName}" with selector "${selector}" was NOT visible`)
    }
});

Then('I should be on the {string} page', async function (pageKey) {
  const url = pageUrls[pageKey];

  if (!url) {
    throw new Error(`No URL found for key: "${pageKey}"`);
  }

  await expect(global.page).toHaveURL(url);
});
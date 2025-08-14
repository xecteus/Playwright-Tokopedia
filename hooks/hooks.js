const { Before, BeforeAll, AfterAll, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const path = require('path');

let browser;

BeforeAll(async function () {
  browser = await chromium.launch({
    headless: false,
    args: ['--disable-blink-features=AutomationControlled']
  });
});

Before({ tags: '@no-login' }, async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
  global.page = this.page;
});

Before({ tags: 'not @no-login' }, async function () {
  this.context = await browser.newContext({
    storageState: path.resolve(__dirname, '../auth.json')
  });
  this.page = await this.context.newPage();
  global.page = this.page;
});

After(async function () {
  await this.context?.close();
});

AfterAll(async function () {
  await browser?.close();
});
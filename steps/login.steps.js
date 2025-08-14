const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
const {LoginPage} = require('../pages/LoginPage');

let loginPage;

Given('I navigate to the login page', async function () {
        // Write code here that turns the phrase above into concrete actions
        loginPage = new LoginPage(this.page);
        await loginPage.goto();
    });

When('I login with {string} and {string}', async function (username, password) {
        // Write code here that turns the phrase above into concrete actions
        await loginPage.login(username,password);
    });

Then('I should see the 2FA input',{ timeout: 10000 }, async function () {
        // Write code here that turns the phrase above into concrete actions
        await loginPage.verifyLogin();
    });
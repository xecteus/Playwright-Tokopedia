const {expect} = require ('@playwright/test')

class LoginPage {
    constructor(page){
        this.page = page;
        this.articleDialog = page.locator("//article[@role='dialog']");
        this.articleDialogCloseBtn = page.locator("article button svg");
        this.usernameInput = page.getByTestId('email-phone-input');
        this.passwordInput = page.locator("#password-input");
        this.twoFactorInput = page.getByLabel('otp input');
        this.loginHomeBtn = page.getByTestId('btnHeaderLogin');
        this.loginBtn = page.getByLabel('login-button');
        this.nextBtnUsername = page.getByTestId('email-phone-submit');
    }

    async goto(){
        await this.page.goto('https://www.tokopedia.com/');

        // First time users visiting the page, it will triggers article dialog
        if (await this.articleDialog.isVisible().catch(() => false)){
            console.log('Article Dialog is visible, closing it ...')
            await this.articleDialogCloseBtn.click();
        }
        else {
            console.log('Article Dialog element is not found or not clickable');
        }
    }

    async login(username, password){
        await this.loginHomeBtn.click();
        await this.usernameInput.fill(username);
        await this.nextBtnUsername.click();
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }

    async verifyLogin(){
        await expect(this.twoFactorInput).toBeVisible({timeout: 10000});
    }
    
}

module.exports = { LoginPage };
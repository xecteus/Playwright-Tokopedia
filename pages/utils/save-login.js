const { chromium } = require('@playwright/test');

(async () => {
    const browser = await chromium.launch({
        headless: false,
        slowMo: 50,
        args: [
        '--disable-blink-features=AutomationControlled'
        ]
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    console.log("Opening Tokopedia homepage...");
    await page.goto('https://www.tokopedia.com/');

    // Wait until the profile header is visible after login
    const myAccountHeader = page.locator('#my-profile-header');
    await myAccountHeader.waitFor({ timeout: 5 * 60 * 1000 }); // 5 minutes max wait

    console.log("Log in successfull. Saving auth.json...");
    await context.storageState({ path: 'auth.json' });

    await browser.close();
})();
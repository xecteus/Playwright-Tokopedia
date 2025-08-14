const path = require('path');
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({
        headless: false,
        slowMo: 50,
        args: ['--disable-blink-features=AutomationControlled']
    });

    const context = await browser.newContext({
        storageState: path.resolve(__dirname, '../../auth.json')
    });

    const page = await context.newPage();
    await page.goto('https://www.tokopedia.com/');

    try {
        await page.locator('#my-profile-header').waitFor({ timeout: 10000 });
        console.log("Logged in");
    } catch {
        console.log("Not logged in");
    }

    await browser.close();
})();

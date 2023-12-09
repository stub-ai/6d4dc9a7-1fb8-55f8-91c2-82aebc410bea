const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the page
    await page.goto('https://www.example.com');

    // Execute your userscript in the page context
    await page.evaluate(() => {
        // Your userscript code goes here, for example:
        const menuButton = document.getElementById("initiumMenuButton");
        if (menuButton) {
            menuButton.style.display = "block";
        }
    });

    await browser.close();
})();
// commonjs_puppeteer.js
// commonjs_puppeteer.js
// const puppeteerPromise = import('puppeteer');

// export default puppeteerPromise;

import puppeteer from "puppeteer";


async function runPuppeteer({url}) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try {
        await page.goto(url);
        // Add any additional Puppeteer actions here, such as taking screenshots, scraping data, etc.
    } catch (error) {
        console.error('Error navigating to contact info link:', error);
    } finally {
        await browser.close();
    }
}

export default runPuppeteer;

const playwright = require('playwright');
const { test } = require('@playwright/test');

const browserTypeAll = ['chromium', 'firefox', 'webkit'];
const bt = browserTypeAll[0];


test('test', async () => {
	const browser = await playwright[bt].launch({ headless: false });
	const context = await browser.newContext();
	const page = await context.newPage();

	await page.goto('https://www.google.co.jp/');
	// await page.pause();

	await page.click('[aria-label="検索"]');
	await page.fill('[aria-label="検索"]', 'shift');

	await Promise.all([page.waitForNavigation(), page.press('[aria-label="検索"]', 'Enter')]);
});

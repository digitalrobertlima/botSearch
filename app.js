const pup = require('puppeteer');

const url = "https://www.mercadolivre.com.br/";
const searchFor = "cafeteira";

async function openBrowser() {
	const browser = await pup.launch({headless: false});
	const page = await browser.newPage();
	console.log('Iniciei!');

	await page.goto(url);
	console.log('Fui para ' + url);

	page.click('.cookie-consent-banner-opt-out__action--primary');
	page.click('.cookie-consent-snackbar__close');

	await page.waitForSelector('#cb1-edit');
	await page.type('#cb1-edit', searchFor);

	await Promise.all([
		page.waitForNavigation(),
		page.click('.nav-search-btn')
	]);

	await page.waitForTimeout(3000);

	await browser.close();
	console.log("Fechei");
}

openBrowser();

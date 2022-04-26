const pup = require('puppeteer');

const url = "localhost:3000";
const searchFor = "iphone submarino";

async function openBrowser() {
	const browser = await pup.launch({headless: false});
	const page = await browser.newPage();
	console.log('Iniciei!');

	await page.setRequestInterception(true);
	page.on('request', request => {
		if(request.resourceType() === 'script') {
			request.abort();
		} else {
			request.continue();
		}
	});

	await page.goto(url);
	console.log('Fui para ' + url);

	/*
	//page.click('.cookie-consent-banner-opt-out__action--primary');
	//page.click('.cookie-consent-snackbar__close');
	
	//await page.click('.cookie-consent-banner-opt-out__action--primary');
	//await page.click('.cookie-consent-snackbar__close')
	
	await page.waitForSelector('.gLFyf.gsfi');
	await page.type('.gLFyf.gsfi', searchFor);

	await Promise.all([
		page.waitForNavigation(),
		page.click('#gNO89b')
	]);

	await page.waitForTimeout(3000);

	*/

	//Fechar browser:
	
	//await browser.close();
	//console.log("Fechei");
}

openBrowser();

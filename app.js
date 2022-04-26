//Para utilizar o programa de buscas automáticas altere apenas as constantes abaixo:

const produto = "leitor de código de barras usb";
const loja = "shopee"
const precoMin = 50;
const precoMax = 300;

// -- ATENÇÃO --
//Não altere as linhas abaixo ao menos que saiba o que esteja fazendo!

const pup = require('puppeteer');
const dadosPesquisa = {
	produto: produto,
	loja: loja,
	valorMin: precoMin,
	valorMax: precoMax
};

let termos = "";

for(let i = 0; i < produto.length; i++){
	let letra = produto[i];
	if(letra == " ")
		termos = termos + "+";
	if(letra != " ")
		termos = termos + letra;

	//console.log(termos);
}

termos = termos + "+";

for(let i = 0; i < loja.length; i++){
        let letra = loja[i];
        if(letra == " ")
                termos = termos + "+";
        if(letra != " ")
                termos = termos + letra;

        //console.log(termos);
}

//console.log(termos);

const url = "https://www.google.com.br/search?q=" + termos + "&tbm=shop&tbs=mr:1,price:1,ppr_min:" + precoMin + ",ppr_max:" + precoMax + ",p_ord:p";

//const url = "https://www.google.com.br/search?tbm=shop&q=" + termos + "&tbs=mr%3A1%2Cprice%3A1%2Cppr_min%3A" + precoMin + "%2Cppr_max%3A" + precoMax + "&ei=CWFoYp-MBO_m1sQP7Z6ykAQ&ved=0ahUKEwjftJKV07L3AhVvs5UCHW2PDEIQuisIqwgoBQ";

//const url = "https://www.google.com.br/search?q=" + termos + "&source=lnms&tbm=shop&sa=X&ved=2ahUKEwi0we3X0rL3AhVguJUCHayUC6IQ_AUoAXoECAIQAw";

async function openBrowser() {

	const browser = await pup.launch({headless: false});
	const page = await browser.newPage();
	console.log('Iniciei!');

	await page.goto(url);
	console.log('Fui para ' + url);
	console.log(dadosPesquisa)

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
	
	/*
	await browser.close();
	console.log("Fechei");
	*/
}

openBrowser();

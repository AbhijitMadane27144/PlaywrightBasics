import {chromium, expect, test, Page, Browser} from '@playwright/test';

test('practice test', async ({page})=>{ 

const context = page.context();

const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.click('#openWindow')
]);

await newPage.waitForLoadState();
console.log(await newPage.title());

  /* test.setTimeout(20000);
await page.goto('https://playwright.dev/');
 await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Generating tests' }).click();
  await page.getByRole('link', { name: 'How to record a test' }).click();
  await page.getByRole('link', { name: 'Python' }).click();
  await page.getByRole('link', { name: 'Emulate viewport size', exact: true }).click();
  await page.getByRole('link', { name: 'Actions' }).click();
const value=await page.getByRole('link', { name: 'Mouse click', exact: true })
 await expect(value).toHaveText('Abgihit',{timeout:5000})


 const value1= await page.getByRole('link', { name: 'Mouse click', exact: true })

 if(!(await value1.isChecked())){
   await value1.check();
 } 

 await value.click();
   await page.pause();*/
})


test('practice test1', async ({})=>{ 

const browser  = await chromium.launch();
const context= await browser.newContext();
const page1 = await context.newPage();


await page1.goto('/');
const pagePromise = context.waitForEvent('page');


await page1.getByRole('link', { name: 'Docs' }).click();


const page2=await pagePromise;
await page2.getByRole('link', { name: 'documentation' }).click();

await page2.close();



});
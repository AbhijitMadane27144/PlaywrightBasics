import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM/loginpage';
import fs from 'fs';
import {parse} from 'csv-parse/sync';

parse(fs.readFileSync('tests/testdata.csv'),{
columns:true,
skip_empty_lines:true

}) as any[];



test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('checkbox',{ name:'abhijit' }).check();
  await page.getByLabel(' First name ').fill('abhijit');
  await page.getByPlaceholder('Username').fill('abhijit');
  await page.getByText('Submit').click();
await page.locator('css=button:visible').locator('font:has-text("Installation")').click(); 
  await page.locator('css=button:visible').nth(0).click();
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('POM login test', async({page})=>{
const loginPage = new LoginPage(page);
loginPage.open();
loginPage.login('standard_user','secret_sauce');
loginPage.logout();
})
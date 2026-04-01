import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM/loginpage';
import fs from 'fs';
import {parse} from 'csv-parse/sync';
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

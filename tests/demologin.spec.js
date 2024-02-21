import { test, expect } from '@playwright/test';

test('Demo Login 1', async ({ page }) => {
  await page.goto('https://demo.applitools.com/');
  await page.pause();
  await page.locator('[placeholder="Enter your username"]').fill('Amisha');
  await page.locator('[placeholder="Enter your password"]').fill('1234');
  await page.locator('text= Sign in').click();
});

test.only('Demo Login 2', async ({ page }) => {
  await page.pause();
  await page.goto('https://practice.expandtesting.com/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('practice');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // ---------------------
  await page.close();
});

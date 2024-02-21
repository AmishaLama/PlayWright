import {test,expect } from '@playwright/test'

test('Assertion Demo', async({page})=>{
    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
    //checks element present or not
    await expect (page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);
    if (await page.getByRole('heading', { name: 'The Kitchen' })){
        await page.getByRole('heading', { name: 'The Kitchen' }).click()

    }
    //Visible or Hidden
    await expect (page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible();
    await expect.soft (page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden();
    //Enabled or Disabled
    await expect (page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled();
    await expect.soft (page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled();
    //Text matches or not
    await expect (page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen');
    await expect.soft (page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('The Kitchen');
    await page.pause()
    //Screenshot
    await expect(page).toHaveScreenshot()
})
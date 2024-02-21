import {test, expect } from '@playwright/test'

test ('Selector test', async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.pause()
    //Finding web objects using any object properties
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('standard_user')
    //Finding web objects using CSS Selector
    await page.locator('#login-button').click()
    //Finding web objects using Xpath
    await page.locator('//*[@id="password"]').fill('a_sauce')
    await page.locator('xpath=//*[@id="password"]').fill('secret_sauce')
    //Finding web objects using text
    await page.locator('text=LOGIN').click()





})
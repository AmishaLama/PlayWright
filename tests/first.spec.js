const {test, expect} = require('@playwright/test')
// const {a,b,c}=require('./demo/hello')

// console.log(a())
// console.log(b())
// console.log(c())
 test ('My First Test', async({page})=>{
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
 })
 
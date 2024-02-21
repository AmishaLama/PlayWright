import {test, expect} from '@playwright/test'

test('Slomo and recording', async({page})=>{
    const browser = await chromium.launch({ //launch browser
        slowMo: 500,
        headless:false
    })  

    const context = await browser.newContext() //create new incognito browser context
    
    const page = await context.newPage() //create a new page inside context

    await page.goto('')

    await context.close()
})
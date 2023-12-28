import { test, expect, chromium } from '@playwright/test';

test('login test', async()=>{
    // launch chromium 
    const browser = await chromium.launch({});
    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("(//a[@data-toggle='dropdown'])[3]")
    await page.click("text=Login")
    await page.click("'Login'")
    // await page.fill("input[name='email']", "amira.nasri88@gmail.com")
    // await page.fill("input[name='password']", "12345")
    // await page.click("input[value='Login']")

    // await page.waitForTimeout(5000)

    // const newContext = await browser.newContext();
    // const newPage = await newContext.newPage();

    // await newPage.goto("https://ecommerce-playground.lambdatest.io/")
    // await newPage.waitForTimeout(5000)


})


import { test, expect, chromium } from '@playwright/test';

test('register test', async()=>{
    // launch chromium 
    const browser = await chromium.launch({
        headless:false
    });
    const context = await browser.newContext();
    const page = await context.newPage()
 
 // test register 
    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("(//a[@data-toggle='dropdown'])[3]")
    await page.click("'Register'")
    await page.fill("input[name='firstname']", "amira")
    await page.fill("input[name='lastname']", "nasri")
    await page.fill("input[name='email']", "nasriamira88@gmail.com")
    await page.fill("input[name='telephone']","98444080")
    await page.fill("input[name='password']", "12345")
    await page.fill("input[name='confirm']","12345")
    const checkboxSelector = page.locator("id=input-agree");
    expect(checkboxSelector).not.toBeChecked();
    await checkboxSelector.check();
    expect(checkboxSelector).toBeChecked();
    await page.click("input[value='Continue']")
    await page.waitForTimeout(5000)
})
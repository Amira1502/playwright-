import { test, expect} from '@playwright/test';

test("handling alerts", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    page.on("dialog", async(alert) =>{
        const text = alert.defaultValue();
        console.log(text)
        await alert.accept("amira")
    })
    await page.locator("button:has-text('Click me')").nth(2).click()
    // await page.locator("button:has-text('Click me')").nth(1).click()
    // expect(page.locator("id=confirm-demo")).toContainText("'Cancerl!'")
    expect(page.locator("id=prompt-demo")).toContainText("'amira'")

    // modal bootstrap
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.locator("//button[@data-target='#myModal']")
    await page.locator("(//button[text()='Save Changes'])[1]")
})
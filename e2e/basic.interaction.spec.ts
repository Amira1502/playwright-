import { test, expect} from '@playwright/test';

test('form', async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const messageInput=page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message")
    console.log('Before entering data', + await messageInput.inputValue())
    await messageInput.type("Hi Amira")
    console.log('after waiting data', + await messageInput.inputValue())
})

test('sum', async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const sum1Input=page.locator("#sum1")
    const sum2Input=page.locator("#sum2")

    const getValueBtn = page.locator("//button[text()='Get Checked Value']")
    let num1=121;
    let num2=122;
    await sum1Input.fill("" + num1);
    await sum2Input.fill("" + num2);
    getValueBtn.click();
    const result = page.locator("#addmessage");
    console.log(await result.textContent());
    let expectedRes = num1 + num2;
    expect(result).toHaveText("" + expectedRes);
})

test("checkbox", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCheckbox = page.locator("id=isAgeSelected");
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();
 })